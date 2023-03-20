$(document).ready(function() {
	// change link class when on current page
	$('a[href="' + location.pathname + '"]').addClass('current-link');
	$("#headerhtml").load("res/header.html");
	$("#footerhtml").load("res/footer.html");
});

$(function() {
	$("#headerhtml").load("res/header.html");
	$("#footerhtml").load("res/footer.html");
});