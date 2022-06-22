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
    let currentPage = window.location.href
    let menuItems = document.querySelectorAll('nav a')
    menuItems.forEach(item => {
      let aHref = item.href
      if(aHref == currentPage) {
        item.classList.add('active')
      }
    });
  }
}

init();