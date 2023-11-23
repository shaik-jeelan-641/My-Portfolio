// HEADER TOGGLE
let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// typing effect

let typed =new Typed('.auto-input',{
    strings: [ 'Core java !', 'Programming !', 'Front-End Developer !'],
    typeSpeed:150,
    backSpeed: 100,
    backDelay:2000,
    loop:true,

})

const toTop = document.querySelector(".toTop");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 100){
        toTop.classList.add("active");

    }else{
        toTop.classList.remove("active");
    }
}) 


