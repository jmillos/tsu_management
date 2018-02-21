<?php
/*
* Plugin Name: Gestión TSU
* Plugin URI: http://www.xxx.com/
* Description: Plugin personalizado para la Gestión TSU.
* Version: 1.0.0
* Author: TSU
* Author URI: http://xxx.com/
* Developer: jgarcia
* Developer URI: https://www.facebook.com/jmillos13
*
* Text Domain: tsu-management
* Domain Path: /languages/
*
* Requires at least: 3.8
* Tested up to: 4.8
*
* Copyright: © 2016 TSU.
* License: GNU General Public License v3.0
* License URI: http://www.gnu.org/licenses/gpl-3.0.html
*/

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require(dirname( __FILE__ ) . DIRECTORY_SEPARATOR . 'loader.php');

final class TSU_Management {
	/**
	 * The single instance of the class.
	 *
	 * @var TSU_Management
	 * @since 0.0.1
	 */
	protected static $_instance = null;

	public static $version = "0.0.0";

	public function __construct(){
		$this->includes();

		if ( is_multisite() ) {
			add_action( 'network_admin_menu', array( $this, 'admin_menu' ) );
		} else {
			add_action( 'admin_menu', array( $this, 'admin_menu' ) );
		}

		add_action( 'admin_enqueue_scripts', array( $this, 'admin_script' ) );
		// add_action( 'wp_enqueue_scripts', array($this, 'front_script') );
	}

	/**
	 * Register plugin menus
	 *
	 * @return void
	 */
	public function admin_menu() {
		// top level WP Migration menu
		add_menu_page(
			'TSU Configuración',
			'Gestión TSU',
			'read',
			'tsu-config',
			'TSU_Modules_Controller::render',
			'',
			'57'
		);

		// sublevel Export menu
		/*add_submenu_page(
			'tsu-config',
			__( 'TSU Módulos' ),
			__( 'Módulos' ),
			'read',
			'tsu-modules',
			'TSU_Modules_Controller::index'
		);*/

		// sublevel Import menu
		/*add_submenu_page(
			'site-migration-export',
			__( 'Import', AI1WM_PLUGIN_NAME ),
			__( 'Import', AI1WM_PLUGIN_NAME ),
			'import',
			'site-migration-import',
			'Ai1wm_Import_Controller::index'
		);

		// sublevel Backups menu
		add_submenu_page(
			'site-migration-export',
			__( 'Backups', AI1WM_PLUGIN_NAME ),
			__( 'Backups', AI1WM_PLUGIN_NAME ),
			'import',
			'site-migration-backups',
			'Ai1wm_Backups_Controller::index'
			);*/
	}

	public function admin_script(){
		wp_register_script( 'tsu_management_bundle', plugins_url('/view/assets/js/bundle.js', __FILE__), array('wp-api'), self::$version, true );
		wp_enqueue_script( 'tsu_management_bundle' );

		wp_localize_script(
			'tsu_management_bundle',
			'wpUserSettings',
			array(
				'current_user' => get_current_user_id()
			)
		);
	}

	/**
	 * Include required core files used in admin and on the frontend.
	 */
	public function includes() {
		// include_once( 'includes/class-tsu-post-types.php' ); // Registers post types
	}

	/**
	 * Main TSU_Management Instance.
	 *
	 * Ensures only one instance of TSU_Management is loaded or can be loaded.
	 *
	 * @since 0.0.1
	 * @static
	 * @see TSUM()
	 * @return TSU_Management - Main instance.
	 */
	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}
		return self::$_instance;
	}
}
/**
 * Main instance of WooCommerce.
 *
 * Returns the main instance of WC to prevent the need to use globals.
 *
 * @since  2.1
 * @return WooCommerce
 */
function TSUM() {
	return TSU_Management::instance();
}

// Global for backwards compatibility.
$GLOBALS['tsum'] = TSUM();
