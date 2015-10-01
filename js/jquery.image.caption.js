/*************************************************
      image Overlay JS 
      @author Fabio Mangolini
      http://www.responsivewebmobile.com
**************************************************/
(function($) {
	$.ImageCaption = function(options) {
		var settings = $.extend({
            // These are the defaults.
            opacity: 0.5, //accepted values=> 0.1 to 1
            bgcolor: '#000000',
            color: '#FFFFFF'
        }, options );

		$(".image-overlay-container").hover(function () {
			//get the dimension of the item to put the overlay over
			$(this).width($('.to-hover', this).outerWidth());
			$(this).height($('.to-hover', this).outerHeight());

			//image overlay container dimensions
			var wmoc = $(this).outerWidth();
			var hmoc = $(this).outerHeight();

			//set the image overlay size equal to the image
			$('.image-overlay', this).css({'width': wmoc});
			$('.image-overlay', this).css({'height': hmoc});

			//sets the overlay background color and caption text color
			$('.image-overlay', this).css({'background-color': settings.bgcolor});
			$('.image-caption', this).css({'color': settings.color});

			//shows the overlay
			$('.image-overlay', this).stop().animate({
				opacity: settings.opacity

			}, "fast");

			$('.image-caption', this).css({'display': 'block'});
		},
		function () {
			//hide the overlay
			$('.image-overlay', this).stop().animate({
				opacity: 0

			}, "fast");

			$('.image-caption', this).css({'display': 'none'});
		});
	};
})(jQuery);