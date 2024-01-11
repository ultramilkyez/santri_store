(function ($) {

  "use strict";

  $(document).ready(function () {




    $('.navbar').on('click', '.search-toggle', function (e) {
      var selector = $(this).data('selector');

      $(selector).toggleClass('show').find('.search-input').focus();
      $(this).toggleClass('active');

      e.preventDefault();
    });


    // close when click off of container
    $(document).on('click touchstart', function (e) {
      if (!$(e.target).is('.search-toggle, .search-toggle *, .navbar, .navbar *')) {
        $('.search-toggle').removeClass('active');
        $('.navbar').removeClass('show');
      }
    });

    // Responsive Navigation with Button
    var initHamburgerMenu = function () {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".menu-list");

      hamburger.addEventListener("click", mobileMenu);

      function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("responsive");
      }

      const navLink = document.querySelectorAll(".nav-link");

      navLink.forEach(n => n.addEventListener("click", closeMenu));

      function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("responsive");
      }
    };

    //quantity in product
    var initquantity = function () {
      const incrementButton = document.querySelector('.incriment-button');
      const decrementButton = document.querySelector('.decriment-button');
      const inputField = document.querySelector('.spin-number-output');

      // Add event listener to increment button
      incrementButton.addEventListener('click', () => {
        let currentValue = parseInt(inputField.value);
        inputField.value = currentValue + 1;
      });

      // Add event listener to decrement button
      decrementButton.addEventListener('click', () => {
        let currentValue = parseInt(inputField.value);
        if (currentValue > 0) {
          inputField.value = currentValue - 1;
        }
      });
    };



    $('.video-player>a').magnificPopup({
      type: 'iframe'
    });


    // init jarallax parallax
    var initJarallax = function () {
      jarallax(document.querySelectorAll(".jarallax"));

      jarallax(document.querySelectorAll(".jarallax-img"), {
        keepImg: true,
      });
    }


    // init Chocolat light box
    var initChocolat = function () {
      Chocolat(document.querySelectorAll('.image-link'), {
        imageSize: 'contain',
        loop: true,
      });
    };


    // Payment method
    $('input[type="radio"]').click(function () {
      var inputValue = $(this).attr("value");
      var targetBox = $("." + inputValue);
      $(".payment-box").not(targetBox).hide();
      $(targetBox).show();
    });


    // document ready
    $(document).ready(function () {




      var swiper = new Swiper(".main-swiper", {
        speed: 1500,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },


        navigation: {
          nextEl: ".swiper-arrow-next",
          prevEl: ".swiper-arrow-prev",
        },
        pagination: {
          el: ".swiper-pagination1",
          clickable: true,
        },
      });

      var swiper = new Swiper(".product-swiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          599: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          1599: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        },
      });

      var swiper = new Swiper(".testimonial-swiper", {
        loop: true,
        navigation: {
          nextEl: ".icon-arrow.icon-arrow-right",
          prevEl: ".icon-arrow.icon-arrow-left",
        },
        pagination: {
          el: "#testimonials .swiper-pagination",
          clickable: true,
        },
      });

      var swiper = new Swiper(".thumb-swiper", {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      var swiper2 = new Swiper(".large-swiper", {
        spaceBetween: 10,
        effect: 'fade',
        thumbs: {
          swiper: swiper,
        },
      });


      initHamburgerMenu();
      initChocolat();
      initJarallax();
      initquantity();




    });

  }); // End of a document

})(jQuery);