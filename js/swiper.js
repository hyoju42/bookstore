// 슬라이더1_1
var swiper = new Swiper('.swiper1_1', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper1_1 .swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper1_1 .swiper-button-next',
          prevEl: '.swiper1_1 .swiper-button-prev',
        },
      });

// 슬라이더1_2
var swiper = new Swiper('.swiper1_2', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper1_2 .swiper-pagination',
        },
      });

// 오늘의 선택
var todaytitle = ['국내도서','외국도서','eBook','sam','핫트랙스','교보only'];
var swiper = new Swiper('.swiper2', {
        slidesPerView: 8,
        slidesPerGroup: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: '#slider2 .swiper-button-next',
          prevEl: '#slider2 .swiper-button-prev',
        },
        pagination: {
          el: '#swiper2 .swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + todaytitle[index] + '</span>';
          },
        },
      });

// MD선택
var mdtitle = ['국내도서','외국도서','eBook','sam','핫트랙스','교보only'];
var swiper = new Swiper('.swiper4', {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 40,
        navigation: {
          nextEl: '#slider4 .swiper-button-next',
          prevEl: '#slider4 .swiper-button-prev',
        },
        pagination: {
          el: '#slider4 .swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + mdtitle[index] + '</span>';
          },
        },
      });

// 트렌드
var swiper = new Swiper('.swiper5', {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 30,
        navigation: {
          nextEl: '#slider5 .swiper-button-next',
          prevEl: '#slider5 .swiper-button-prev',
        },
      });

// 북 퍼포먼스
var swiper = new Swiper('.swiper6', {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 30,
        navigation: {
          nextEl: '#slider6 .swiper-button-next',
          prevEl: '#slider6 .swiper-button-prev',
        },
      });

// 나만의 취향
var swiper = new Swiper('.swiper8', {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 30,
        navigation: {
          nextEl: '#slider8 .swiper-button-next',
          prevEl: '#slider8 .swiper-button-prev',
        },
      });

// 교보문고 만듦
var swiper = new Swiper('.swiper9', {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 30,
        navigation: {
          nextEl: '#slider9 .swiper-button-next',
          prevEl: '#slider9 .swiper-button-prev',
        },
      });

// 바로출판
var swiper = new Swiper('.swiper14', {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 30,
        navigation: {
          nextEl: '#slider14 .swiper-button-next',
          prevEl: '#slider14 .swiper-button-prev',
        },
      });

// 교보문고에서만
var swiper = new Swiper('.swiper15', {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 30,
        navigation: {
          nextEl: '#slider15 .swiper-button-next',
          prevEl: '#slider15 .swiper-button-prev',
        },
      });

// CASTing
var swiper = new Swiper('.swiper16', {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 30,
        navigation: {
          nextEl: '#slider16 .swiper-button-next',
          prevEl: '#slider16 .swiper-button-prev',
        },
      });

// event

var eventtitle = ['교보문고', 'eBook','핫트랙스'];
var swiper = new Swiper('.swiper17', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 9,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '#slider17 .swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + eventtitle[index] + '</span>';
          },
        },
      });