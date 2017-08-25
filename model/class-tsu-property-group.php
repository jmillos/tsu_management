<?php

class TSU_Property_Group extends TSU_App {
	public static $postType = 'tsu_crm_pty_groups';

	/**
	 * Hook in methods.
	 */
	public static function init() {
		add_action( 'init', array( __CLASS__, 'include_post_type' ), 5 );
		add_action( 'rest_api_init', array(__CLASS__, 'rest_api_meta') );
		add_filter( 'rest_prepare_' . self::$postType, array(__CLASS__, 'rest_api_post'), 10, 3 );
	}

	public static function include_post_type(){
		TSU_Post_types::register_post_type(self::$postType, 'Grupo de propiedades', 'Grupos de propiedades');
	}

	public static function rest_api_meta(){
		/*register_rest_field(self::$postType, 'singular_name', array(
			'get_callback' => 'TSU_Property_Group::get_meta',
			'update_callback' => 'TSU_Property_Group::update_meta',
			'schema' => array('type' => 'string'),
	    ));*/
	}

	public static function rest_api_post( $data, $post, $context ) {
		$ret = array(
			'id'		 => $data->data['id'],
			'title'    	 => $data->data['title']['rendered'],
			'slug'	 	 => $data->data['slug'],
			'date'     	 => $data->data['date'],
		);
		
		return $ret;
	}
}

TSU_Property_Group::init();
