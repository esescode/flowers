$(document).ready(function () {
    const flowersSlider = new Swiper('.flowers-slider', {
        // Параметры слайдера
        loop: true,
        slidesPerView: 6,

        // Стрелки 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        //адаптив 
        breakpoints: {
            // есдли окно >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // есдли окно >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // есдли окно >= 576px
            576: {
                slidesPerView: 4,
            },
            // есдли окно >= 576px
            992: {
                slidesPerView: 6,
            }
        }
    });

    const reviewsSlider = new Swiper('.reviews-slider', {
        // Параметры слайдера
        loop: true,
        slidesPerView: 1,

        // Стрелки 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    $("#review-1").on('click', function() {

  $.fancybox.open([
    {
      src  : 'https://images.unsplash.com/photo-1455758797458-c867ae8570fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      opts : {
        caption : 'Букет-вестник разлуки',
        thumb   : 'https://images.unsplash.com/photo-1455758797458-c867ae8570fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
      }
    },
    {
      src  : 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
      opts : {
        caption : 'Непропагандирующий букет',
        thumb   : 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
      }
    },
      {
      src  : 'https://images.unsplash.com/photo-1598934475092-5335ca915c06?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      opts : {
        caption : 'Блэк лайвс меттер',
        thumb   : 'https://images.unsplash.com/photo-1598934475092-5335ca915c06?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});
});
