function init() {
  //Go back
  const goBackLink = document.querySelector(".goBack")
  if(goBackLink){
      const historyGoBack = () => {
          window.history.back()
          goBackLink.removeEventListener("click", historyGoBack)
      }
      goBackLink.addEventListener("click", historyGoBack)

      goBackLink.addEventListener("keypress", function(event) {
        console.log("enter")
        if (event.key === "Enter") {
          event.preventDefault();
          goBackLink.click();
        }
      });
  }

  let nav = document.querySelector('nav')
  if(nav) {
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
        linksMenu.forEach(link => {
            link.tabIndex = -1;
        });
    }

    // Set active menu item
    let currentPage = window.location.href
    linksMenu.forEach(item => {
      let aHref = item.href
      if(aHref == currentPage) {
        item.classList.add('active')
      }
    });
  }
}

init();