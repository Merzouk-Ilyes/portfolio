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
showMenu('nav_toggle','nav_menu');

/*===== REMOVE MENU MOBILE =====*/
const nav_link=document.querySelectorAll(".nav_link");
function linkAction(){
    const navMenu=document.getElementById("nav_menu");
    navMenu.classList.remove("show-menu");
}
nav_link.forEach(n => n.addEventListener('click' , linkAction()))


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections=document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY=window.pageYOffset;
    sections.forEach(current => {
        const sectionheight=current.offsetHeight;
        const sectiontop=current.offsetTop- 50 ;
        sectionId = current.getAttribute('id');
        if(scrollY > sectiontop && scrollY <= sectiontop + sectionheight ){
            document.querySelector('.nav_menu a[href=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav_menu a[href=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll' , scrollActive)

/*===== CHANGE BACKGROUND HEADER =====*/ 
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll-header');
    else  header.classList.remove('scroll-header');
}
window.addEventListener('scroll' ,scrollHeader);

/*===== SHOW SCROLL TOP =====*/ 


/*===== MIXITUP FILTER PORTFOLIO =====*/ 

/* Link active portfolio */ 


/*===== SWIPER CAROUSEL =====*/ 


/*===== GSAP ANIMATION =====*/