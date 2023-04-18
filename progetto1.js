// attende che il DOM sia pronto prima di eseguire main()
// document.addEventListener("DOMContentLoaded", function (event) {
//     main()
// });
$(document).ready(function () {
    main()
})

let btnBurger   // global

function main() {

    btnBurger = $("#btnBurger")
    btnBurger.click(btnBurgerClick)
    const header = $('.header');
    const divider = $('.divider')
    const headerMenuBottom = $('.header-menu-bottom')
    const topbar = $('.topbar')
    const main = document.querySelector('.main')

    main.addEventListener('scroll', () => {

        // blocca lo scrolling quando la div di destra raggiunge il top dello schermo
        const headerTop = main.scrollTop

        if (headerTop > 34) {
            divider.hide()
            topbar.hide()
            headerMenuBottom.hide()
        }
        else {
            topbar.show()
            divider.show()
            headerMenuBottom.show()
        }
    });
}

function btnBurgerClick() {
    document.getElementById("menu-window").classList.toggle("hidden")
}

function btnCountryClick() {
    $(".dropText").toggleClass("hidden")
}

function countryClick(imgUrl, name) {
    $("#flag").attr("src", imgUrl)
    $("#flagName").text(name)
    $(".dropText").toggleClass("hidden")

    return false
}