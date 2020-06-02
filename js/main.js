$(window).ready(function() {
    //-------------slider-------------//
    let width = parseFloat($(window).width());
    let sliderIsLive;

    if (width <= 767) {
        $('.menu_list').slick({
            dots: true,
        });
        $('.slick-arrow').text('');
        $('.slick-arrow').css('display', 'none')
        sliderIsLive = true;
    }

    $('.burger').removeClass('active')
    $('.nav_bar').removeClass('visible')




    //-------------resizing blocks---------------//
    let banner = $('.banner');
    let bottom__image = $('.bottom__image');
    let header = $('header');

    banner.css('height', banner.outerWidth()/2000*1321);
    bottom__image.css('height', bottom__image.outerWidth()/2000*383);
    header.css('height', header.outerWidth()/2000*147);

    $(window).resize(function() {
        let width = parseFloat($(window).width())
        banner.css('height', banner.outerWidth()/2000*1321);
        bottom__image.css('height', bottom__image.outerWidth()/2000*383);
        header.css('height', header.outerWidth()/2000*147);

        if (width <= 767) {
            if (!sliderIsLive) {
                $('.menu_list').slick({
                    dots: true,
                });
                $('.slick-arrow').text('');
                $('.slick-arrow').css('display', 'none')
                sliderIsLive = true;
            }
        }
        else if (sliderIsLive && width >= 768) {
            $('.menu_list').slick('unslick')
            sliderIsLive = false;
        }
    })
})

//---------------создаем выезд меню------------------------//

$('.burger').click(function() {
    $('.nav_bar').toggleClass('visible')
    $('.burger').toggleClass('active')
    $('html').toggleClass('static')
    $('body').toggleClass('static');
})