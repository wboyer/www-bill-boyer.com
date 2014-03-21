var Site = Site || {};

Site.Util = {
	getHashParam: function(name) {
		var hash = window.location.hash;
		var match = name + "=";
		var index = hash.indexOf(match);
		if (index >= 0) {
			hash = hash.substring(index + match.length);
			index = hash.indexOf(";");
			if (index >= 0)
				hash = hash.substring(0, index);
			return hash;
		}
	},

	removeHashParam: function(name) {
		var value = this.getHashParam(name);
		if (value) {
			var hash = window.location.hash.replace(name + "=" + value, "");
			if (hash.indexOf("&") === 0)
				hash = hash.substring(1);
			else
				if (hash.indexOf("&") === (hash.length - 1))
					hash = hash.substring(0, hash.length - 1);
			if (hash == "#")
				history.pushState('', document.title, window.location.pathname);
			else
				window.location.hash = hash;
		}
	},

	setHashParam: function(name, value) {
		this.removeHashParam(name);
		window.location.hash += name + "=" + value;
	},

	getCookie: function(name) {
		var cookie = document.cookie;
		var match = name + "=";
		var index = cookie.indexOf(match);
		if (index >= 0) {
			cookie = cookie.substring(index + match.length);
			index = cookie.indexOf(";");
			return cookie.substring(0, index);
		}
	},

	setCookie: function(name, value) {
		document.cookie = name + "=" + value;
	},

	setTheme: function(item) {
		var name;
		if (item) {
			name = item.getAttribute("data-theme");
			this.setCookie("theme", name);
			this.setHashParam("theme", name);
			window.location.reload();
			return;
		}
		else {
			name = this.getCookie("theme");
			if (name)
				this.removeHashParam("theme");
			else {
				name = this.getHashParam("theme");
				if (name)
					this.removeHashParam("theme");
				else
					name = "default";
			}
		}

		this.currentTheme = name;
		var href = "/css/themes/" + this.currentTheme + "/bootstrap.css";

		var link = document.getElementById("theme");
		if (link)
			document.removeElement(link);

		link = document.createElement("link");
		link.setAttribute("type", "text/css");
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("href", href);
		document.getElementsByTagName("head")[0].appendChild(link);
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

Site.Util.setTheme();

