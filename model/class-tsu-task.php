<?php

class TSU_Task extends TSU_App {
	protected $postType = 'tsu_crm_task';

	protected $registerFields = [
		'field_type' => [
	      'description' => 'Field type of task',
	      'type'        => 'string',
	      'required' 	=> true
	    ],
	    'assigned_to' => [
	      'description' => 'User assigned to the task',
	      'type'        => 'integer',
	      'required' => true
	    ],
	];

	private $itemType = 'task';

	/**
	 * Hook in methods.
	 */
	public function __construct() {
		parent::__construct();

		// add_filter( "rest_{$this->postType}_query", array($this, 'rest_query') );		
	}

	public function include_post_type(){
		TSU_Post_types::register_post_type($this->postType, 'Tarea', 'Tareas');
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
			'assigned_to'		=> $data->data['assigned_to'],
			'date'     	 		=> $data->data['date'],
		);

		return $ret;
	}
}

$GLOBALS['TSU_Task'] = new TSU_Task();