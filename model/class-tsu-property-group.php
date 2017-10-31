<?php

class TSU_Property_Group extends TSU_App {
	protected $postType = 'tsu_crm_pty_groups';

	protected $registerFields = [
	    'singular_name' => [
	      'description' => 'Singular Name of the module',
	      'type'        => 'string'
	    ],
	];

	/**
	 * Hook in methods.
	 */
	public function __construct() {
		parent::__construct();
	}

	public function include_post_type(){
		TSU_Post_types::register_post_type($this->postType, 'Grupo de propiedades', 'Grupos de propiedades');
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

$GLOBALS['TSU_Property_Group'] = new TSU_Property_Group();
