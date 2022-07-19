let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let messageEL=document.getElementById("messageEL")
let sumEL=document.getElementById("sumEL") //let sumEL=document.querySelector("#sumEL") 
let cardsEL=document.getElementById("cardsEL")
/*
let player={
    name:"Qurban",
    chips:69
}

let playerEL=document.getElementById("playerEL")
playerEL.textContent=player.name+": $"+
*/
function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13+1)

    if(randomNumber===1){
        return 11
    }else if(randomNumber>10){
        return 10
    }else{
        return randomNumber
    }
}

function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}

function renderGame(){
    cardsEL.textContent="Cards: "

    for(let i=0;i<cards.length;i++){
        cardsEL.textContent+=cards[i]+" "

    }

    sumEL.textContent="Sum: "+sum
    
    if(sum<=20){
        message="Do you want to draw a new card?"
    }else if(sum===21){
        message="Blackjack!"
        hasBlackJack=true
    }else{
        message="You are out of the game!"
        isAlive=false
    }

    messageEL.textContent=message
}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }
}