<?php
/**
 * The default template for displaying content
 *
 * Used for both single and index/archive/search.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?>
<div class="content">
<header class="entry-header">
		<?php
    the_title( '<h1 class="entry-title">', '</h1>' );
the_date();
		?>

<hr />
	</header><!-- .entry-header -->
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<div class="entry-content">
		<?php
			the_content();
		?>
	</div><!-- .entry-content -->
</article><!-- #post-## -->
    <div class="sidebar">
    <div class="post-wrapper">
    <?php
    $category_name = get_the_category()[0]->name;
    echo "<div class=\"category-name\">".$category_name."</div>";
    $sidebar_query = new WP_Query(array(
        'category_name' => $category_name,
        'post_type' => 'post',
        'posts_per_page' => 20
    ));
$post_count = 0;
while ( $sidebar_query->have_posts() ) : $sidebar_query->the_post();
$permalink = get_the_permalink();
echo "<a href=".$permalink."><div class=\"side-bar-post side-bar-post-".($post_count % 2)."\"><div class=\"side-bar-title\">".get_the_title()."</div><div class=\"post-date\">".get_the_date()."</div></div></a>";
$post_count++;
endwhile;
wp_reset_postdata();
    ?>
</div><!-- .post-wrapper -->
<div class="tag-list">
    <?php
    $tags = get_the_tags();
if (count($tags) > 1) {    
echo "<div>標籤: </div>";
foreach ( $tags as $tag ) {
	$tag_link = get_tag_link( $tag->term_id );
    $tag_name = $tag->name;
    echo "<a href=\"".$tag_link."\"><div class=\"tag\">".$tag_name."</div></a>";
}
}
    ?>
</div>
</div><!-- .sidebar -->
        <div class="facebook">
    <div class="fb-like" daga-href="<?php echo get_the_permalink(); ?>" data-share="true"></div>
    <br />
    <div class="fb-comments" data-href="<?php echo get_the_permalink(); ?>" data-numposts="5"></div>
    </div>
</div>