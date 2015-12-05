<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
   <head>
   <meta charset="<?php bloginfo( 'charset' ); ?>">
   <meta name="viewport" content="width=device-width">
   <!--[if lt IE 9]>
   <script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/html5.js"></script>
   <![endif]-->
   <?php wp_head(); ?>
   </head>

   <body <?php body_class(); ?>>
   <header id="masthead" class="site-header" role="banner">
   <a class="banner" href="<?php echo esc_url( home_url( '/' ) ); ?>"><img class="banner-img" src="<?php header_image(); ?>" alt="<?php bloginfo( 'name' ); ?>" /></a>
   <nav>
   <ul class="nav-menu">
   <?php wp_list_categories('order_by=ID&hide_empty=0&title_li=&exclude=1'); ?>
   </ul>
   </nav>
   </header><!-- .site-header -->
