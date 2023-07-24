/*===== SHOW MENU =====*/
const showMenu= (toggleId,navId) =>{
    const toggle=document.getElementById(toggleId),
    nav =document.getElementById(navId)


    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')





/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n =>n.addEventListener('click',linkAction))




/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections =document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY=window.pageYOFFset

     sections.forEach(current =>{
   const sectionHeight = current.offsetHeight
   const sectionTop = current.offsetTop - 50
   sectionId = current.getAttribute('id')

   if(scrollY>sectionTop && scrollY<= sectionTop + sectionHeight){

    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')

   }else{
    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
   }

     })


}
window.addEventListener('scroll',scrollActive)
/*===== CHANGE BACKGROUND HEADER =====*/ 
function scrollHeader(){
    const header =document.getElementById('header')
    if(this.scrollY >=200) header.classList('scroll-header'); 
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll' , scrollHeader)

/*===== SHOW SCROLL TOP =====*/ 
function scrollTop(){
    const scrollTop =document.getElementById('scroll-top')
    if(this.scrollY >=560) scrollTop.classList.add('show-scroll'); 
    else scrollTop.classList.remove('scroll-header')
}
window.addEventListener('scroll' , scrollTop)


/*===== SHOW SCROLL TOP =====*/ 


 


/*===== SWIPER CAROUSEL =====*/ 
const swiper = new Swiper('.testimonial__container', {
  spaceBetween:16,
  loop: true,
  grabCursor:true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
  breakpoints:{
    640:{
      slidesPerview:2,
    },
    1024:{
      slidesPerview:3,
    }
  }
});

/*===== GSAP ANIMATION =====*/ 
WebGLSampler.from('home__img',{opacity:0, duration:2, delay:.5,x:60})
WebGLSampler.from('home__data',{opacity:0, duration:2, delay:.5,x:60})

