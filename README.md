# Smooth Scroll JS
Pure Javascript smooth scroll animation
* No jQuery or any other framework
* Easy to use
* Speed configuration

# Demo
[Try DEMO](http://anton.temchenko.com.ua/dev/smooth-scroll-js/)

# How to Use
Insert script before ```</body>``` :
```
	...
	<script src="js/smooth-scroll.js"></script>
	</body>
```

Use "goTo(id)" function on click. :

# Usage example

```
<header id="top">...</header>
<nav>
	<ul>
		<li><a onclick="goTo('top')">Top</a></li>
		<li><a onclick="goTo('article')">Article</a></li>
		<li><a onclick="goTo('bottom')">Bottom</a></li>
	</ul>
</nav>
<article id="article">....</article>
<footer id="bottom">...</footer>
```
