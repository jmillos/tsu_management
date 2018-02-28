<?php

class TSU_Record extends TSU_App {
	protected $postType = 'tsu_crm_record';

	protected $registerFields = [];

	/**
	 * Hook in methods.
	 */
	public function __construct() {
		parent::__construct();

		// add_filter( "rest_{$this->postType}_query", array($this, 'rest_query') );		
	}

	public function include_post_type(){
		TSU_Post_types::register_post_type($this->postType, 'Registro', 'Registros');
	}

	public function rest_query($args, $request){
		$args['post_parent__in'] = array(12157, 12159);
		// echo "<pre>"; var_dump($args, $request);die;

		return $args;
	}

	public function rest_api_post( $data, $post, $context ) {
		$ret = array(
			'id'		 => $data->data['id'],
			'title'    	 => $data->data['title']['rendered'],
			'slug'	 	 => $data->data['slug'],
			'parent'	 => $data->data['parent'],
			'date'     	 => $data->data['date'],
		);

		$customFields = [];
		foreach ($this->registerFields as $key => $field) {
			$customFields[$key] = $data->data[$key];

			if( $field['type'] === 'enum' && !is_array($data->data[$key]) ){
				$customFields[$key] = [ $data->data[$key] ];
			}
		}
		
		return $ret + $customFields;
	}

	public function register_post_meta(){
		$this->setRegisterFields();

		parent::register_post_meta();

	}

	public function setRegisterFields(){
		if( isset($_GET['parent']) ){
			$parent = $_GET['parent'];
			$groups = get_posts([
				'post_type' => $GLOBALS['TSU_Property_Group']->getPostType(),
				'post_parent' => $parent,
			]);

			$groupsId = array_map(function($i){
				return $i->ID;
			}, $groups);

			$fields = get_posts([
				'post_type' => $GLOBALS['TSU_Property']->getPostType(),
				'post_parent__in' => $groupsId,
				'order' => 'ASC',
			]);

			$customFields = array();
			foreach ($fields as $key => $field) {
				$customFields[$field->post_name] = [
			      'description' => $field->post_content,
			      'type'        => 'string',
			      'required' 	=> false
			    ];

			    if( $this->isFieldMultiple($field) ){
			    	$customFields[$field->post_name]['type'] = 'enum';
					// echo "<pre>";var_dump($customFields);
			    }
			}

			$this->registerFields = $this->registerFields + $customFields;

			// echo "<pre>"; var_dump($this->registerFields);die;
		}
	}

	private function isFieldMultiple($field){
		$fieldType = get_post_meta($field->ID, 'field_type', true);
		$fieldTypeOpts = get_post_meta($field->ID, 'field_type_opts', true);
		return $fieldType === 'selectfield' && $fieldTypeOpts['is_multiple'];
	}
}

$GLOBALS['TSU_Record'] = new TSU_Record();
