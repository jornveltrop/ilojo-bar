function init() {
    const goBackLink = document.querySelector(".goBack")
    if(goBackLink){
        const historyGoBack = () => {
            window.history.back()
            goBackLink.removeEventListener("click", historyGoBack)
        }
        goBackLink.addEventListener("click", historyGoBack)
    }
}

init();
