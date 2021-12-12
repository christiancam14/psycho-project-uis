addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if(btn_menu) {
        btn_menu.addEventListener('click', () => {
            const main_item = document.querySelector('.main-nav')
            main_item.classList.toggle('show')
        })
    }
})