(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global = global || self, global.common = factory());
}(this, function () {
    'use strict';
    var CGlobal = {
    };
    var common = {
        scrollTop: function () {
            var scrollToTopPage = $('.scrollup');
            if (!scrollToTopPage.length) return;
            scrollToTopPage.hide();
            $(window).scroll(function () {
                if ($(this).scrollTop() > 220) {
                    scrollToTopPage.fadeIn();

                } else {
                    scrollToTopPage.fadeOut();
                }
                scrollToTopPage.off('click').on('click', function () {
                    $('html, body').animate({ scrollTop: 0 }, 500);
                });
            });
        },
        slideBanner: function () {
            $('#slide-banner').slick({
                dots: false,
                loop: true,
                infinite: true,
                speed: 500,
                autoplay: true,
                cssEase: 'linear',
                autoplaySpeed: 2500,
                prevArrow: false,
                nextArrow: false,
                fade: true,
            });
        },
        mMenu: function () {
            $('#menuClick').click(function () {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $('.header').removeClass('show-m_menu');
                }
                else {
                    $(this).addClass('active');
                    $('.header').addClass('show-m_menu');
                }
                $('.m_menu').slideToggle("fast", function () { });
            })
        },
    }
    /**
     * Define events for all screens
     *
     * @return void
     */
    var buildEvents = {

        /**
         * Build events according to the screen
         *
         * @return void
         */
        _buildEvents: function () {
            var evs = [
                //[$(CGlobal.elemReadMore).find('a'), {click: self.onLoadMoreNews}]
            ];
            Libs.buildEvents._attachEvents(evs);
        }
    }
    var self = common;
    jQuery(document).ready(function () {
        self.scrollTop();
        self.slideBanner();
        self.mMenu();
    });
    /* Export: */
    return common;
}));

/* Good Game Modal */

document.addEventListener('DOMContentLoaded', () => {
    const openModalLinks = document.querySelectorAll('[data-modal-target]')
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay')

    openModalLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const modal = document.querySelector(link.dataset.modalTarget)
            openModal(modal)
        })
    })

    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
            closeModal(modal)
        })
    })

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal')
            closeModal(modal)
        })
    })
    
    function openModal(modal) {
        if (modal == null) return
        modal.classList.add('active')
        overlay.classList.add('active')
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        if (modal == null) return
        modal.classList.remove('active')
        overlay.classList.remove('active')
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
    }

})


