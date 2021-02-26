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


/*===== SCROLL SECTIONS ACTIVE LINK =====*/


/*===== CHANGE BACKGROUND HEADER =====*/ 


/*===== SHOW SCROLL TOP =====*/ 


/*===== MIXITUP FILTER PORTFOLIO =====*/ 

/* Link active portfolio */ 


/*===== SWIPER CAROUSEL =====*/ 


/*===== GSAP ANIMATION =====*/