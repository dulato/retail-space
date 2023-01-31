var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
        992: {
            slidesPerView: 4,
            spaceBetween: 100,
            slideToClickedSlide: true,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 50,
            slideToClickedSlide: true,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 30,
            slideToClickedSlide: true,
        }
    }
});