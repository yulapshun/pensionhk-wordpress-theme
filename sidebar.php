<div class="sidebar">

   <?php
          query_posts( 'posts_per_page=5' );
while ( have_posts() ) : the_post();
    echo '<li>';
    the_title();
    echo '</li>';
endwhile;
?>

   </div><!-- .sidebar -->