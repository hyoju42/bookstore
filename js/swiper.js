
const progressCircle = document.querySelector('.autoplay-progress svg');
const progressContent = document.querySelector('.autoplay-progress span');
var swiper = new Swiper('.slider1_1', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '#slider1_1 .swiper-button-next',
        prevEl: '#slider1_1 .swiper-button-prev',
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty('--progress', 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        },
    },
});
var swiper = new Swiper('.slider1_2', {
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: '#slider1_2 .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '#slider1_1 .swiper-button-next',
        prevEl: '#slider1_1 .swiper-button-prev',
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty('--progress', 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        },
    },
});
