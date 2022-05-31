let buttonoHomePage;

function init() {
    buttonoHomePage = document.getElementById("buttonHomePage");
    buttonoHomePage.addEventListener("click", goToNav);
}

init();

function goToNav(){
    window.location.href += "discover";
}