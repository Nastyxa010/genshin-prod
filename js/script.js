$(document).ready(function () {
	$("a.scrollto").click(function () {
		elementClick = $(this).attr("href")
		destination = $(elementClick).offset().top;
		$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination - 130 }, 800);
		return false;
	});
});