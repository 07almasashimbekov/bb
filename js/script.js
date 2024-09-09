
  const swiper_1 = new Swiper('.swiper_slider_company', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,

   breakpoints:{
            1:{
                slidesPerView:3,
            },
            576:{
                slidesPerView:3,
                autoplay:true,
                autoplaySpeed:1500,
            },
             781:{
                slidesPerView:4,
            },
            1201:{
                slidesPerView:4,
            },
                    },

    pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
    },
  });


// Arrival swiper
  const swiper_2 = new Swiper('.new_arrivals-slider-container .swiper-container', {
  slidesPerView: 4,
  slidesPerGroup:1,
  loop: true,

   breakpoints:{
            1:{
                slidesPerView:1,
            },
            576:{
                slidesPerView:2,
            },
             781:{
                slidesPerView:3,
            },
            980:{
                slidesPerView:3,
            },
            1201:{
                slidesPerView:4,
            },
                },

  // Navigation arrows
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
});

// Home Swiper
  const swiper_3 = new Swiper('.home_swiper_slider', {
    direction: 'horizontal',
    loop: true,
    effect:'fade',

    fadeEffect:{
    crossFade:true,
    },

    pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
    },
  });



// Catalog Swiper
    const  swiper_4 = new Swiper('.catalog_pages-item-swiper-slider',{
    loop:true,
    effect:'fade',
    effectFade:{
        crossFade:true,
    },

     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    thumbs: {
        swiper: {
        el: '.catalog_pages-item-mini-slider',
        slidesPerView: 4,
        spaceBetween: 16,
        breakpoints:{
            1:{
                slidesPerView:2,
            },
            576:{
                slidesPerView:3,
            },
             781:{
                slidesPerView:2,
            },
            991:{
                slidesPerView:3,
            },
            1201:{
                slidesPerView:4,
            },
                    },
            
                }
            },
});


// Blog Swiper
const swiper_5 = new Swiper('.blog_slider_swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.blog_slider_swiper .swiper-button-next',
    prevEl: '.blog_slider_swiper .swiper-button-prev',
  },
});



// Fixed Header
	window.onscroll = function showHeader() {
		var navbar = document.querySelector('.navbar');

		if (window.pageYOffset > 50){
			navbar.classList.add('navbar_fixed');
		}
		if (window.pageYOffset < 100) {
			navbar.classList.remove('navbar_fixed');
		}
	}

// select

for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
    dropdown.addEventListener('click', function() {
        this.querySelector('.custom-select').classList.toggle('open');
    })
}

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').innerHTML = this.innerHTML;
        }
    })
}

window.addEventListener('click', function(e) {
    for (const select of document.querySelectorAll('.custom-select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});


// Swiper About Us 
  const swiper = new Swiper('.swiper_slider_about_us', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// AOS animation
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// accardion
$(document).ready(function () {
  $('.accordionItemHeading').click(function(event){
    if ($('.FAQ_content_main').hasClass('accordion')) {
      $('.accordionItemHeading').not($(this)).removeClass('active');
      $('.accordionItemContent').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});



/* burger*/
const burgerMenu = document.querySelector('.nav__burger'); //выбрать где именно нарисован бургер и скрыт.
const menuList = document.querySelector('.nav_list_burger'); //родительский элемент листа меню
// let body = document.querySelector('body'); //это просто body для фиксации
const links = document.querySelectorAll('navbar_link-item'); // ссылки меню
const mobileBlur =document.querySelector('.mobile_blur');
const navClose =document.querySelector('.nav__close');

burgerMenu.onclick = function showBurger() {
    this.classList.toggle('activeBurger');
    menuList.classList.add('activeBurger');
    body.classList.toggle('lockScroll');
    mobileBlur.style.display='block';
}

navClose.onclick = function hideMenu() {
    burgerMenu.classList.toggle('activeBurger');
    menuList.classList.remove('activeBurger');
    body.classList.remove('lockScroll');
    mobileBlur.style.display='none';
}


// Tabs
const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');
const projectTabsItem = document.querySelectorAll('.projects-done-year-item');

for ( let i = 0; i < projectTabsItem.length; i++){
    projectTabsItem[i].addEventListener('click', function () {
        for ( let i = 0; i < contentBoxes.length; i++ ){
            contentBoxes[i].classList.add('hidden');
        };
        
        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox?.classList.remove('hidden');

        for (let i = 0; i < projectTabsItem.length; i++ ) {
            projectTabsItem[i].classList.remove('active');
        }
        projectTabsItem[i].classList.add('active');
    });
};

// Modal window
let chatBtn = document.querySelector('.add_cart');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.close');
let continueModal = document.querySelector('.continue');
let body = document.querySelector('body'); 

chatBtn.onclick = function() {
    modal.classList.add('active');
    body.classList.toggle('lockScroll');
}
closeModal.onclick = () => {
    modal.classList.remove('active');
    body.classList.remove('lockScroll');
}
continueModal.onclick = () => {
    modal.classList.remove('active');
    body.classList.remove('lockScroll');
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove('active');
        body.classList.remove('lockScroll');
    }
}














