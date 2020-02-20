<?php
/**
 * Plugin Name: RT Button Group
 * Author: RadiusTheme
 * Version: 1.0.0
 *
 * Text Domain: rt-button-group
 * Domain Path: /languages
 * Author URI: https://radiustheme.com/
 */
$plugin_data = get_file_data( __FILE__, array(
	'name'    => 'Plugin Name',
	'version' => 'Version',
	'author'  => 'Author'
), false );
define( 'RT_BUTTON_GROUP_VERSION', $plugin_data['version'] );
define( 'RT_BUTTON_GROUP_PLUGIN_PATH', dirname( __FILE__ ) );
define( 'RT_BUTTON_GROUP_PLUGIN_URL', plugins_url( '', __FILE__ ) );

Class RT_Button_Group {

	function __construct() {
		add_action( 'init', [ $this, 'block_assets' ] );
	}

	function block_assets() {
		// Register block editor script for backend.
		wp_register_script(
			'rt-button-group-block-js',
			RT_BUTTON_GROUP_PLUGIN_URL .'/dist/blocks.build.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
			null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
			true // Enqueue the script in the footer.
		);
		if ( function_exists( 'register_block_type' ) ) {
			register_block_type(
				'rt/button-group', array(
					'editor_script' => 'rt-button-group-block-js',
				)
			);
		}
	}
}

new RT_Button_Group();
