// Hide menu before ready
$('#menu').animate({
	height: 'toggle'
}, 0);

$(document).ready(function () {

	'use strict';

	// Hide flash page
	$('#flash').fadeOut().removeClass('hidden');

	// When page ready, hide loader
	$('#loader').animate({
		height: 'toggle'
	}, 750);


	var col = $('.color2'),
		header = $('.header'),
		old1, old2, old3, old4, old5,
		tmp, tmp1, tmp2, tmp3, tmp4, tmp5,
		copyHash = false;


	// adjust text to never be bigger than column
	function adjustText() {

		if ($(window).width() < 480) {

			$('.textJsHex1, .textJsHex2, .textJsHex3, .textJsHex4, .textJsHex5').css({

				'font-size': (
					(col.width() / 7) + 'px'
				)

			});

		}

		if ($(window).width() >= 480) {


			$('.textJsHex1, .textJsHex2, .textJsHex3, .textJsHex4, .textJsHex5').css({

				'font-size': '16px'

			});

		}

	}
	// Run function
	adjustText();


	// Color function handler
	function color() {

		var c1 = $('.color1'),
			c2 = $('.color2'),
			c3 = $('.color3'),
			c4 = $('.color4'),
			c5 = $('.color5');

		// For return values, copied before new roll
		old1 = tmp1;
		old2 = tmp2;
		old3 = tmp3;
		old4 = tmp4;
		old5 = tmp5;

		function generate() {

			tmp = Math.floor(Math.random() * 15);

			if (tmp >= 10) {

				switch (tmp) {

				case 10:
					tmp = 'a';
					break;

				case 11:
					tmp = 'b';
					break;

				case 12:
					tmp = 'c';
					break;

				case 13:
					tmp = 'd';
					break;

				case 14:
					tmp = 'e';
					break;

				case 15:
					tmp = 'f';
					break;

				}

			}

			return tmp;

		}

		// Roll numbers
		tmp1 = '#' + generate() + generate() + generate() + generate() + generate() + generate();

		tmp2 = '#' + generate() + generate() + generate() + generate() + generate() + generate();

		tmp3 = '#' + generate() + generate() + generate() + generate() + generate() + generate();

		tmp4 = '#' + generate() + generate() + generate() + generate() + generate() + generate();

		tmp5 = '#' + generate() + generate() + generate() + generate() + generate() + generate();


		// Apply the roll to background of each column
		c1.css({
			'background': tmp1
		});
		c2.css({
			'background': tmp2
		});
		c3.css({
			'background': tmp3
		});
		c4.css({
			'background': tmp4
		});
		c5.css({
			'background': tmp5
		});


		// Update the HTML text value of column
		$('.textJsHex1').html(tmp1);
		$('.textJsHex2').html(tmp2);
		$('.textJsHex3').html(tmp3);
		$('.textJsHex4').html(tmp4);
		$('.textJsHex5').html(tmp5);


	}



	// Roll dice handler
	$('.icon').on('click', function () {

		// cancel animation 'catch-eye'
		$(this).removeClass('glow');

		// Fade out the title header
		$('.header .logo3').fadeOut(500);

		// Roll dice
		color();

	});

	// return function handler
	$('.back').on('click', function () {

		var c1 = $('.color1'),
			c2 = $('.color2'),
			c3 = $('.color3'),
			c4 = $('.color4'),
			c5 = $('.color5');

		c1.css({
			'background': old1
		});
		c2.css({
			'background': old2
		});
		c3.css({
			'background': old3
		});
		c4.css({
			'background': old4
		});
		c5.css({
			'background': old5
		});

		$('.textJsHex1').html(old1);
		$('.textJsHex2').html(old2);
		$('.textJsHex3').html(old3);
		$('.textJsHex4').html(old4);
		$('.textJsHex5').html(old5);

	});


	// /Menu function handler
	$('.menulogo').on('click', function () {

		// Toggle menu open
		$('#menu').animate({
			height: 'toggle'
		}, 500, function () {

			// when done, center the container
			$('.menuContainer').animate({
				'top': (
					(($(window).innerHeight() - $('.menuContainer').height()) / 2) + 'px'
				)
			}, 250);

		});

	});

	// Menu close handler
	$('.menu-close').on('click', function () {

		$('#menu').animate({
			height: 'toggle'
		}, 500);

	});


	// Set animation for logo
	setInterval(
		function () {
			$('.header .logo1').toggleClass('animate');
		}, 15000);


	// center 'copied' text for flash window
	$('#flash .container').css({
		'top': (
			(($(window).innerHeight() - $('#flash .container').height()) / 2) + 'px'
		)
	});


	$(window).resize(function () {

		adjustText();

		$('.menuContainer').animate({
			'top': (
				(($(window).innerHeight() - $('.menuContainer').height()) / 2) + 'px'
			)
		}, 250);

		$('#flash .container').animate({
			'top': (
				(($(window).innerHeight() - $('#flash .container').height()) / 2) + 'px'
			)
		}, 250);

	});


	$('.hexText').on('click', function (e) {
		e.preventDefault();
	});

	// Copy to clipboard handler
	$('.hexText').clipboard({
		path: 'js/jquery.clipboard.swf',
		copy: function () {

			// when copied, flash for UX
			$('#flash').fadeIn(100).fadeOut(250);

			if (copyHash) {

				return $(this).html();

			} else {

				return $(this).html().replace('#', '');

			}

			// copy to clipboard
			return $(this).html();

		}
	});

	$('#copyHash').on('click', function () {

		if (copyHash) {

			copyHash = false;

		} else {

			copyHash = true;

		}

	});

});




