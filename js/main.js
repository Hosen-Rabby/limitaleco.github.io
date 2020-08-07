$(document).ready(function(){


$('.navbar-toggler').click(function(){
	$('.navbar-toggler').toggleClass('change')
})


// Sticky navbar less padding
$(window).scroll(function(){
	let position = $(this).scrollTop();

	if (position>=718) {
		$('.navbar').addClass('navbar-background');
		$('.navbar').addClass('fixed-top');
	}else{
		$('.navbar').removeClass('navbar-background');
		$('.navbar').removeClass('fixed-top');
	}
})


// smooth scroll

$('.nav-item a, .header-link, #back-to-top').click(function (link) {
	link.preventDefault();
	let target = $(this).attr('href');

	$('html, body').stop().animate({
		scrollTop: $(target).offset().top - 25
	}, 3000);
})


// back to top

$(window).scroll(function(){
	let position = $(this).scrollTop();

	if (position>=718) {
		$('#back-to-top').addClass('scrollTop');
	}else{
		$('#back-to-top').removeClass('scrollTop');
	}
})














	// ripple

$("#header, .info").ripples({
  dropRadius: 25,
  perturbance: .6,
  
});

$('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  // other options

  gallery: {
  	enabled : true
  }
});
});



// --mainblue: #40acf1;
//   --transparentblue: rgba(64, 172, 241, 0.7);
//   --mainwhite: #ffffff;
//   --mainblack: #292f36;
//   --maingrey: #231F20;
//   --mainyellow: #e2b585;
//   --bg-gray: #c9c1ac;
//   --primary-color : #BB4430;
//   --main-btn: #242424;
//   --item-link : #d3325f;
//   --card : #606060;