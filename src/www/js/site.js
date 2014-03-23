var Site = Site || {};

Site.Menu = {
	createThemeMenu: function() {
		var nav = document.getElementById("nav-ul");

		var li = document.createElement("li");
		li.className += "dropdown";
		nav.appendChild(li);

		var a = document.createElement("a");
		a.setAttribute("data-toggle", "dropdown");
		a.setAttribute("href", "#");
		a.className += "dropdown-toggle";
		li.appendChild(a);

		var text = document.createTextNode("Themes ");
		a.appendChild(text);

		var span = document.createElement("span");
		span.className += "caret";
		a.appendChild(span);

		var ul = document.createElement("ul");
		ul.setAttribute("id", "themes-menu");
		ul.setAttribute("ng-app", "themesApp");
		ul.className += "dropdown-menu";
		li.appendChild(ul);

		li = document.createElement("li");
		li.setAttribute("data-theme", "{{theme}}");
		li.setAttribute("ng-repeat", "theme in ['default', 'amelia', 'cerulean', 'cosmo', 'cyborg', 'darkly', 'flatly', 'journal', 'lumen', 'readable', 'simplex', 'slate', 'spacelab', 'superhero', 'united', 'yeti']");
		li.className += "dropdown";
		ul.appendChild(li);

		a = document.createElement("a");
		a.setAttribute("onclick", "Site.Util.setTheme(this.parentNode); return false;");
		a.setAttribute("href", "#");
		li.appendChild(a);

		text = document.createTextNode("theme {{$index + 1}}");
		a.appendChild(text);
	},

	highlightThemeMenu: function() {
		var ul = document.getElementById("themes-menu");
		var items = ul.getElementsByTagName("li");

		for (var i = 0; i < items.length; i++) {
			var item = items[i];
			if (this.currentTheme == item.getAttribute("data-theme"))
				item.className += " active";
		}
	}
};

var themesApp = angular.module('themesApp', []);
