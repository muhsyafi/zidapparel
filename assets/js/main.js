$(document).ready(function() { //Ready
	//All function
	function showImage(image){
		$('body').append('<div class="dialog full-w full-h"><p style="color:white;">Press ESC or click anywhere to exit</p></div>');
		$('.dialog').append('<div class="wrapper"><img src="'+image+'" class="image-dialog"></div>');
		//<img class="abs image-cancle cp" src="assets/img/cancle.png">
	}
	function convNum(numb){

	}
	//End function

	$(document).on('keyup', 'body', function(event) {
		event.preventDefault();
		if (event.keyCode==27) {
			$('.dialog').remove();
		};
	});

	//Carousel
    $('.carousel').carousel({
      interval: 2000
    });
	//End Carousel

	//Dialog
	$(document).on('click', '.dialog', function(event) {
		if ($(event.target).is('.dialog,.dialog > div')) {$('.dialog').remove()} else{};
	});
	$(document).on('click', '.image-cancle', function(event) {
		$('.dialog').remove();
	});
	//End dialog

	$(document).on('click', '.item-image-main', function(event) {
		var image = $(this).attr('src');
		showImage(image);
	});

}); //End ready