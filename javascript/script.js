document.addEventListener("scroll", function () {
    const navbar = document.querySelector('.nav-bar');
    const navbar_h1 = document.querySelector('.nav-left-h1');
    const navbar_ul = document.querySelectorAll('.nav-link-list-li');
    const navbarHeight = 81;
    const distanceFromTop = Math.abs(
        document.body.getBoundingClientRect().top
    );
    if (distanceFromTop > navbarHeight) {
        if (!navbar.classList.contains('nav-color')) {
            navbar.classList.add('nav-color');
        }
        navbar_h1.style.color = 'black';
        if(navbar_ul){
            for(let i=0 ; i<navbar_ul.length ; i++){
                navbar_ul[i].style.color = 'Black';
            }
        }
    }   
    else {
        if (navbar.classList.contains('nav-color')) {
            navbar.classList.remove('nav-color');
        }
        navbar_h1.style.color = 'white';

        if(navbar_ul){
            for(let i=0 ; i<navbar_ul.length ; i++){
                navbar_ul[i].style.color = 'White';
            }
        }
    }
});