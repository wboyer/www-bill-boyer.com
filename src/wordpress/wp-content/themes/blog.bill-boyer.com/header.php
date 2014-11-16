<!DOCTYPE html>
<html lang="en">

<head prefix="og: http://ogp.me/ns#">

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width">

	<title><?php
			global $page_title;
			if (!empty($page_title))
				echo $page_title . ' | ';
			echo 'Page Title';
	?></title>

	<meta name="description"
		  content="<?php
			global $page_description;
			if (empty($page_description))
				echo 'Page Description';
			else {
				echo $page_description;
				echo 'Page Description';
			}
	?>">

	<?php wp_head(); ?>

    <link id="theme" type="text/css" rel="stylesheet" href="/css/themes/cerulean/bootstrap.css" />

    <script src="/js/head.min.js"></script>
    <link href="/css/site.css" media="screen" rel="stylesheet" />
    <link href="/assets/application.css?body=1" media="screen" rel="stylesheet" />
    <link href="/assets/demos.css?body=1" media="screen" rel="stylesheet" />
    <link href="/assets/deployment_pipeline.css?body=1" media="screen" rel="stylesheet" />
    <link href="/assets/welcome.css?body=1" media="screen" rel="stylesheet" />
</head>

<body>
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '784334068290045',
      xfbml      : true,
      version    : 'v2.1'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
<div class="container">

<div class="row">
<nav class="navbar navbar-default" role="navigation">

<div class="navbar-header">
<a href="/"><p class="navbar-brand">bill-boyer.com</p></a>
<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
<span class="sr-only">Toggle navigation</span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>
</div>

<div class="collapse navbar-collapse" id="navbar-collapse">
<ul id="nav-ul" class="nav navbar-nav navbar-right">
<li><a href="/about-me">About Me</a></li>
<li><a href="/about-this-site">About This Site</a></li>
<li><a href="/blog/">Blog</a></li>
<li><a href="/demos">Demos</a></li>
</ul>
</div>

</nav>
</div>

<div class="row">
<div class="col-lg-9 col-lg-push-3 right-col">
