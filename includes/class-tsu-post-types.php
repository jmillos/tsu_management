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
		self::register_post_type('tsu_crm_modules', 'Modulo', 'Modulos');

		self::register_post_type('tsu_crm_pty_groups', 'Grupo de propiedades', 'Grupos de propiedades');

		self::register_post_type('tsu_crm_properties', 'Propiedades', 'Propiedades');
	}

	private static function register_post_type($keyPt, $labelSingular, $labelPlural){
		$labels = array(
			'name' => __( $labelPlural ),
			'singular_name' => __( $labelSingular ),
			'add_new' => __('Añadir nuevo'),
			'add_new_item' => __('Añadir nuevo ' . $labelSingular),
			'edit_item' => __('Editar ' . $labelSingular),
			'new_item' => __('Nuevo ' . $labelSingular),
			'view_item' => __('Ver ' . $labelSingular),
			'search_items' => __('Buscar'),
			'not_found' =>  __('No se encontraron ' . $labelPlural),
			'not_found_in_trash' => __('No se encontraron '. $labelPlural .' en la Papelera'), 
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
			'show_in_menu' => 'tsu-config',
			// 'menu_position' => 57,
			'menu_icon' => 'dashicons-clipboard',
			'rewrite' => array('slug' => __( $keyPt )),
			'supports' => array('title', 'excerpt', 'page-attributes') //,'editor'
		);

		register_post_type(__( $keyPt ), $args);
	}
}

TSU_Post_types::init();
