$(function() {
	
//Scroll menu
	$('#home').click(function () {
		$('html').animate({scrollTop:0});
		$('.menu-phai').removeClass('ra');
		return false;
	})
	$('#service').click(function () {
		$('html').animate({scrollTop:$('.top3').offset().top});
		$('.menu-phai').removeClass('ra');
		return false;
	})
	$('#about').click(function () {
			$('html').animate({scrollTop:$('.top7').offset().top});
			$('.menu-phai').removeClass('ra');
			return false;
		})
	$('#contact').click(function () {
				$('html').animate({scrollTop:$('.top6').offset().top});
				$('.menu-phai').removeClass('ra');
				return false;
			})
// Responsive
	var docao =$(window).height();
	$('.top1').css({'height':docao});
	
	$(window).resize(function () {
		var docao =$(window).height();
		$('.top1').css({'height':docao});
	});
// Khi click vao nut-menu
	$('.nut-menu').click(function () {
		$('.menu-phai').addClass('ra');
		return false;
	})
	$('.nut-dong').click(function () {
		$('.menu-phai').removeClass('ra');
		return false;
	})
	
})