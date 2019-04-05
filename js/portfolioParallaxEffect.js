$(window).scroll(function() {
    var scroll = $(window).scrollTop(); // how many pixels you've scrolled
    var os = $('#background').offset().top; // pixels to the top of div1
    // Change the background image if the user scrolls past the portfolio area.
    if(scroll > os){
            $('.banner').css('z-index', '-10');
            $('.aboutSection').css('z-index', '0');
            $('#spacer').css('z-index', '-10');
    } else {
        $('.banner').css('z-index', '0');
        $('#spacer').css('z-index', '1');
        $('.aboutSection').css('z-index', '-10');
    }
});