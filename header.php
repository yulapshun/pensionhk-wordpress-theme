<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
   <head>
   <title>惱人媒體</title>
      <link rel="shortcut icon" href="<?php bloginfo('siteurl'); ?>/favicon.ico" type="image/x-icon" />
   <meta charset="<?php bloginfo( 'charset' ); ?>">
   <meta name="viewport" content="width=device-width">
      <meta http-equiv="cache-control" content="max-age=0" />
      <meta http-equiv="cache-control" content="no-cache" />
      <meta http-equiv="expires" content="0" />
      <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
      <meta http-equiv="pragma" content="no-cache" />
   <!--[if lt IE 9]>
   <script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/html5.js"></script>
   <![endif]-->
   <?php wp_head(); ?>
   </head>

   <body <?php body_class(); ?>>
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/zh_HK/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
   <header id="masthead" class="site-header" role="banner">
         <nav>
   <ul class="nav-menu">
   <?php wp_list_categories('order_by=ID&hide_empty=0&title_li=&exclude=1'); ?>
      <li class="search"><?php get_search_form(); ?></li>
      <li class="about"><a href="about">關於惱人媒體</a></li>
   </ul>
   </nav>
   <div class="banner">
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
      <img class="banner-img" src="<?php header_image(); ?>" alt="<?php bloginfo( 'name' ); ?>" />
      </a>
      <a href="<?php echo esc_url(get_theme_mod('right_header_image_link')); ?>">
      <img class="banner-img-right" src="<?php echo esc_url(get_theme_mod('right_header_image')); ?>" alt="right header image" />
      </a>
      </div>
   </header><!-- .site-header -->
      