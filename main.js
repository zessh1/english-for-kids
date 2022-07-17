const burger_icon = document.querySelector(".burger-icon")
const burger_closed = document.querySelector(".closed");
const burger_menu = document.querySelector(".burger-menu");


burger_icon.addEventListener("click", function () {
    if (burger_menu.classList.contains(`closed`)) {
        burger_menu.classList.add("open");
        burger_menu.classList.remove("closed");
        overlay.classList.add("active")
    }
    else {
        burger_menu.classList.remove("open");
        burger_menu.classList.add("closed");
        overlay.classList.remove("active")
    }


})
overlay.addEventListener("click", function () {
    burger_menu.classList.remove("open");
    burger_menu.classList.add("closed");
    overlay.classList.remove("active")
})

