$( document ).ready(function() {
    $('.slick_flex').slick({
        arrows: true,
        dots: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        speed: 500,
        easing: 'linear',
        infinite: false,
        initialSlide: 0,
        autoplay: false,
        centerMode: false,
        rows: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 8
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5
                }
            },
        ]
    });
});
