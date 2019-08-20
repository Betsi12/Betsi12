// Para que el nav aparezca después del inicio
let nav = document.querySelector('nav'); // Identify target
let ul = document.getElementsByClassName('href');

window.addEventListener('scroll', function(event) { 
    event.preventDefault();
    if (window.scrollY <= 500) { 
        nav.style.zIndex=-10000; 
        nav.style.backgroundColor = '#212F3C;';
        nav.style.borderBottom='solid 4px #EE6E73';              
    } else {
        nav.style.borderBottom='solid 4px #EE6E73';  
        nav.style.zIndex=10000;
    }

});

// Desplegar el nav en modo celular

    
   $(document).ready(function(){
      $('.sidenav').sidenav(); 
   });



ScrollReveal().reveal('.effect-project')

var options = {
    animateThreshold: 100,
    scrollPollInterval: 20
}
$('.aniview').AniView(options);