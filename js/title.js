$(window).load(function () {
    $(window).on("scroll resize", function () {
        var pos = $('.headline').offset();
        $('.post').each(function () {
            if (pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top) {
                var newDescr = $(this).find('.description').text();
                var oldDescr = $( ".headline" ).html();

                $('.headline').html(newDescr);
                if(newDescr !== oldDescr) {
                    $( ".headline" ).css('opacity', 0).animate({ 'opacity': '1',}, 500);
                return;
                }
            }
        });
    });

    $(document).ready(function () {
        $(window).trigger('scroll'); // init the value
    });
});
