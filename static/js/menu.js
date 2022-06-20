let sideMenu = document.querySelector('.sideMenu')
let menuBtn = document.querySelector('.menuBtn'); 
let closeMenuBtn = document.querySelector('.closebtn'); 

menuBtn.addEventListener("click", () => {
    openNav();
});

closeMenuBtn.addEventListener("click", () => {
    closeNav();
});

menuBtn.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      menuBtn.click();
    }
  });

function openNav() {
    sideMenu.style.width = "250px";
    sideMenu.style.padding = "0px 0px 0px 0px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
  
function closeNav() {
    sideMenu.style.width = "0";
    sideMenu.style.padding = "0px";
    document.body.style.backgroundColor = "white";
}