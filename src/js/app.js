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
    spaceBetween: 20,
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

});
