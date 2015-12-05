<?php
/* add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' ); */

function load_dummy() {
  wp_enqueue_style('dummy-style', get_stylesheet_uri());
}

function register_top_nav_menu() {
  register_nav_menus(array(
    'header-menu' => __( 'Header Menu' ),
    'extra-menu' => __( 'Extra Menu' )
  ));
}

$defaults = array(
	'default-image'          => '',
	'width'                  => 0,
	'height'                 => 0,
	'flex-height'            => false,
	'flex-width'             => false,
	'uploads'                => true,
	'random-default'         => false,
	'header-text'            => true,
	'default-text-color'     => '',
	'wp-head-callback'       => '',
	'admin-head-callback'    => '',
	'admin-preview-callback' => '',
);
add_action('wp_enqueue_scripts', 'load_dummy');
add_action('init', 'register_top_nav_menu');
add_theme_support('custom-header');
add_theme_support('post-thumbnails'); 
?>