var Site = Site || {};

Site.Menu = {
	createThemesMenu: function() {
		var nav = document.getElementById("nav-ul");

		var li = document.createElement("li");
		li.className += " dropdown";
		li.setAttribute("data-no-turbolink", "true");
		nav.appendChild(li);

		var a = document.createElement("a");
		a.setAttribute("data-toggle", "dropdown");
		a.setAttribute("href", "#");
		a.className += " dropdown-toggle";
		li.appendChild(a);

		var text = document.createTextNode("Themes ");
		a.appendChild(text);

		var span = document.createElement("span");
		span.className += " caret";
		a.appendChild(span);

		var ul = document.createElement("ul");
		ul.setAttribute("id", "themes-menu");
		ul.setAttribute("ng-app", "themesApp");
		ul.className += " dropdown-menu";
		li.appendChild(ul);

		li = document.createElement("li");
		li.setAttribute("data-theme", "{{theme}}");
		li.setAttribute("ng-repeat", "theme in ['cerulean', 'default', 'amelia', 'cosmo', 'cyborg', 'darkly', 'flatly', 'journal', 'lumen', 'readable', 'simplex', 'slate', 'spacelab', 'superhero', 'united', 'yeti']");
		li.className += " themes-menu-item dropdown";
		ul.appendChild(li);

		a = document.createElement("a");
		a.setAttribute("onclick", "Site.Util.setTheme(this.parentNode); return false;");
		a.setAttribute("href", "#");
		li.appendChild(a);

		text = document.createTextNode("theme {{$index + 1}}");
		a.appendChild(text);
	},
};

var themesApp = angular.module('themesApp', []);

themesApp.directive("li", function () {
	return {
		restrict: 'E',
		link: function (scope, element) {
			var item = element[0];
			if (window.currentTheme == scope.theme)
				item.className += " active";
		}
	};
});

jQuery.ajaxSetup({ cache: true });
