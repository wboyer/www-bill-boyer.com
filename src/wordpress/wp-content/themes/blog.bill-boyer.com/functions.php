<?php

function enqueue_scripts()
{
	if (!is_admin()) {
		wp_enqueue_script('main', '/js/head.min.js', null, null, true);
	}
}

add_action('init', 'enqueue_scripts');

function enqueue_css()
{
	if (!is_admin()) {
		wp_enqueue_style('local', '/css/site.css', null, null, null);
		wp_enqueue_style('local', get_bloginfo('stylesheet_url'), null, null, null);
	}
}

add_action('init', 'enqueue_css');
?>
