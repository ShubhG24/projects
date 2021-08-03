import { expandSnake, onSnake } from './snake.js'
import { randomGridposition } from './grid.js'


let food = getrandomfoodposition()
const EXPANSION_RATE = 3


export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getrandomfoodposition()
    }
}

export function draw(gameboard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameboard.appendChild(foodElement)
}


function getrandomfoodposition() {
    let newfoodposition
    while (newfoodposition == null || onSnake(newfoodposition)) {
        newfoodposition = randomGridposition()
    }
    return newfoodposition
}