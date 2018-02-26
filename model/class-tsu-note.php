<?php

class TSU_Note extends TSU_App {
	protected $postType = 'tsu_crm_note';

	protected $registerFields = [];

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

}

$GLOBALS['TSU_Note'] = new TSU_Note();