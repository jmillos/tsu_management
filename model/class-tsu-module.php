<?php

class TSU_Module extends TSU_App {
	public static $postType = 'tsu_crm_modules';

	/**
	 * Hook in methods.
	 */
	public static function init() {
		add_action( 'init', array( __CLASS__, 'include_post_type' ), 5 );
		add_action( 'rest_api_init', array(__CLASS__, 'rest_api_meta') );
		add_filter( 'rest_prepare_' . self::$postType, array(__CLASS__, 'rest_api_post'), 10, 3 );
		// add_action( 'rest_insert_' . self::$postType, array(__CLASS__, 'rest_update_post'), 10, 2 );
		// add_filter( 'rest_'.self::$postType.'_query', array(__CLASS__, 'rest_list_') );
	}

	public static function include_post_type(){
		TSU_Post_types::register_post_type(self::$postType, 'Modulo', 'Modulos');
	}

	public static function rest_update_post($post, $request){
		if( in_array($post->post_status, array('rejected', 'approved')) ){
			
		}		
	}

	public static function rest_api_meta(){
		register_rest_field(self::$postType, 'singular_name', array(
			'get_callback' => 'TSU_Module::get_meta',
			'update_callback' => 'TSU_Module::update_meta',
			'schema' => array('type' => 'string'),
	    ));
	}

	public static function rest_api_post( $data, $post, $context ) {
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

TSU_Module::init();
