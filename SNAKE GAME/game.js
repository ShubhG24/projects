import { update as updatesnake, draw as drawsnake, SNAKE_SPEED, getsnakehead, snakeintersection } from './snake.js'
import { update as updatefood, draw as drawfood } from './food.js'
import { outsidegrid } from './grid.js'

const gameboard = document.getElementById('game-board')
let lastrendertime = 0
let gameOver = false

function main(currentTime) {

    if (gameOver) {
        if (confirm('GAME OVER, Press OK to restart.')) {
            window.location = '/'
        }
        return
    }
    window.requestAnimationFrame(main)
    const secondsseincelastrender = (currentTime - lastrendertime) / 1000
    if (secondsseincelastrender < 1 / SNAKE_SPEED) return
    lastrendertime = currentTime
    update()
    draw()
}

window.requestAnimationFrame(main) // game loop

function update() {
    updatesnake()
    updatefood()
    checkDeath()

}

function draw() {
    gameboard.innerHTML = ''
    drawsnake(gameboard)
    drawfood(gameboard)

}

function checkDeath() {
    gameOver = outsidegrid(getsnakehead()) || snakeintersection()
}