// Change color to black
$('#textSwitch').on('click', function () {

	'use strict';


	var text = $('.hexText'),
		svgShadow = $('.svg-shadow'),
		svgFill = $('.svg-fill');

	if (text.hasClass('black')) {

		text.removeClass('black');
		svgFill.css({
			'fill': 'white'
		});
		svgShadow.css({
			'fill': 'black'
		});


	} else {

		text.addClass('black');
		svgFill.css({
			'fill': 'black'
		});
		svgShadow.css({
			'fill': 'rgba(255,255,255,.1)'
		});

	}

});

// Change bg color
$('#bgSwitch').on('click', function () {

	'use strict';

	var bg = $('body');

	if (bg.hasClass('black')) {

		bg.removeClass('black');

	} else {

		bg.addClass('black');

	}

});

// Create this var only ounce
var ounce = false;

// Switch number of columns
$('#colSwitch').on('click', function () {

	'use strict';

	var bg = $('body'),
		color = $('.color');

	if (bg.hasClass('five-rows')) {

		$('.color1').css({
			left: '0',
			right: '70%'
		});
		$('.color2').css({
			left: '35%',
			right: '35%'
		});
		$('.color3').css({
			right: '0',
			left: '70%'
		});
		$('.color4, .color5').addClass('hidden');

		bg.removeClass('five-rows');

	} else {

		bg.addClass('five-rows');

		$('.color1').css({
			left: '0',
			right: '84%'
		});
		$('.color4').css({
			left: '21%',
			right: '63%'
		}).removeClass('hidden');
		$('.color2').css({
			left: '42%',
			right: '42%'
		});
		$('.color5').css({
			left: '63%',
			right: '21%'
		}).removeClass('hidden');
		$('.color3').css({
			left: '84%',
			right: 0
		});

		// if first time
		if (!ounce) {

			$('.hexText2').on('click', function (e) {
				e.preventDefault();
			});

			// add copy function to new columns hex text
			$('.hexText2').clipboard({
				path: 'js/jquery.clipboard.swf',
				copy: function () {

					$('#flash').fadeIn(100).fadeOut(250);

					if (copyHash) {

						return $(this).html();

					} else {

						return $(this).html().replace('#', '');

					}

				}
			});

			ounce = true;

		}

	}

});