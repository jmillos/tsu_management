<?php

class TSU_User extends TSU_App {
	protected $postType = 'user';

	protected $registerFields = [
	    'crm_module_preferences' => [
	      'description' => 'Preferences by module',
	      'type'        => 'object'
	    ],
	];

	/**
	 * Hook in methods.
	 */
	public function __construct() {
		parent::__construct(false);
	}

	public function get_meta($post, $field_name, $request) {
		// echo "<pre>"; var_dump($post, $field_name);die;
		return get_user_meta($post['id'], $field_name, true);
	}

	public function update_meta($value, $post, $field_name){
		// echo "<pre>META ";var_dump($value, $post, $field_name);die;
		return update_user_meta($post->ID, $field_name, $value);
	}

	public function rest_api_post( $data, $post, $context ) {
		// echo "<pre>"; print_r($data);die;
		$ret = array(
			'id'			=> $data->data['id'],
			'name'    	 	=> $data->data['name'],
			'description'	=> $data->data['description'],
			'slug'	 		=> $data->data['slug'],
			'crm_module_preferences'	 		=> $data->data['crm_module_preferences'],
		);
		
		return $ret;
	}
}

$GLOBALS['TSU_User'] = new TSU_User();
