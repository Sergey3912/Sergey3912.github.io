$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

	var owl = $("#owl-carousel");
	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "slide",
		dots: true
	});

$('.button-prev').click(function() {
    owl.trigger('prev.owl.carousel');
});
$('.button-next').click(function() {
    owl.trigger('next.owl.carousel');
});


//Dribbble Widjet
$.jribbble.setToken('f688ac519289f19ce5cebc1383c15ad5c02bd58205cd83c86cbb0ce09170c1b4');

$.jribbble.shots('debuts', {
  'per_page': 6,
  'timeframe': 'month',
  'sort': 'views'
}).then(function(res) {
  var html = [];
  res.forEach(function(shot) {
    html.push('<li class="shots--shot">');
    html.push('<a href="' + shot.html_url + '" target="_blank">');
    html.push('<img src="' + shot.images.normal + '">');
    html.push('</a></li>');
  });
  
  $('.shots').html(html.join(''));
});
//Dribbble widjet end
//button up
 $(".up-button").click(function(){
 	$("body").animate({"scrollTop": 0}, 1500);
 	$("html").animate({"scrollTop": 0}, 1500);
 });
 