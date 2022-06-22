let nav = document.querySelector('nav')
let menuBtn = document.querySelector('.menuBtn'); 
let closeMenuBtn = document.querySelector('.close_btn'); 

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
}
  
function closeNav() {
    nav.classList.remove('open')
}