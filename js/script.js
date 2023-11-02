// nav-fiexd start
let navMenu=document.querySelector('.nav_menu');
window.addEventListener('scroll',()=>{
    let scrolling=this.scrollY;
    if(scrolling > 160){
        navMenu.classList.add('fiexd_menu');
    }
    else{
        navMenu.classList.remove('fiexd_menu');
    }
})

// aos animation start
AOS.init();

// counter start 
$('.count').counterUp({
    delay: 10,
    time: 2000
});

// testimonial cards slider start
$('.testimonial_cards').slick({
    dots: true,
    autoplay:true,
    speed: 1000,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });