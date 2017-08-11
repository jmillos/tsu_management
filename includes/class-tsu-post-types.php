<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class TSU_Post_types {
	/**
	 * Hook in methods.
	 */
	public static function init() {
		// add_action( 'init', array( __CLASS__, 'register_taxonomies' ), 5 );
		add_action( 'init', array( __CLASS__, 'register_post_types' ), 5 );
		// add_action( 'init', array( __CLASS__, 'register_post_status' ), 9 );
	}

	/**
	 * Register core post types.
	 */
	public static function register_post_types() {
		$ptModules = 'tsu_crm_modules';

		$labels = array(
			'name' => __( 'Modulos'),
			'singular_name' => __( 'Modulo' ),
			'add_new' => __('Añadir nuevo'),
			'add_new_item' => __('Añadir nuevo Modulo'),
			'edit_item' => __('Editar Modulo'),
			'new_item' => __('Nuevo Modulo'),
			'view_item' => __('Ver Modulo'),
			'search_items' => __('Buscar'),
			'not_found' =>  __('No se encontraron Modulos'),
			'not_found_in_trash' => __('No se encontraron Modulos en la Papelera'), 
			'parent_item_colon' => ''
		);

		$args = array(
			'labels' => $labels,
			'public' => true,
			'publicly_queryable' => true,
			'show_ui' => true, 
			'query_var' => true,
			'has_archive' => true,
			'capability_type' => 'post',
			'hierarchical' => true,
			'show_ui' => false,
			'show_in_nav_menus' => false,
			// 'show_in_menu' => 'bn_config',
			// 'menu_position' => 57,
			'menu_icon' => 'dashicons-clipboard',
			'rewrite' => array('slug' => __( $ptModules )),
			'supports' => array('title', 'excerpt', 'page-attributes') //,'editor'
		);

		register_post_type(__( $ptModules ), $args);
	}
}

TSU_Post_types::init();
