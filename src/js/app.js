function editCount(btn, plus) {

    let countGroup = btn.closest('[data-count="group"]'),
        countResult = countGroup.find('[data-count="result"]'),
        countResultCount = Number(countResult.text()),
        btnAdd2BasketCount = countGroup.find('[data-catalog-action="add2basket"]');

    if (plus === true) {
        if (countGroup.data('maxcount') > countResultCount) {
            let newCount = ++countResultCount;
            countResult.text(newCount);
            btnAdd2BasketCount.attr('data-add2basket-count', newCount);
            btn.trigger('editCount');
        }
        countResult.removeClass('text-danger');
    } else {
        if (countResultCount > 1) {
            let newCount = --countResultCount;
            countResult.text(newCount);
            btnAdd2BasketCount.attr('data-add2basket-count', newCount);
            if (countResultCount == 0) {
                countResult.addClass('text-danger')
            }
            btn.trigger('editCount');
        }
    }

}

$(document).on('editCount', function (e) {
    console.log('Custom trigger editCount, на прод убрать log')
});

$(document).on('click', function (e) {
    let el = $(e.target);
    if (el.hasClass('btn-card-count')) {
        if (el.data('count') == 'plus') {
            editCount(el, true)
        } else {
            editCount(el, false)
        }
    }
})

if ($(window).width() > 1024) {
    $('.product-item').hover(function (e) {
        let thisHeight = $(this).height();
        $(this).find('.hidden-content').fadeIn(0);
        $(this).closest('.psevdo-container').height(thisHeight).css('z-index', '99');
        $(this).removeClass('position-relative').addClass('position-absolute')
    })
    $('.product-item').mouseleave(function (e) {
        $(this).closest('.psevdo-container').css('height', 'auto');
        $(this).find('.hidden-content').fadeOut(0);
        $(this).closest('.psevdo-container').css('z-index', '1');

        $(this).removeClass('position-absolute').addClass('position-relative')

    })
}

let swiperSliderHomeMain = new Swiper('#swiperSliderHomeMain', {
    spaceBetween: 15,
    slidesPerView: 1,
    loop: true
});



let swiperSliderHomeAdvantages = new Swiper('#swiperSliderHomeAdvantages', {
    spaceBetween: 20,
    slidesPerView: 2,
    loop: true,
    pagination: {
        type: 'bullets',
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 3
        },
        1440: {
            slidesPerView: 4
        }
    }

});


let swiperHomeBlogList = new Swiper('#swiperHomeBlogList', {
    spaceBetween: 15,
    slidesPerView: 2,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1440: {
            slidesPerView: 3
        }
    }

});


let swiperBlogList = new Swiper('#swiperBlogList', {
    spaceBetween: 15,
    slidesPerView: 2,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1440: {
            slidesPerView: 4
        }
    }
});
let swiperContactPageCatalogList = new Swiper('#swiperContactPageCatalogList', {
    spaceBetween: 15,
    slidesPerView: 2,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1440: {
            slidesPerView: 4
        }
    }
});

let swiperSliderReviews = new Swiper('#swiperSliderReviews', {
    spaceBetween: 20,
    slidesPerView: 2,
    loop: true,
    pagination: {
        type: 'bullets',
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper_custom_button-next',
        prevEl: '.swiper_custom_button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 2
        },
        1440: {
            slidesPerView: 3
        }
    }

});


let swiperCatalogList = new Swiper('#swiperCatalogList', {
    spaceBetween: 10,
    slidesPerView: 2,
    loop: true,
    pagination: {
        type: 'bullets',
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }

});

let swiperCatalogListPesr = new Swiper('#swiperCatalogListPesr', {
    spaceBetween: 20,
    slidesPerView: 2,
    loop: true,
    pagination: {
        type: 'bullets',
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }

});

$(document).ready(function(){
	$('.js-chosen').chosen({
		width: '30%',
		no_results_text: 'Совпадений не найдено',
		placeholder_text_single: 'Выберите город'
	});
});

