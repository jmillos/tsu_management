<?php

class TSU_Activity extends TSU_App {
	protected $postType = 'tsu_crm_activity';

	protected $registerFields = [
		'field_type' => [
	      'description' => 'Field type of activity',
	      'type'        => 'string',
	      'required' => true
	    ],
	    'field_result' => [
	      'description' => 'Field result of activity',
	      'type'        => 'string',
	      'required' => false
	    ],
	];

	private $itemType = 'activity';

	/**
	 * Hook in methods.
	 */
	public function __construct() {
		parent::__construct();

		// add_filter( "rest_{$this->postType}_query", array($this, 'rest_query') );		
	}

	public function include_post_type(){
		TSU_Post_types::register_post_type($this->postType, 'Actividad', 'Actividades');
	}

	public function rest_api_post( $data, $post, $context ) {
		$ret = array(
			'id'		 		=> $data->data['id'],
			'title'    	 		=> $data->data['title']['rendered'],
			'content'    		=> $data->data['content']['rendered'],
			'slug'	 	 		=> $data->data['slug'],
			'status'	 		=> $data->data['status'],
			'author' 	 		=> $post->post_author,
			'type'		 		=> $this->itemType,
			'field_type'		=> $data->data['field_type'],
			'field_result'		=> $data->data['field_result'],
			'date'     	 		=> $data->data['date'],
		);

		return $ret;
	}
}

$GLOBALS['TSU_Activity'] = new TSU_Activity();