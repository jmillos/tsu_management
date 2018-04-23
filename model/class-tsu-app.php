<?php

class TSU_App {
	/**
	 * Hook in methods.
	 */
	public function __construct($createPostType = true) {
		if($createPostType === true)
			add_action( 'init', array($this, 'include_post_type' ), 5 );

		add_action( 'rest_api_init', array($this, 'register_post_meta') );
		add_filter( 'rest_prepare_' . $this->postType, array($this, 'rest_api_post'), 10, 3 );
		// add_action( 'rest_insert_' . $this->$postType, array($this, 'rest_update_post'), 10, 2 );
		// add_filter( 'rest_'.$this->$postType.'_query', array($this, 'rest_query') );
	}
	
	/*public function rest_api_meta(){
		register_rest_field($this->postType, 'singular_name', array(
			'get_callback' => array($this, 'get_meta'),
			'update_callback' => array($this, 'update_meta'),
			'schema' => array('type' => 'string'),
		));
	}*/

	// Register post meta fields needed for posts
	public function register_post_meta() {
		if ( !empty($this->registerFields) && isset($this->postType) ) {
			foreach ($this->registerFields as $field => $fieldOpts) {
				register_rest_field( $this->postType, $field, array(
					'get_callback' => array($this, 'get_meta'),
					'update_callback' => array($this, 'update_meta'),
					'schema' => array(
						'description' => isset($fieldOpts['description']) ? $fieldOpts['description'] : $field,
						'type'        => isset($fieldOpts['type']) ? $fieldOpts['type'] : 'string',
						// 'context'     => array( 'view', 'edit' )
						'required'    => isset($fieldOpts['required']) ? $fieldOpts['required'] : false,
					),
				));
			}
		}
	}

	public function support_meta_orderby($routes) {
        if ( $route =& $routes['/wp/v2/' . $this->postType] ) {
            // Allow ordering by my meta value
            $route[0]['args']['orderby']['enum'][] = 'meta_value';

            // Allow only the meta keys that I want
            $route[0]['args']['meta_key'] = array(
                'description'       => 'The meta key to query.',
                'type'              => 'string',
                'enum'              => array_keys($this->registerFields),
                'validate_callback' => 'rest_validate_request_arg',
            );
        }

        return $routes;
    }


	public function get_meta($post, $field_name, $request) {
		// echo "<pre>"; var_dump($post, $field_name);die;
		return get_post_meta($post['id'], $field_name, true);
	}

	public function update_meta($value, $post, $field_name){
		// echo "<pre>META ";var_dump($value, $post, $field_name);die;
		return update_post_meta($post->ID, $field_name, $value);
	}
	
	public function getPostType(){
		return $this->postType;
	}
}