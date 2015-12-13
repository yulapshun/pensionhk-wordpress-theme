<?php
get_header();
get_template_part('slide');
?>
<div id="primary" class="content-area">
  <main id="main" class="site-main" role="main">
<?php
$the_query = new WP_Query(array(
    'post_type' => 'post',
    'posts_per_page' => 18,
    'paged' => ( get_query_var('paged') ) ? get_query_var('paged') : 1
));
?>
<div class="grid">
<?php
  $count = 0;									   // Start the loop.
  while ( $the_query->have_posts() ) : $the_query->the_post();

/*
 * Include the Post-Format-specific template for the content.
 * If you want to override this in a child theme, then include a file
 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
 */
include(locate_template('cell.php'));
    $count += 1;
//include(get_template_part( 'cell', get_post_format()));
// End the loop.
endwhile;
?>

</div>

<?php
$temp = $wp_query;

$wp_query = $the_query;
// Previous/next page navigation.
// $pages = paginate_links(array(
//     'mid_size'=>2,
//     'prev_text'=>__( '上一頁', 'dummy' ),
//     'next_text'=>__( '下一頁', 'dummy' )
// ));
// echo $pages;
the_posts_pagination(array(
    'mid_size'=>2,
    'prev_text'=>__( '上一頁', 'dummy' ),
    'next_text'=>__( '下一頁', 'dummy' )
));
$wp_query = $temp;
//include(locate_template('popup.php'));
get_template_part('popup');
?>

</main><!-- .site-main -->
</div><!-- .content-area -->
