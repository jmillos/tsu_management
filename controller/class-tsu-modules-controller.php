<?php

class TSU_Modules_Controller {
	public static $keyPt = 'tsu_crm_modules';

	/**
	 * Hook in methods.
	 */
	public static function init() {
		// add_action( 'init', array( __CLASS__, 'register_taxonomies' ), 5 );
		add_action( 'init', array( __CLASS__, 'register_post_types' ), 5 );
		// add_action( 'init', array( __CLASS__, 'register_post_status' ), 9 );
		
		add_action( 'wp_ajax_tsu_crm_modules', array( __CLASS__, 'index' ) );
	}

	public static function index(){
		$args = array(
	        'post_type' => self::$keyPt,
	        'numberposts' => -1,
	        'orderby' => 'post_date',
	        'order' => 'ASC'
	    );

		$items = get_posts( $args );

		echo json_encode($items);
		wp_die();
	}

	public static function render(){
		echo '<div id="crm-app" />';
	}
}

TSU_Modules_Controller::init();