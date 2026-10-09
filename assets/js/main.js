/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function() {

	var body = document.body,
		header = document.getElementById('header'),
		footer = document.getElementById('footer'),
		main = document.getElementById('main'),
		medium = window.matchMedia('(max-width: 980px)'),
		mobile = /Android|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry/i.test(navigator.userAgent)
			|| (navigator.platform == 'MacIntel' && navigator.maxTouchPoints > 1),
		settings = {

			// Parallax background effect? (off: the header gradient animates its own position)
				parallax: false,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Play initial animations on page load.
		window.addEventListener('load', function() {
			window.setTimeout(function() {
				body.classList.remove('is-preload');
			}, 100);
		});

	// Touch?
		if (mobile) {

			// Turn on touch mode.
				body.classList.add('is-touch');

		}

	// Parallax background.

		// Disable parallax on mobile platforms (= better performance).
			if (mobile)
				settings.parallax = false;

		function parallax() {
			header.style.backgroundPosition = 'left ' + (-1 * (parseInt(window.scrollY) / settings.parallaxFactor)) + 'px';
		}

	// Layout.
		function layout() {

			if (medium.matches) {

				// Footer.
					main.after(footer);

				// Header.
					if (settings.parallax) {
						window.removeEventListener('scroll', parallax);
						header.style.backgroundPosition = '';
					}

			}
			else {

				// Footer.
					header.append(footer);

				// Header.
					if (settings.parallax) {
						window.addEventListener('scroll', parallax);
						parallax();
					}

			}

		}

		if (header && footer && main) {

			layout();

			if (medium.addEventListener)
				medium.addEventListener('change', layout);
			else
				medium.addListener(layout);

		}

})();
