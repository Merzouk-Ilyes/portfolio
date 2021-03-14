/*===== SHOW MENU =====*/
const showMenu= (toggleId,navId) => {
    const toggle =document.getElementById(toggleId) ,
    nav =document.getElementById(navId);
    if (nav && toggle) {
        toggle.addEventListener('click' , ()=> {
            nav.classList.toggle('show-menu');
        })
    }
}
showMenu('nav_toggle','nav-menu');

/*===== REMOVE MENU MOBILE =====*/
const nav_link=document.querySelectorAll(".nav_link");
function linkAction(){
    const navMenu=document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}
nav_link.forEach(n => n.addEventListener('click' , linkAction()))


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
// const sections=document.querySelectorAll('section[id]')
// function scrollActive(){
//     const scrollY=window.pageYOffset
//     sections.forEach(current => {
//         console.log(current)
//         const sectionheight=current.offsetHeight;
//         const sectiontop=current.offsetTop - 50 ;
//         sectionId = current.getAttribute('id');
//         console.log(sectionId);
//         if(scrollY > sectiontop && scrollY <= sectiontop + sectionheight ){
//             document.querySelector('.nav_menu a[href=' + sectionId + ']').classList.add('active-link');
//         } else {
//             document.querySelector('.nav_menu a[href=' + sectionId + ']').classList.remove('active-link');
//         }
//     })
// }
// window.addEventListener('scroll' , scrollActive);

/*===== CHANGE BACKGROUND HEADER =====*/ 
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll-header');
    else  header.classList.remove('scroll-header');
}
window.addEventListener('scroll' ,scrollHeader);

/*===== SHOW SCROLL TOP =====*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else  scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll' ,scrollTop);

/*===== MIXITUP FILTER PORTFOLIO =====*/ 
const mixer = mixitup(".portfolio__container", {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
});
/* Link active portfolio */ 
const linkportfolio = document.querySelectorAll('.portfolio__item')
function activeportfolio(){
    if(linkportfolio){
        linkportfolio.forEach(l => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')

    }
}
linkportfolio.forEach(l => l.addEventListener('click' , activeportfolio))

/*===== SWIPER CAROUSEL =====*/ 


/*===== GSAP ANIMATION =====*/