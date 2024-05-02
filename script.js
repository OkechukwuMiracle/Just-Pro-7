const hamburger1 = document.querySelector ('.item-list')
const hamburger2 = document.querySelector ('.close-list')
const menu = document.querySelector ('.menu')

hamburger1.addEventListener('click', ()=> {
    hamburger1.classList.add('invisible')  
    hamburger2.classList.add('visible')
    menu.classList.toggle('visible')
})

hamburger2.addEventListener('click', ()=> {
    hamburger1.classList.remove('invisible')
    hamburger2.classList.remove('visible')
    menu.classList.toggle('visible')
} )
