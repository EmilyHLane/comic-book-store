//alert("javascript is working!");

function showHideNav() {
	$('.nav').toggleClass('small-nav-closed');
	$('.nav').toggleClass('small-nav-open');
	$('.fa-times').toggleClass('close-icon');
	$('.fa-times').toggleClass('hide');
};

$('.hamburger-icon').on('click', showHideNav);
$('.fa-times').on('click', showHideNav);








