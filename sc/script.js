var $developmentWrapper = $('.developments');
var developmentIsVisible = false;


$(window).scroll( function(){

    var bottom_of_window = $(window).scrollTop() + $(window).height();

    var middle_of_developmentWrapper = $developmentWrapper.offset().top + $developmentWrapper.outerHeight()/2;

    if((bottom_of_window > middle_of_developmentWrapper)&& (developmentIsVisible == false)){
        $('.developments li').each( function(){
            var $barContainer = $(this).find('.progress_bar');
            var dataPercent = parseInt($barContainer.data('percent'));
            var elem = $(this).find('.progressbar');
            var percent = $(this).find('.percent');
            var width = 0;

            var id = setInterval(frame, 15);

            function frame() {
                if (width >= dataPercent) {
                    clearInterval(id);
                } else {
                    width++;
                    elem.css("width", width+"%");
                    percent.html(width+" %");
                }
            }

        });
        developmentIsVisible = true;
    }
});
