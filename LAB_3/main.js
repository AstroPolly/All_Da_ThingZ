const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");

function toggleMenuVisibility() {
    menuList.classList.toggle("hide");
}

menuBtn.addEventListener("click", toggleMenuVisibility);

const portfolioBtn = document.querySelector(".portfolio__btn");
const portfolioContainer = document.querySelector(".portfolio__container");
const portfolioBtnText = document.getElementById("portfolio__btn__text")

let isPortfolioOpened;

function togglePortfolioVisibility() {
    if (isPortfolioOpened) {
        portfolioBtnText.textContent = 'Открыть портфолио'
        isPortfolioOpened = false
    } else {
        portfolioBtnText.textContent = 'Закрыть портфолио'
        isPortfolioOpened = true
    }

    portfolioContainer.classList.toggle("hide");
}

portfolioBtn.addEventListener("click", togglePortfolioVisibility);
