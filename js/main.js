//Бургер
const burger = document.getElementById('burger')
const nav = document.getElementById('nav')

burger.addEventListener('click', function() {
nav.classList.toggle('nav--active')
burger.classList.toggle('burger--active')
document.body.classList.toggle('stop-scroll')
})


// Модальное окно

const callFormBtn = document.getElementById('call-form')
const modalCallForm = document.getElementById('modal-call-form')

// Открытие модального окна
callFormBtn.addEventListener('click', function() {
    modalCallForm.classList.add('modal-parent--open')
})

// Закрытие модального окна

modalCallForm.querySelector(".modal").addEventListener("click", function (event) {
    event._isClick = true
})
modalCallForm.addEventListener("click", function (event) {
    if (event._isClick === true) return
    modalCallForm.classList.remove("modal-parent--open")
})

// Закрытие при нажатий на ESC

window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        modalCallForm.classList.remove("modal-parent--open")
    }
})

// Галерея
const swiper = new Swiper("#gallery", {
    loop:true,
    //Сколько слайдов хотим видеть
    slidesPerView: 3,
    //Отступы между слайдами
    spaceBetween: 20,

    navigation: {
        prevEl: "#press-left",
        nextEl: "#press-right"
    }
})