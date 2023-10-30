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
