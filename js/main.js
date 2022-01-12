$(window).ready(function () {
  //-------------slider-------------//
  
  const originalWidth = parseFloat($(window).width());
  const sliderIsLive;

  if (originalWidth <= 767) {
    $('.menu_list').slick({
      dots: true,
    });
    $('.slick-arrow').text('');
    $('.slick-arrow').css('display', 'none');
    sliderIsLive = true;
  }

  $('.burger').removeClass('active');
  $('.nav_bar').removeClass('visible');

  //-------------resizing blocks---------------//

  const banner = $('.banner');
  const bottom__image = $('.bottom__image');
  const header = $('header');

  banner.css('height', (banner.outerWidth() / 2000) * 1321);
  bottom__image.css('height', (bottom__image.outerWidth() / 2000) * 383);
  header.css('height', (header.outerWidth() / 2000) * 147);

  $(window).resize(function () {
    const width = parseFloat($(window).width());
    banner.css('height', (banner.outerWidth() / 2000) * 1321);
    bottom__image.css('height', (bottom__image.outerWidth() / 2000) * 383);
    header.css('height', (header.outerWidth() / 2000) * 147);

    if (width <= 767 && !sliderIsLive) {
      $('.menu_list').slick({
        dots: true,
      });
      $('.slick-arrow').text('');
      $('.slick-arrow').css('display', 'none');
      sliderIsLive = true;
    } else if (sliderIsLive && width >= 768) {
      $('.menu_list').slick('unslick');
      sliderIsLive = false;
    }
  });
});

//---------------handling burger menu------------------------//

$('.burger').click(function () {
  $('.nav_bar').toggleClass('visible');
  $('.burger').toggleClass('active');
  $('html').toggleClass('static');
  $('body').toggleClass('static');
});
