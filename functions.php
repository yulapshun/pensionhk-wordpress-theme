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

function mytheme_customize_register($wp_customize)
{
    $wp_customize->add_section('header_image_right', array('title'=>__('Right Header Image','dummy'), 'priority'=>1));
    $wp_customize->add_setting( 'header_image_right' , array(

    ) );
    $wp_customize->add_control(
       new WP_Customize_Image_Control(
           $wp_customize,
           'right_header_image',
           array(
               'label'      => __( 'Upload right header image', 'dummy' ),
               'section'    => 'header_image_right',
               'settings'   => 'header_image_right'
           )
       )
   );
}

add_action('wp_enqueue_scripts', 'load_dummy');
add_action('init', 'register_top_nav_menu');
add_action( 'customize_register', 'mytheme_customize_register' );
add_theme_support('custom-header');
add_theme_support('post-thumbnails'); 
?>