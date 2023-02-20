const openMenu = document.getElementById('openMenu')
const closeMenu = document.getElementById('closeMenu')
const menu = document.getElementById('menu')
const bg = document.getElementById('bg')

openMenu.addEventListener('click', () => {
    openMenu.classList.add('hidden')
    closeMenu.classList.remove('hidden')
    bg.classList.remove('hidden')
    menu.classList.remove('hidden')
})

closeMenu.addEventListener('click', () => {
    close()
})

bg.addEventListener('click', () => {
    close()
})

function close() {
    openMenu.classList.remove('hidden')
    closeMenu.classList.add('hidden')
    bg.classList.add('hidden')
    menu.classList.add('hidden')
}
