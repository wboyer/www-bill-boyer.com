<?php get_header(); ?>

<div class="content col-xs-12 col-sm-5 col-sm-push-7 col-lg-5 col-lg-push-7">
	<h1 id="home-h1">Leslie Gill Architect</h1>
</div>

<div class="content col-xs-12 col-sm-7 col-sm-pull-5 col-lg-7 col-lg-pull-5">
	<div class="column-container">
		<?php
			if (get_field('images')) {
				while (has_sub_field('images'))
					$images[] = get_sub_field('image');

				$i = rand(0, count($images) - 1);
				echo '<img class="full" src="' . $images[$i]['url'] . '">';
			}
		?>
	</div>
</div>

<?php get_footer(); ?>
