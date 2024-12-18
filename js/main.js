
// 메인 배너 슬라이드
const visual_list = new Swiper('.visual_list', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  speed: 1000,

  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});

// 슬라이드 정지
$(".pause").click(function () {
  visual_list.autoplay.stop();
  $(this).hide();
  $(".play").show();
});

// 슬라이드 재생
$(".play").click(function () {
  visual_list.autoplay.start();
  $(this).hide();
  $(".pause").show();
});
//start 다시 재생 시작


// 베스트 상품 슬라이드
const best_list = new Swiper('.best_list', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  speed: 1000,
  loop: true,


  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },


  breakpoints: {
    0: { // 모바일
      slidesPerView: 1.5,

    },
    768: {// 768픽셀 이상에서 - min-width / 테블릿
      slidesPerView: 1.5,

    },
    1200: { // 데스크탑
      slidesPerView: 4,

    },
  },

  centeredSlides: true,

});


$(".new_list button").click(function () {

  $(this).addClass("active");
  $(this).siblings().removeClass("active");

  // 클릭한 요소의 번호를 찾아서 
  //number 변수에 저장(할당)하시오
  let number = $(this).index();
  // 이미지 리스트 중 찾은 번호에 해당하는 
  // 이미지는 fadeIn
  // 해당 이미지의 형제요소는 hide 
  $(".new_img li").eq(number).fadeIn().siblings().hide();
});

