<?php get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

  <div class="post">

    <h1>blog posts</h1>

    <h2><a href="<?php the_permalink(); ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>

    <small><?php the_time('F jS, Y'); ?></small>

    <div class="entry">
      <?php the_content(); ?>
    </div>

  </div>

<?php endwhile; else : ?>

  no posts

<?php endif; ?>

<?php get_footer(); ?>
