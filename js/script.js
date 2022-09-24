const bth = document.querySelector('.icon');

document.querySelectorAll('.burger-btn-active').forEach(function(btn) {
    btn.addEventListener('click', function() {
        document.querySelector('.burger-menu').classList.toggle('not-active')
    });
});

const search = document.querySelector('.search');
const body = document.querySelector('body');
const cross = document.querySelector('.cross');

bth.addEventListener('click', function() {
    search.classList.add("se--active");
});
cross.addEventListener('click', function(el) {
    search.classList.remove("se--active");
});

/*select */

const defaultSelect = () => {
    const element = document.querySelector('.gallery__select');
    const choices = new Choices(element, {
        searchEnabled: false
    });
}
defaultSelect();

/* MENU*/

document.addEventListener('DOMContentLoaded', () => {
    const menuBtns = document.querySelectorAll('.menu__btn');
    const drops = document.querySelectorAll('.dropdown');

    menuBtns.forEach(el => {
        el.addEventListener('click', (e) => {
            let currentBtn = e.currentTarget;
            let drop = currentBtn.closest('.menu__item').querySelector('.dropdown');

            menuBtns.forEach(el => {
                if (el !== currentBtn) {
                    el.classList.remove('menu__btn--active');
                }
            });

            drops.forEach(el => {
                if (el !== drop) {
                    el.classList.remove('dropdown--active');
                }
            });

            drop.classList.toggle('dropdown--active');
            currentBtn.classList.toggle('menu__btn--active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.menu')) {
            menuBtns.forEach(el => {
                el.classList.remove('menu__btn--active');
            });

            drops.forEach(el => {
                el.classList.remove('dropdown--active');
            });
        }
    });
});

// Создание карты.
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.758468, 37.601088],
        zoom: 14
    });

    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/card.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-3, -42],
    });
    myMap.geoObjects.add(myPlacemark);

}


(() => {
    new Accordion(".js-accordion-container", {
        openOnInit: [0]
    });
})();

/*ТАБЫ*/
document.querySelectorAll('.tabs-nav__bth').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        document.querySelectorAll('.tabs-nav__bth').forEach(function(btn) {
            btn.classList.remove('tabs-nav__bth-first')
        });
        e.currentTarget.classList.add('tabs-nav__bth-first');
        document.querySelectorAll('.tabs-item').forEach(function(tabsBtn) {
            tabsBtn.classList.remove('tabs-item--active')
            tabsBtn.classList.remove('tabs-item--activee')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--activee');
        tabsBtn.classList.remove('tabs-item--active')
    });
});

/*hero */
const swiper = new Swiper('.hero__section-images', {

    direction: 'vertical',
    loop: true,
    direction: 'horizontal',
    autoplay: true,
    speed: 2200,
    allowTouchMove: false,

    pagination: {
        el: '.swiper-pagination',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    uniqueNavElements: false,
})

/*Свайпер Проекты*/

var swiperP = new Swiper(".mySwiperP", {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
    loop: true,
    loopPreventsSlide: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 21,
            slidesPerGroup: 1,
        },
        560: {
            slidesPerView: 2,
            spaceBetween: 33,
            slidesPerGroup: 2,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
            slidesPerGroup: 2,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        }
    }
});

/*Свайпер События */

var swiperE = new Swiper(".mySwiperE", {
    slidesPerView: 3,
    spaceBetween: 50,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        1100: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 27,
            slidesPerGroup: 3,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1,
        }
    }
});
/*Свайпер Галерея */
var swiperG = new Swiper(".mySwiperG", {
    slidesPerView: 3,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    centerInsufficientSlides: false,
    loop: true,
    slidesPerGroup: 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        1700: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        },
        687: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2,
        },
        319: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
        }
    }
});

//input

const validation = new JustValidate('.contacts__form');
new JustValidate('.contacts__form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 10
        },
        tel: {
            required: true,
            minLength: 12,
            maxLength: 13,

        },
    },
    messages: {
        name: {
            required: 'Вы не ввели имя',
            minLength: 'Введите 2 и более символов',
            maxLength: 'Не более 10 символов'
        },

        tel: {
            required: 'Вы не ввели телефон',
            minLength: 'Здесь должно быть 12 символов',
            maxLength: 'Здесь должно быть 12 символов',

        },
    }
});

//modal

const btns = document.querySelectorAll('.gallery__slide');
const modalOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modal');
btns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
        modalOverlay.classList.add('modal-overlay--visible');
    });

});
const modlCross = document.querySelector('.modal-cross');
modlCross.addEventListener('click', function() {
    modalOverlay.classList.remove("modal-overlay--visible");
});

$(document).ready(function() {
    $('.menu__btn').click(function(event) {
        $(this).toggleClass('arrow--active');
    });
});

//Плавный скролл

const anchors = document.querySelectorAll('a[href^="#"]')
for (let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
        e.preventDefault()
        const gotoo = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
        document.querySelector(gotoo).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
};

//tooltip

tippy('.js-tooltip', {
    allowHTML: true,
    trigger: 'mouseenter focus click',
    interactive: true,
    duration: 300,
    theme: 'Amethyst',
});
