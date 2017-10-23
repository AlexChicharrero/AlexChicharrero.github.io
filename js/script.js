$(document).ready(function(){
	var contador = 1;

	$('.menu_bar').click(function(){
		// $('nav').toggle();

		if(contador == 1){
			$('nav').animate({
				left: '0',
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	$(window).resize(function(){
		if($(window).width() > 900){
			$('nav').animate({
				left: '0'
			});
			document.getElementById('nombre').style.display="block";
		}
		else {
			$('nav').animate({
				left: '-100%'
			});
			document.getElementById('nombre').style.display="none";
		}

	});

});

//style="display:none"
