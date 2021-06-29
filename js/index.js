const message = document.getElementById("message-el")
const cardsEl = document.getElementById("cards-el")
const sumEl = document.getElementById("sum-el")

const startBtn = document.getElementById("start-btn")
const cardBtn = document.getElementById("card-btn")

let firstCard = 0
let secondCard = 0
let myCards = []
let newCard = 0
let cards = ""
let sum = 0

startBtn.addEventListener("click", function() {
    firstCard = Math.floor(Math.random()*10) + 2
    secondCard = Math.floor(Math.random()*10) + 2
    myCards = []
    myCards.push(firstCard)
    myCards.push(secondCard)
    render()
})

cardBtn.addEventListener("click", function() {
    newCard = Math.floor(Math.random()*10) + 2
    if(firstCard != 0 && sum < 21){
        myCards.push(newCard)
        render()
    }
})

function render() {
    cards = ""
    cardsEl.textContent = "Cards: "
    sum = 0
    sumEl.textContent = "Sum: "
    for(i=0; i<myCards.length; i++){
        cards += ` ${myCards[i]}`
        sum += myCards[i]
    }
    cardsEl.textContent += cards
    sumEl.textContent += ` ${sum}`
    
    if(sum < 21) {
        message.textContent = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message.textContent = "You've got Blackjack!"
    }
    else message.textContent = "You're out of the game!"
}