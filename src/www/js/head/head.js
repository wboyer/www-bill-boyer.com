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
			else if (hash.indexOf("&") === (hash.length - 1))
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
			if (index == -1)
				index = cookie.length;
			return cookie.substring(0, index);
		}
	},

	setCookie: function(name, value) {
		document.cookie = name + "=" + value + ";path=/";
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
				if (name) {
					this.removeHashParam("theme");
					this.setCookie("theme", name);
				}
				else
					name = "cerulean";
			}
		}

		window.currentTheme = name;
		var href = "/css/themes/" + name + "/bootstrap.css";

		var link = document.getElementById("theme");
		if (link) {
			if (link.getAttribute("href") != href)
				link.setAttribute("href", href);
		}
		else {
			link = document.createElement("link");
			link.setAttribute("type", "text/css");
			link.setAttribute("rel", "stylesheet");
			link.setAttribute("href", href);
			document.getElementsByTagName("head")[0].appendChild(link);
		}
	}
};

Site.Util.setTheme();
