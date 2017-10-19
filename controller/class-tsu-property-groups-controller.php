<?php

class TSU_Property_Groups_Controller {
	public static $postType = 'tsu_crm_pty_groups';

	/**
	 * Hook in methods.
	 */
	public static function init() {
		add_action( 'wp_ajax_tsu_crm_property_groups', array( __CLASS__, 'index' ) );
		add_action( 'wp_ajax_tsu_crm_property_groups_add', array( __CLASS__, 'add' ) );
		add_action( 'wp_ajax_nopriv_tsu_crm_property_groups_add', array( __CLASS__, 'add' ) );
	}

	public static function index(){
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

	public static function add(){
		check_ajax_referer( self::$postType, 'security' );

		$p = $_POST;
		$newPost = array(
	        'post_title' => $p['title'],
	        'post_status' => 'publish',
	        'post_parent' => $p['parent'],
	        'post_type' => $postType,
	        // '' => $p[''],
	    );

		$postId = wp_insert_post( $newPost );

		wp_send_json($items);
	}
}

TSU_Property_Groups_Controller::init();