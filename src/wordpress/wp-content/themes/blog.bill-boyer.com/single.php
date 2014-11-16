<?php get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

  <div class="post">

    <h1><a href="<?php the_permalink(); ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h1>

    <small><?php the_time('F jS, Y'); ?> by <?php the_author_posts_link(); ?></small>

    <div class="entry">
      <?php the_content(); ?>
    </div>

    <p class="postmetadata"><?php _e( 'Posted in' ); ?> <?php the_category( ', ' ); ?></p>

  </div>

<?php endwhile; else : ?>

  no posts

<?php endif; ?>

<?php get_footer(); ?>
