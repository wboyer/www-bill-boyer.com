</div>
</div>
<?php
	include 'sidebar.php'
?>
</div>
</div>

<div id="push"></div>
</div>

<footer>
	<div id="footer">
		<?php
			$query = new WP_Query(array('p' => 163, 'post_type' => 'any'));

			if ($query->have_posts()) {
				while ($query->have_posts()) {
					$query->the_post();
		?>
					<p class="contact"><?php the_field('address_line_1'); ?></p>
					<p class="contact"><?php the_field('address_line_2'); ?></p>
					<p class="contact"><?php the_field('telephone'); ?>
						<a href="mailto:<?php the_field('email'); ?>"><?php the_field('email'); ?></a>
					</p>
		<?php
				}
			}
			wp_reset_postdata();
		?>
	</div>
</footer>

<script type="text/javascript">
	WebFontConfig = { fontdeck: { id: '40738' } };

	(function () {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
			'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	})();
</script>

<?php wp_footer(); ?>
</body>
</html>
