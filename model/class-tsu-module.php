<?php

class TSU_Module extends TSU_App {
	protected $postType = 'tsu_crm_modules';

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
		TSU_Post_types::register_post_type($this->postType, 'Modulo', 'Modulos');
	}

	public function rest_update_post($post, $request){
		if( in_array($post->post_status, array('rejected', 'approved')) ){

		}
	}

	public function rest_api_post( $data, $post, $context ) {
		$ret = array(
			'id'		 => $data->data['id'],
			'title'    	 => $data->data['title']['rendered'],
			'singular_name' => $data->data['singular_name'],
			'slug'	 	 => $data->data['slug'],
			'status'	 => $data->data['status'],
			'author' 	 => $post->post_author,
			'date'     	 => $data->data['date'],
		);

		return $ret;
	}
}

$GLOBALS['TSU_Module'] = new TSU_Module();
