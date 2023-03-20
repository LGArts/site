$(document).ready(function() {
	// change link class when on current page
	$('a[href="' + location.pathname + '"]').addClass('current-link');
	// inject header and footer
	$("#headerhtml").load("res/header.html");
	$("#footerhtml").load("res/footer.html");
});