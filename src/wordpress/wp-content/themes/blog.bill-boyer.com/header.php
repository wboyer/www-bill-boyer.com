<!DOCTYPE html>
<html lang="en">

<head>
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

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width">

	<?php wp_head(); ?>
</head>

<body>
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
<li><a href="#" onclick="return false;">About Me</a></li>
<li><a href="/about-this-site">About This Site</a></li>
<li><a href="/demos">Demos</a></li>
</ul>
</div>

</nav>
</div>

<div class="row">
<div class="col-lg-9 col-lg-push-3 right-col">
