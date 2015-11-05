$(document).ready(function() {	

	// $.getScript('path/to/file.js');

	// $("#contact").validate({
	//   rules: {
	//     name: "required",
	//     email: {
	//       required: true,
	//       email: true
	//     },
	//     phone: "required"
	//   },
	//   messages: {
	//     name: "Please specify your name",
	//     email: {
	//       required: "We need your email address to contact you",
	//       email: "Your email address must be in the format of name@domain.com"
	//     },
	//     phone: "Phone number pleassseeee"
	//   }
	// });

	$('.intro h1').animate({
		opacity: '1',
		margin: '70 0 0 0'
	}, 2500 );

	$('.intro p, .intro a').animate({
		opacity: '1',
	}, 2500 );
	// $('.intro p').slideUp('300');
	// $('.intro a').slideUp('300');

	$('.intro').hide().fadeIn('slow');

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){  
			$('header').addClass("sticky");
		}
		else{
			$('header').removeClass("sticky");
		}
	});

	$('a').click(function(event){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		return false;
	});

});