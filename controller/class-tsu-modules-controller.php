<?php

class TSU_Modules_Controller {
	public static $postType = 'tsu_crm_modules';

	/**
	 * Hook in methods.
	 */
	public static function init() {
		add_action( 'wp_ajax_tsu_crm_modules', array( __CLASS__, 'index' ) );
	}

	public static function index(){
		// echo wp_create_nonce( $postType );die;
		check_ajax_referer( self::$postType, 'security' );

		$args = array(
	        'post_type' => self::$postType,
	        'numberposts' => -1,
	        'orderby' => 'post_date',
	        'order' => 'ASC'
	    );

		$posts = get_posts( $args );

		wp_send_json($posts);
	}

	public static function render(){
		echo '<div id="crm-app" />';
	}
}

TSU_Modules_Controller::init();