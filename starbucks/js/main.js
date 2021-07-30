const searchEL = document.querySelector('.search');
const searchInputEL = searchEL.querySelector('input');

searchEL.addEventListener('click', function () {
    searchInputEL.focus();

});

searchInputEL.addEventListener('focus', function () {
    searchEL.classList.add('focused');
    searchInputEL.setAttribute('placeholder','통합검색');
});

searchInputEL.addEventListener('blur', function () {
    searchEL.classList.remove('focused');
    searchInputEL.setAttribute('placeholder','');
});

const badgeEL = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
    if(window.scrollY > 500){
        //gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEL, .6, {
            opacity: 0,
            display: 'none'
        });
    }
    else {
        gsap.to(badgeEL, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));
// _.throttle(함수, 시간)


const fadeELs = document.querySelectorAll('.visual .fade-in');
fadeELs.forEach(function (fadeEL, index) {
    gsap.to(fadeEL, .1, {
        delay: (index + 1) * .7, //0.7, 1.4, 2.1, 2.7
        opacity: 1
    })
});


//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
})

new Swiper('.promotion .swiper-container', {
    //direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
   // autoplay: {
    //    deplay: 5000
    //},
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
    },

    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion == true) {
        promotionEl.classList.add('hide');
    }else {
        promotionEl.classList.remove('hide');
    }
});