app.controller('inicioCtrl', ['$scope', function($scope){

	$(document).ready(function(){
	    $('.customer-logos').slick({
	        slidesToShow: 5	,
	        slidesToScroll: 1,
	        autoplay: true,
	        autoplaySpeed: 1000,
	        arrows: false,
	        dots: false,
	        pauseOnHover: true,
	        responsive: [{
	            breakpoint: 876,
	            settings: {
	                slidesToShow: 4
	            }
	        }, {
	            breakpoint: 520,
	            settings: {
	                slidesToShow: 3
	            }
	        }]
	    });
	});
	
	$('.parallax-window').parallax({imageSrc: 'img/pexels-photo-355056.jpeg'});



}])