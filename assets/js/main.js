// banner typing
// handle the typing text and showing the down caret
$("#banner-div").ready(function() {
	var banner_typing_options = {
	  strings: ["Hi, I'm Cesar!"],
	  typeSpeed: 40,
	  showCursor: true,
	  startDelay: 500,
	  onComplete: (self) => {
	  	$(".typed-cursor").css("color", "black");
	  	var banner_typing_options = {
			  strings: ["^300I love software, space, and design."],
			  typeSpeed: 40,
			  showCursor: true,
			  onComplete: (self) => {
			  	$("#down-caret").delay(200).fadeIn(500);
			  }
			};
			var typed2 = new Typed('#typing2', banner_typing_options);
		  }
		};
	var typed = new Typed('#typing', banner_typing_options);
});

(function($) {
	// Custom JS

	// enable tooltips
	// $(function () {
	// 	$('[data-toggle="tooltip"]').tooltip()
	// })
	

	if (window.location.pathname == '/') {
		// handle clicking on down caret to scroll down
		var $caret = $("#down-caret .fa-chevron-down");
		var $scrollTo = $("#main");
		$caret.click(function() {
		$('html, body').animate({
		scrollTop: $scrollTo.offset().top
		}, 650, "swing");
		});

		// Technical skills chart
		var ctx = document.getElementById('skills-chart').getContext('2d');
		var chart = new Chart(ctx, {
			// The type of chart we want to create
			type: 'bar',

			// The data for our dataset
			data: {
				labels: ['C/C++', 'Python',
					['Algorithms &', 'Data structures'],
					'Git', 'Databases/SQL',
					['Web development', '(Full stack)'],
					'API development',
					'Docker/Kubernetes'],
				datasets: [{
					backgroundColor: 'rgb(0, 152, 204)',
					data: [3, 3, 3, 3, 3, 3, 3, 2]
				}],
			},
			
			// Configuration options go here
			options: {
				legend: {
					display: false
				},
				scales: {
					yAxes: [{
						ticks: {
							min: 0,
							max: 3,
							autoSkip: false,
							fontSize: 14,
							callback: function (label, index, labels) {
								switch (label) {
									case 0:
										return '';
									case 1:
										return 'Beginner';
									case 2:
										return 'Intermediate';
									case 3:
										return 'Advanced';
								}
							}
						},
						gridLines: {
							display: false,
							color: 'gray',
						},
					}],
					xAxes: [{
						ticks: {
							autoSkip: false,
							fontSize: 14,
						},
						gridLines: {
							display: false,
							color: 'gray',
						},
					}]
				},
				tooltips: {
					displayColors: false,
					callbacks: {
						label: function (tooltipItem, data) {
							switch (tooltipItem.index) {
								case 0:
									return "3 years";
								case 1:
									return "5 years";
							}
						}
					}
				}
			}
		});
	}

	// handle toggling light/dark mode
	var $light_btn = $("#toggle-light-btn");
	var $dark_btn = $("#toggle-dark-btn");
	var $about = $("#about-me");
	var $resume = $("#resume");
	var $projects = $("#projects");
	var $exps = $("#experiences");

	if (document.cookie.indexOf('lightdark') > -1) {
		var lightdark_val = document.cookie
			.split('; ')
			.find(row => row.startsWith("lightdark"))
			.split('=')[1];
	
		if (lightdark_val == "light") {
			switch_light();
		}
		else {
			switch_dark();
		}
	}
	else {
		// default
		switch_dark();
	}

	$light_btn.click(function() {
		switch_light();
	});

	$dark_btn.click(function() {
		switch_dark();
	});

	function switch_light() {
		document.cookie = "lightdark=light;max-age=2592000";

		if (window.location.pathname == '/') {
			$light_btn.css("color", "orange");
			$dark_btn.css("color", "gray");
	
			$about.css("background-color", "#0098CC");
			$resume.css("background-color", "#f8f8f8");
			$resume.css("color", "black");
			$("#resume .button-no-click").addClass("black");
			$("#resume b").css("color", "black");
			$("#resume #course-link").css("color", "black");
			$projects.css("background-color", "white");
			$("#projects .button-no-click").addClass("black");
			$exps.css("background-color", "#f8f8f8");
			$("#experiences .button-no-click").addClass("black");
			$("hr").css("border-top", "1px solid #ccc");
			chart.options.scales.yAxes[0].ticks.minor.fontColor = "black";
			chart.options.scales.xAxes[0].ticks.minor.fontColor = "black";
			chart.update();
		}
		else {
			$("body").css("background-color", "white");
			$(".project-page").css("background-color", "white");
			$("#projects").css("background-color", "white");
			$("#project-back a").css("color", "black");
			$(".project-desc").css("color", "black");
			$("hr").css("border-top", "1px solid #ccc");
		}
	}
	function switch_dark() {
		document.cookie = "lightdark=dark;max-age=2592000";

		if (window.location.pathname == '/') {
			$dark_btn.css("color", "#0098CC");
			$light_btn.css("color", "gray");
			
			$about.css("background-color", "#1F2833");
			$resume.css("background-color", "#292929");
			$resume.css("color", "white");
			$("#resume .button-no-click").removeClass("black");
			$("#resume b").css("color", "white");
			$("#resume #course-link").css("color", "white");
			$projects.css("background-color", "#2E2E2E");
			$("#projects .button-no-click").removeClass("black");
			$exps.css("background-color", "#292929");
			$("#experiences .button-no-click").removeClass("black");
			$("hr").css("border-top", "1px solid gray");
			chart.options.scales.yAxes[0].ticks.minor.fontColor = "white";
			chart.options.scales.xAxes[0].ticks.minor.fontColor = "white";
			chart.update();
		}
		else {
			$("body").css("background-color", "#292929");
			$(".project-page").css("background-color", "#292929");
			$("#projects").css("background-color", "#292929");
			$("#project-back a").css("color", "white");
			$(".project-desc").css("color", "white");
			$("hr").css("border-top", "1px solid gray");
		}
	}

	// handle project title showing on image hover
	var $proj_pic = $(".project-pic");
	$proj_pic.hover(
		function() {
			$(this).find(".project-title").stop().fadeIn(150);
		},
		function() {
			$(this).find(".project-title").stop().fadeOut(150);
		}
	);

	// handling displaying project description on click
	// var showing_images = true;
	// var $active_desc;
	// var $desc_row = $("#projects .description-row");
	// var $image_row = $("#projects .image-row");
	// $proj_pic.click(function() {
	// 	if (showing_images) {
	// 		showing_images = false;
	// 		var project_id = $(this).attr("project");
	// 		$image_row.stop().fadeOut(0);
	// 		$desc_row.stop().fadeIn(0);
	// 		$active_desc = $desc_row.children(".project-desc[project='" + project_id + "']");
	// 		$active_desc.stop().fadeIn(150);
	// 	}
	// });
	// $("#projects #project-back").click(function() {
	// 	if (!showing_images) {
	// 		$active_desc.stop().fadeOut(150);
	// 		$active_desc = null;
	// 		$desc_row.stop().fadeOut(0);
	// 		$image_row.stop().fadeIn(0);
	// 		showing_images = true;
	// 	}
	// });

	// squotes page
if (window.location.pathname == '/squotes') {
  	var list = [
  		["The best place for optimized display is a dim, windowless room.  Luckily, Michigan had plenty to spare for our team.", "Alex"],
  		["The ergonomics data requires human subjects which cannot currently gather.", "Alex"],
  		["Despite being a relatively low risk project, there were major hiccups and changes not to mention a global pandemic", "Alex"],
  		["This was part of what made BLiSS unique and losing access was a blow to our identity.", "Alex"],
  		["The team strives for the system to not feel like a bug outside a windshield that can’t be swatted away.", "The team"],
  		["For example, a flat heart rate and low body temperature of a radio-silent astronaut could be a red flag for those monitoring them.", "The team"],
  		["Regardless of the specific emergency, this placeholder will allow for a general procedure to be established for an astronaut in peril.", "The team"],
  		["my jokes are supposed to make you smuggle", "shil"],
  		["What's that status on my H2O?", "Sahil"],
  		["My morning routine now is, I wake up, I eat some chocolate chips...", "Amit"],
  		["The user is always wrong.", "Cesar"],
  		["I just voted what was already there. I don't think for myself.", "Drew"],
  		["yeah he’s a real person. I met him online", "Riley"],
  		["Hey, Corona!", "Emily trying to talk to Cortana"],
  		["What have you been weightlifting? My emotions.", "Cesar"],
  	];
  	var used = [];

  	var $quote_container = $("#quote-container");
  	var $quote = $("#quote-text");
  	var $author = $("#author");
  	var $timer = $("#quote-time");

  	var random_i = Math.floor(Math.random() * list.length);
  	$quote.text(list[random_i][0]);
		$author.text(list[random_i][1]);
		list.splice(random_i, 1);
		used.push(list[random_i]);

		var time = 10;
		var paused = false;
		setInterval(function() {
			if (time == 1) {
				paused = true;
				$timer.fadeOut(2000);
				time = 6;
				$timer.fadeIn(2000, function() {
					paused = false;
				});
			}
			else if (!paused) {
				time -= 1;
			}
			$timer.text(time);
		},
		1000);

  	setInterval(function() {
  		if (!list.length) {
  			list = used;
  			used = [];
  		}
  		random_i = Math.floor(Math.random() * list.length);
  		$quote_container.fadeOut(2000, function() {
	  		$quote.text(list[random_i][0]);
	  		$author.text(list[random_i][1]);
	  		list.splice(random_i, 1);
				used.push(list[random_i]);
  		});
  		$quote_container.fadeIn(2000);
  	},
  	10000);
	}
	


	// Original JS

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 360px)'
	});

	/**
	 * Applies parallax scrolling to an element's background image.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._parallax = (skel.vars.browser == 'ie' || skel.vars.browser == 'edge' || skel.vars.mobile) ? function() { return $(this) } : function(intensity) {

		var	$window = $(window),
			$this = $(this);

		if (this.length == 0 || intensity === 0)
			return $this;

		if (this.length > 1) {

			for (var i=0; i < this.length; i++)
				$(this[i])._parallax(intensity);

			return $this;

		}

		if (!intensity)
			intensity = 0.25;

		$this.each(function() {

			var $t = $(this),
				on, off;

			on = function() {

				$t.css('background-position', 'center 100%, center 100%, center 0px');

				$window
					.on('scroll._parallax', function() {

						var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);

						$t.css('background-position', 'center ' + (pos * (-1 * intensity)) + 'px');

					});

			};

			off = function() {

				$t
					.css('background-position', '');

				$window
					.off('scroll._parallax');

			};

			skel.on('change', function() {

				if (skel.breakpoint('medium').active)
					(off)();
				else
					(on)();

			});

		});

		$window
			.off('load._parallax resize._parallax')
			.on('load._parallax resize._parallax', function() {
				$window.trigger('scroll');
			});

		return $(this);

	};

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper'),
			$header = $('#header'),
			$banner = $('#banner');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load pageshow', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Clear transitioning state on unload/hide.
			$window.on('unload pagehide', function() {
				window.setTimeout(function() {
					$('.is-transitioning').removeClass('is-transitioning');
				}, 250);
			});

		// Fix: Enable IE-only tweaks.
			if (skel.vars.browser == 'ie' || skel.vars.browser == 'edge')
				$body.addClass('is-ie');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly').scrolly({
				offset: function() {
					return $header.height() - 2;
				}
			});

		// Tiles.
			var $tiles = $('.tiles > article');

			$tiles.each(function() {

				var $this = $(this),
					$image = $this.find('.image'), $img = $image.find('img'),
					$link = $this.find('.link'),
					x;

				// Image.

					// Set image.
						$this.css('background-image', 'url(' + $img.attr('src') + ')');

					// Set position.
						if (x = $img.data('position'))
							$image.css('background-position', x);

					// Hide original.
						$image.hide();

				// Link.
					if ($link.length > 0) {

						$x = $link.clone()
							.text('')
							.addClass('primary')
							.appendTo($this);

						$link = $link.add($x);

						$link.on('click', function(event) {

							var href = $link.attr('href');

							// Prevent default.
								event.stopPropagation();
								event.preventDefault();

							// Start transitioning.
								$this.addClass('is-transitioning');
								$wrapper.addClass('is-transitioning');

							// Redirect.
								window.setTimeout(function() {

									if ($link.attr('target') == '_blank')
										window.open(href);
									else
										location.href = href;

								}, 500);

						});

					}

			});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() {
					$window.trigger('scroll');
				});

				$window.on('load', function() {

					$banner.scrollex({
						bottom:		$header.height() + 10,
						terminate:	function() { $header.removeClass('alt'); },
						enter:		function() { $header.addClass('alt'); },
						leave:		function() { $header.removeClass('alt'); $header.addClass('reveal'); }
					});

					window.setTimeout(function() {
						$window.triggerHandler('scroll');
					}, 100);

				});

			}

		// Banner.
			$banner.each(function() {

				var $this = $(this),
					$image = $this.find('.image'), $img = $image.find('img');

				// Parallax.
					$this._parallax(0.275);

				// Image.
					if ($image.length > 0) {

						// Set image.
							$this.css('background-image', 'url(' + $img.attr('src') + ')');

						// Hide original.
							$image.hide();

					}

			});

		// Menu.
			var $menu = $('#menu'),
				$menuInner;

			$menu.wrapInner('<div class="inner"></div>');
			$menuInner = $menu.children('.inner');
			$menu._locked = false;

			$menu._lock = function() {

				if ($menu._locked)
					return false;

				$menu._locked = true;

				window.setTimeout(function() {
					$menu._locked = false;
				}, 350);

				return true;

			};

			$menu._show = function() {

				if ($menu._lock())
					$body.addClass('is-menu-visible');

			};

			$menu._hide = function() {

				if ($menu._lock())
					$body.removeClass('is-menu-visible');

			};

			$menu._toggle = function() {

				if ($menu._lock())
					$body.toggleClass('is-menu-visible');

			};

			$menuInner
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 250);

				});

			$menu
				.appendTo($body)
				.on('click', function(event) {

					event.stopPropagation();
					event.preventDefault();

					$body.removeClass('is-menu-visible');

				})
				.append('<a class="close" href="#menu">Close</a>');

			$body
				.on('click', 'a[href="#menu"]', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Toggle.
						$menu._toggle();

				})
				.on('click', function(event) {

					// Hide.
						$menu._hide();

				})
				.on('keydown', function(event) {

					// Hide on escape.
						if (event.keyCode == 27)
							$menu._hide();

				});

	});

})(jQuery);