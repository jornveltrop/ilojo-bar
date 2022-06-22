let nav = document.querySelector('nav')
let menuBtn = document.querySelector('.menuBtn'); 
let closeMenuBtn = document.querySelector('.close_btn'); 
let linksMenu = document.querySelectorAll('nav li a')

menuBtn.addEventListener("click", () => {
    openNav();
});

closeMenuBtn.addEventListener("click", () => {
    closeNav();
});

menuBtn.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      openNav()
    }
  });

function openNav() {
    nav.classList.add('open')
    closeMenuBtn.tabIndex = 0;
    linksMenu.forEach(link => {
        link.tabIndex = 0;
    });
}
  
function closeNav() {
    nav.classList.remove('open')
    closeMenuBtn.tabIndex = -1;
    arlinksMenuray.forEach(link => {
        link.tabIndex = -1;
    });
}