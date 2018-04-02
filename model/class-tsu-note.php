<?php

class TSU_Note extends TSU_App {
	protected $postType = 'tsu_crm_note';

	protected $registerFields = [];

	private $itemType = 'note';

	/**
	 * Hook in methods.
	 */
	public function __construct() {
		parent::__construct();

		// add_filter( "rest_{$this->postType}_query", array($this, 'rest_query') );		
	}

	public function include_post_type(){
		TSU_Post_types::register_post_type($this->postType, 'Nota', 'Notas');
	}

	public function rest_api_post( $data, $post, $context ) {
		$ret = array(
			'id'		 => $data->data['id'],
			'title'    	 => $data->data['title']['rendered'],
			'content'    => $data->data['content']['rendered'],
			'slug'	 	 => $data->data['slug'],
			'status'	 => $data->data['status'],
			'author' 	 => $post->post_author,
			'type'		 => $this->itemType,
			'date'     	 => $data->data['date'],
		);

		return $ret;
	}
}

$GLOBALS['TSU_Note'] = new TSU_Note();