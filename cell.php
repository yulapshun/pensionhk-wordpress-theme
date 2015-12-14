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


 <?php
 // Post thumbnail.
    //        get_the_post_thumbnail(array(300, 300), 'class=thumbnail');
$has_thumb = false;
$thumb_url;
if (has_post_thumbnail()){
    $has_thumb = true;
    $thumb_url = wp_get_attachment_url( get_post_thumbnail_id() );
} else {
    $thumb_url = null;
}
?>
<div class='cell col-<?php echo $count % 3; ?>'>
<?php echo "<a href=".esc_url(get_permalink()).">"?>
<div class='cell-background' style="<?php echo "background-image: url('".$thumb_url."')" ?>">
<div class='text'>
<div class="title">
   <?php echo "<div>".get_the_title()."</div><div class=\"date\">".get_the_date()."</div>" ?>                                    
</div>
<hr />
<div class="content">                                                                                         
   <?php echo get_the_excerpt() ?>
</div>                                                                                        
</div>
</div>
</a>
</div><!-- .cell -->