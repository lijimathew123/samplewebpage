
// mobile nav
const mobileNav = document.querySelector(".mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const Mobilemenuitem = document.querySelectorAll(".mobile-nav .menu-item li");

menuIcon.addEventListener("click", ()=>{
    mobileNav.classList.toggle("active");
});

Mobilemenuitem.forEach( i =>{
    i.addEventListener("click",()=>{
        mobileNav.classList.remove("active");
    });
});




// desktop nav
const options ={
    threshold: 0.8,
};


const addActiveClass = (entries, observer) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting && entry.intersectionRatio >= 0.2){

        let currentActive = document.querySelector(".desktop-menu a.active");

        if(currentActive){
            currentActive.classList.remove("active");
        }

        let newActive = document.querySelector(
            `.desktop-menu a[href="#${entry.target.getAttribute("id")}"]`
        );

        newActive.classList.add("active");
        }
    });
};


const observer = new IntersectionObserver(addActiveClass,options);

const sections = document.querySelectorAll("section");

sections.forEach((section) =>{
    observer.observe(section);
});