document.addEventListener('DOMContentLoaded', function() {
    // // Инициализация Bootstrap карусели с отключенным автоперелистыванием
    // const carouselElement = document.getElementById('carouselExampleCaptions');
    // if (carouselElement) {
    //     const carousel = new bootstrap.Carousel(carouselElement, {
    //         ride: true,
    //         interval: 10000
    //     });
    // }
    
    // menu mobile

    $('.carousel').on('touchstart', function(event){
        const xClick = event.originalEvent.touches[0].pageX;
        $(this).one('touchmove', function(event){
            const xMove = event.originalEvent.touches[0].pageX;
            const sensitivityInPx = 5;
    
            if( Math.floor(xClick - xMove) > sensitivityInPx ){
                $(this).carousel('next');
            }
            else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
                $(this).carousel('prev');
            }
        });
        $(this).on('touchend', function(){
            $(this).off('touchmove');
        });
    });
    
    $('#btn_menu').click(function () {
        if ($('.close_menu').hasClass('d-none')) {
            $('#btn_menu').removeClass('btn-primary');
            $('#btn_menu').removeClass('btn');
            $('#btn_menu').addClass('button-reset');
            $('.logo_menu_mob').removeClass('d-none');
            $('.menu_mob-wrap').addClass('w-100');
            $('.close_menu').removeClass('d-none');
            $('.open_menu').addClass('d-none');
        } else {
            $('#btn_menu').addClass('btn-primary');
            $('#btn_menu').addClass('btn');
            $('#btn_menu').removeClass('button-reset');
            $('.logo_menu_mob').addClass('d-none');
            $('.menu_mob-wrap').removeClass('w-100');
            $('.close_menu').addClass('d-none');
            $('.open_menu').removeClass('d-none');
        }
    });


    // const originalElements = document.querySelectorAll('.your-original-class');
    // const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    // const vieportWith = window.innerWidth;
    // console.log(vieportWith);
    //
    // function updateClonePosition(original, clone) {
    //     const rect = original.getBoundingClientRect();
    //     const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    //     const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    //
    //     clone.style.left = `${rect.left + scrollX}px`;
    //     clone.style.top = `${rect.top + scrollY}px`;
    //     clone.style.width = `${rect.width}px`;
    //     clone.style.height = `${rect.height}px`;
    // }
    //
    // if (!isTouchDevice && vieportWith > 768) {
    //     originalElements.forEach(element => {
    //         let clone = null;
    //
    //         const createClone = () => {
    //             // Создаём копию
    //             clone = element.cloneNode(true);
    //             clone.classList.add('element-copy');
    //             document.body.appendChild(clone);
    //
    //             // Позиционируем
    //             updateClonePosition(element, clone);
    //
    //             // Обработчики для клона
    //             clone.addEventListener('mouseleave', removeClone);
    //             window.addEventListener('scroll', scrollHandler);
    //         };
    //
    //         const removeClone = () => {
    //             if (clone) {
    //                 clone.removeEventListener('mouseleave', removeClone);
    //                 clone.remove();
    //                 clone = null;
    //                 window.removeEventListener('scroll', scrollHandler);
    //             }
    //         };
    //
    //         const scrollHandler = () => {
    //             if (clone) updateClonePosition(element, clone);
    //         };
    //
    //         // Оригинальные обработчики
    //         element.addEventListener('mouseenter', createClone);
    //         element.addEventListener('mouseleave', function(e) {
    //             // Проверяем, перешёл ли курсор на клон
    //             if (!clone || !clone.contains(e.relatedTarget)) {
    //                 removeClone();
    //             }
    //         });
    //     });
    // }


    const originalElements = document.querySelectorAll('.your-original-class');
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const viewportWidth = window.innerWidth;

    function updateClonePosition(original, clone) {
        const rect = original.getBoundingClientRect();
        const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        clone.style.left = `${rect.left + scrollX}px`;
        clone.style.top = `${rect.top + scrollY}px`;
        clone.style.width = `${rect.width}px`;
        clone.style.height = `${rect.height}px`;
    }

    if (!isTouchDevice && viewportWidth > 768) {
        // Увеличиваем z-index кнопок Swiper
        const swiperButtons = document.querySelectorAll('.swiper-button-prev, .swiper-button-next');
        swiperButtons.forEach(button => {
            button.style.zIndex = '1000';
        });

        originalElements.forEach(element => {
            let clone = null;

            const createClone = () => {
                // Создаём копию с пониженным z-index
                clone = element.cloneNode(true);
                clone.classList.add('element-copy');
                clone.style.zIndex = '100'; // Ниже чем у кнопок Swiper
                document.body.appendChild(clone);

                // Позиционируем
                updateClonePosition(element, clone);

                // Обработчики для клона
                clone.addEventListener('mouseleave', removeClone);
                window.addEventListener('scroll', scrollHandler);
            };

            const removeClone = () => {
                if (clone) {
                    clone.removeEventListener('mouseleave', removeClone);
                    clone.remove();
                    clone = null;
                    window.removeEventListener('scroll', scrollHandler);
                }
            };

            const scrollHandler = () => {
                if (clone) updateClonePosition(element, clone);
            };

            // Оригинальные обработчики
            element.addEventListener('mouseenter', createClone);
            element.addEventListener('mouseleave', function(e) {
                if (!clone || !clone.contains(e.relatedTarget)) {
                    removeClone();
                }
            });
        });
    }

    //тень под хедер
    const header = document.querySelector('header');
    const shadow = document.querySelector('.header-shadow');

    function updateShadowPosition() {
        const headerHeight = header.offsetHeight;
        const shadowHeight = shadow.offsetHeight;
        shadow.style.top = `${headerHeight - shadowHeight}px`;
    }

    // Первоначальная установка
        updateShadowPosition();

    // Если шапка может менять размер (например, при ресайзе)
        window.addEventListener('resize', updateShadowPosition);

    // Если контент шапки динамический (например, загрузка данных)
        new MutationObserver(updateShadowPosition).observe(header, {
            childList: true,
            subtree: true,
        });
    //конец тень под хедер
});
