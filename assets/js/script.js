let menuIcon = document.querySelector('.nav__menu i')
let navList = document.querySelector('.nav__list')
let header = document.querySelector('.header')
menuIcon.addEventListener('click',()=>{
  navList.classList.toggle('show')
  menuIcon.classList.toggle('fa-times');
})

window.addEventListener('scroll',()=>{
  if(window.scrollY > 0){
    header.classList.add('active')
    navList.classList.remove('show')
    menuIcon.classList.remove('fa-times');
  }
  else{
    header.classList.remove('active')
  }
})

// Login forms
let login = document.querySelector('.login')
let loginBtn = document.querySelector('.nav__login')
let closeIcon = document.querySelector('#close')
loginBtn.addEventListener('click',()=>{
  login.classList.toggle('show')
})

closeIcon.addEventListener('click',()=>{
  login.classList.toggle('show')
})

window.addEventListener('click',(e)=>{
  if(e.target == login ){
    login.classList.remove('show')
  }
})

// showcase parallax
let showcase = document.querySelector('.showcase')
let showParallax = document.querySelectorAll('.showcase-parallax')
showcase.addEventListener('mousemove',(e)=>{
   showParallax.forEach((elm)=>{
    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
   })
})
showcase.addEventListener('mouseleave',(e)=>{
    showParallax.forEach((elm)=>{
      elm.style.transform = `translateX(0px) translateY(0px)`;
    })
})

// vehicles
var swiper = new Swiper(".vehicles-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// featured
var swiper = new Swiper(".feature-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


// reviews
var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});