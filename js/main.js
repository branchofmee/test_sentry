$(function () {
	$(function () {
		$('.slideinbottom0').animate({ 'opacity': '1' }, 2);
		$('.slideinbottom0').css({ 'transform': 'translate(0px, 0px)' }, 5);
	});

	$("#menuicon").click(function () {
		$("#headernav").slideToggle();
	});

	$(window).resize(function () {
		if (window.innerWidth >= 991) {
			$("#headernav").show();
		}
		if (window.innerWidth <= 990) {
			$("#headernav").hide();
		}
	});

	$(window).scroll(function (i) {
		$('.slideinbottom, .slideinleft, .slideinright').each(function (i) {
			var bottom_of_element = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			if (bottom_of_window > bottom_of_element) {
				$(this).animate({ 'opacity': '1' }, 2);
				$(this).css({ 'transform': 'translate(0px, 0px)' }, 5);
			}
		});
		var $header = $('#upperheader0');
		$(window).scroll(function () {
			if ($(this).scrollTop() > 250) {
				$header.addClass('sticky');
			} else {
				$header.removeClass('sticky');
			}
		});
	});
});
