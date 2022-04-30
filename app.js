const plus = document.querySelector('.add')
const reset = document.querySelector('.reset')
const mines = document.querySelector('.mines')
const zero = document.querySelector('span')

plus.addEventListener('click', addcount)
reset.addEventListener('click', resets)
mines.addEventListener('click', minescount)



function addcount(e){
    zero.textContent++
}

function resets(e){
    zero.textContent = 0
}

function minescount(e){
    zero.textContent--
}