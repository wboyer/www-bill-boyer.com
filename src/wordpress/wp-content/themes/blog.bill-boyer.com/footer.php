</div>

<div class="col-lg-3 col-lg-pull-9 left-col">
      
<div class="panel panel-default">
<div class="panel-heading">Share</div>
<div class="panel-body">

<div class="tweet-button">
<a href="https://twitter.com/share" class="twitter-share-button" data-via="wboyernick"></a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
</div>

<div
  class="fb-like"
  data-share="true"
  data-width="240"
  data-layout="button"
  data-show-faces="true">
</div>

</div>
</div>

<div class="panel panel-default">
<div class="panel-heading">Credits</div>
<div class="panel-body">
<footer>
<p>Built with <a href="http://getbootstrap.com/">Bootstrap</a>. CSS themes from <a href="http://bootswatch.com/">Bootswatch</a>, by <a href="http://thomaspark.me">Thomas Park</a>.</p>
</footer>
</div>
</div>

</div>
</div>

</div>

include('./footer-assets.php');

<script src="/js/site.min.js"></script>

<script>
Site.Menu.createThemesMenu();
</script>

<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-45564746-1', 'bill-boyer.com');
ga('send', 'pageview');
  
$(function (){
$("#page-info").popover({placement: "top"});
});
</script>
<?php wp_footer(); ?>
</body>
</html>
