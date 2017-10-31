<?php

class TSU_Property extends TSU_App {
	protected $postType = 'tsu_crm_pty';

	protected $registerFields = [
	    'group' => [
	      'description' => 'Group of the property',
	      'type'        => 'integer'
	    ],
	    'field_type' => [
	      'description' => 'Field type of the property',
	      'type'        => 'string'
	    ],
	    'field_type_opts' => [
	      'description' => 'Field type options of the property',
	      'type'        => 'object'
	    ],
	];

	/**
	 * Hook in methods.
	 */
	public function __construct() {
		parent::__construct();
	}

	public function include_post_type(){
		TSU_Post_types::register_post_type($this->postType, 'Propiedad', 'Propiedades');
	}

	public function rest_api_post( $data, $post, $context ) {
		$ret = array(
			'id'		 => $data->data['id'],
			'title'    	 => $data->data['title']['rendered'],
			'slug'	 	 => $data->data['slug'],
			'date'     	 => $data->data['date'],
		);
		
		return $ret;
	}
}

$GLOBALS['TSU_Property'] = new TSU_Property();
