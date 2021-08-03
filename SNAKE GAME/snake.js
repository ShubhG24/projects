import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 20
const snakebody = [{ x: 11, y: 11 }]
let newSegments = 0
let count = 0
export function update() {
    addsegments()

    const inputDirection = getInputDirection()
    for (let i = snakebody.length - 2; i >= 0; i--) {
        snakebody[i + 1] = {...snakebody[i] }
    }

    snakebody[0].x += inputDirection.x
    snakebody[0].y += inputDirection.y
}

export function draw(gameboard) {
    snakebody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameboard.appendChild(snakeElement)
    })
}


export function expandSnake(amount) {
    newSegments += amount
    count++
}
export function onSnake(position, { ignorehead = false } = {}) {
    return snakebody.some((segment, index) => {
        if (ignorehead && index === 0) return false
        return equalPositions(segment, position)
    })
}

export function getsnakehead() {
    return snakebody[0]
}

export function snakeintersection() {
    return onSnake(snakebody[0], { ignorehead: true })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addsegments() {
    for (let i = 0; i < newSegments; i++) {
        snakebody.push({...snakebody[snakebody.length - 1] })
    }

    newSegments = 0
}