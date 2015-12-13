<?php
/* add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' ); */

function load_dummy() {    
    wp_enqueue_style('dummy-style', get_stylesheet_uri());
    wp_enqueue_script('dummy-js', get_template_directory_uri() . '/js/dummy.js');
    $slide_data = array();
    $the_query = new WP_Query(array(
        'post_type' => 'post',
        'posts_per_page' => 6
    ));
    while ( $the_query->have_posts() ) : $the_query->the_post();
    $has_thumb = false;
    $thumb_url;
    if (has_post_thumbnail()){
        $has_thumb = true;
        $thumb_url = wp_get_attachment_url( get_post_thumbnail_id() );
    } else {
        $thumb_url = null;
    }
    $link = esc_url(get_permalink());
    $title = get_the_title();
    $excerpt = get_the_excerpt();
    array_push($slide_data, array(
        'hasThumb'=>$has_thumb,
        'thumbUrl'=>$thumb_url,
        'link'=>$link,
        'title'=>$title,
        'excerpt'=>$excerpt        
    ));
    endwhile;
    $popup_data = array(
        'enable'=>get_option('show_popup'),
        'imageUrl'=>esc_url(get_theme_mod('popup_image'))
    );
    wp_localize_script('dummy-js', 'slideData', $slide_data);
    wp_localize_script('dummy-js', 'popupData', $popup_data);
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
    $wp_customize->add_setting('right_header_image');
    $wp_customize->add_setting('right_header_image_link');
    $wp_customize->add_control(
        'right_header_image_link',
        array(
            'label'      => __( 'Set right header image link', 'dummy' ),
            'section'    => 'header_image_right',
            'settings'   => 'right_header_image_link'
        )
    );
    $wp_customize->add_control(
        new WP_Customize_Image_Control(
            $wp_customize,
            'right_header_image',
            array(
                'label'      => __( 'Upload right header image', 'dummy' ),
                'section'    => 'header_image_right',
                'settings'   => 'right_header_image'
            )
        )
    );
    
    $wp_customize->add_section('popup', array('title'=>__('Popup','dummy'), 'priority'=>1));
    $wp_customize->add_setting('popup_image');
    $wp_customize->add_setting('popup_link');
    $wp_customize->add_setting('show_popup', array(
        'type' => 'option',
        'default'    => '1'
    ));
    $wp_customize->add_control(
        new WP_Customize_Control(
            $wp_customize,
            'show_popup',
            array(
                'label'     => __('Show popup', 'dummy'),
                'section'   => 'popup',
                'settings'  => 'show_popup',
                'type'      => 'checkbox',
            )
        )
    );
    $wp_customize->add_control(
        'popup_link',
        array(
            'label'      => __( 'Set popup link', 'dummy' ),
            'section'    => 'popup',
            'settings'   => 'popup_link'
        )
    );
    $wp_customize->add_control(
        new WP_Customize_Image_Control(
            $wp_customize,
            'popup_image',
            array(
                'label'      => __( 'Upload popup image', 'dummy' ),
                'section'    => 'popup',
                'settings'   => 'popup_image'
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