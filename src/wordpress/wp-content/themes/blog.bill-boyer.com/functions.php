<?php

function enqueue_scripts()
{
	if (!is_admin()) {
	}
}
add_action('init', 'enqueue_scripts');

function enqueue_css()
{
	if (!is_admin()) {
		wp_enqueue_style('local', get_bloginfo('stylesheet_url'), null, null, null);
	}
}
add_action('init', 'enqueue_css');

function excerpt_read_more_link($output)
{
	global $post;
	return $output . '<a href="'. get_permalink($post->ID) . '">Read more...</a>';
}
add_filter('the_excerpt', 'excerpt_read_more_link');

?>
