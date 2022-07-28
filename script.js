// Create variables for the game state
let player1Score = ''
let player2Score = ''
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice1 = document.getElementById("p1dice1")
const player1Dice2 = document.getElementById("p1dice2")
const player1Dice3 = document.getElementById("p1dice3")

const player2Dice1 = document.getElementById("p2dice1")
const player2Dice2 = document.getElementById("p2dice2")
const player2Dice3 = document.getElementById("p2dice3")

const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

/* Hook up a click event listener to the Roll Dice Button. */
rollBtn.addEventListener("click", function() {
    if (player1Turn) {
        player1Dice1.textContent = rollDie()
        player1Dice2.textContent = rollDie()
        player1Dice3.textContent = rollDie()
        if (player1Dice1.innerHTML === player1Dice2.innerHTML){
            player1Scoreboard.innerHTML = player1Dice3.innerHTML
            player1Turn = !player1Turn
        }
        if (player1Dice1.innerHTML === player1Dice3.innerHTML){
            player1Scoreboard.innerHTML = player1Dice2.innerHTML
            player1Turn = !player1Turn
        }
        if (player1Dice2.innerHTML === player1Dice3.innerHTML){
            player1Scoreboard.innerHTML = player1Dice1.innerHTML
            player1Turn = !player1Turn
        }
        if (player1Dice1.innerHTML === player1Dice2 === player1Dice3.innerHTML){
            player1Scoreboard.innerHTML = player1Dice1.innerHTML
            message.textContent = "Player 1 Won"
            showResetButton()
        }
        message.textContent = "Player 2 Turn"

    } else {
        player2Dice1.textContent = rollDie()
        player2Dice2.textContent = rollDie()
        player2Dice3.textContent = rollDie()
        if (player2Dice1.innerHTML === player2Dice2.innerHTML){
            player2Scoreboard.innerHTML = player2Dice3.innerHTML
            if (player1Scoreboard.innerHTML > player2Scoreboard.innerHTML ){
                message.textContent = "Player 1 Won 🥳"
                showResetButton()
            }
            if (player1Scoreboard.innerHTML < player2Scoreboard.innerHTML ){
                message.textContent = "Player 2 Won 🎉"
                showResetButton()
            }
            if (player2Dice1.innerHTML === player2Dice2 === player2Dice3.innerHTML){
                player2Scoreboard.innerHTML = player1Dice1.innerHTML
                message.textContent = "Player 2 Won"
                showResetButton()
            }
            if (player1Scoreboard.innerHTML === player2Scoreboard.innerHTML ){
                message.textContent = "*Its a tie!"
                showResetButton()
            }
        }
        if (player2Dice1.innerHTML === player2Dice3.innerHTML){
            player2Scoreboard.innerHTML = player2Dice2.innerHTML
            if (player1Scoreboard.innerHTML > player2Scoreboard.innerHTML ){
                message.textContent = "Player 1 Won 🥳"
                showResetButton()
            }
            if (player1Scoreboard.innerHTML < player2Scoreboard.innerHTML ){
                message.textContent = "Player 2 Won 🎉"
                showResetButton()
            }
            if (player1Scoreboard.innerHTML === player2Scoreboard.innerHTML ){
                message.textContent = "Its a tie!"
                showResetButton()
            }
        }
        if (player2Dice2.innerHTML === player2Dice3.innerHTML){
            player2Scoreboard.innerHTML = player2Dice1.innerHTML
            if (player1Scoreboard.innerHTML > player2Scoreboard.innerHTML ){
                message.textContent = "Player 1 Won 🥳"
                showResetButton()
            }
            if (player1Scoreboard.innerHTML < player2Scoreboard.innerHTML ){
                message.textContent = "Player 2 Won 🎉"
                showResetButton()
            }
            if (player1Scoreboard.innerHTML === player2Scoreboard.innerHTML ){
                message.textContent = "*Its a tie!"
                showResetButton()
            }
        }
    }
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice1.textContent = "-"
    player1Dice2.textContent = "-"
    player1Dice3.textContent = "-" 
    player2Dice1.textContent = "-"
    player2Dice2.textContent = "-"
    player2Dice3.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
}

function rollDie(){
    const randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber
}