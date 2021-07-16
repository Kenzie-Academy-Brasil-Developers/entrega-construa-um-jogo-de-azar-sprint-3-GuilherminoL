const quitPopup = document.getElementById('closelogo')
quitPopup.addEventListener('click',function(){

    const background = document.getElementById('logo-background')
    const container = document.getElementById('content')
    const body = document.getElementsByTagName('body')
    const backgroundAnimation = document.querySelector('.logo-image')

    body[0].classList.add('body-newcolor')
    container.classList.add('content--visible')
    backgroundAnimation.classList.add("logo--hidden")

    quitPopup.style.display ='none'
    setTimeout(function() {
        body[0].style.background = '#1b2f33'
        container.style.opacity = '100%'

    },3000)

    setTimeout(function() {
        background.style.display = 'none'
    },2000)
})

const startGame = document.getElementById('button-start-game')
startGame.addEventListener('click', function(){
    document.getElementsByClassName('game-section')[0].classList.remove('hidden')
    startGame.classList.add('hidden')
})

let choices = {
    1:'pedra',
    2:'papel',
    3:'tesoura'
}

let wins = 0
let losses = 0

const user = document.getElementById('scoreUser')
const server = document.getElementById('scoreSite')
let userScore = document.createElement('p')
let serverScore = document.createElement('p')
userScore.innerText = wins
serverScore.innerText = losses
user.appendChild(userScore)
server.appendChild(serverScore)
const buttonsChoice = document.querySelectorAll(".select-choice")
const buttonsChoiceArray = [...buttonsChoice]

buttonsChoiceArray.forEach(button => {

    button.addEventListener('click', function(e){
        let choice = e.target.getAttribute("data-choice")
        let randomChoice = Math.floor(Math.random() * 3)+1
        let container = document.getElementsByClassName('score')[0]
        let resultDisplay = document.getElementsByClassName('result-display')[0]

        let userChoice = document.getElementById('user-choice')
        let serverChoice = document.getElementById('server-choice')
        let resultText = document.getElementById('result-phrase')

        resultText.classList.remove('choice-animation')
        resultText.classList.add('invisible')
        userChoice.classList.remove('choice-animation-left')
        userChoice.classList.add('invisible')
        serverChoice.classList.remove('choice-animation-right')
        serverChoice.classList.add('invisible')

        setTimeout(function() {

            resultText.classList.remove('invisible')
            resultText.classList.add('choice-animation')
           
            serverChoice.classList.remove('invisible')
            serverChoice.classList.add('choice-animation-right')

            userChoice.classList.remove('invisible')
            userChoice.classList.add('choice-animation-left')

        })
         
        if (choice === 'pedra') userChoice.src = 'img/pedra.png'
        if (choice === 'papel') userChoice.src = 'img/papel.png'
        if (choice === 'tesoura') userChoice.src = 'img/tesoura.png'

        if(choices[randomChoice] === 'pedra') serverChoice.src = 'img/pedra.png'
        if(choices[randomChoice] === 'papel') serverChoice.src = 'img/papel.png'
        if(choices[randomChoice] === 'tesoura') serverChoice.src = 'img/tesoura.png'

        resultDisplay.classList.remove('hidden')
        container.classList.remove('hidden')

        let result = GetWinner( choice, choices[randomChoice] )
        if (result === 'win') {

            wins++
            resultText.innerText = 'Você Ganhou !!'
            resultText.style.color = '#14a85c'
        }

        else if (result === 'lost') {

            losses++
            resultText.innerText = 'Você Perdeu !!'
            resultText.style.color = '#BB0A21'
        }

        else{
            resultText.innerText = 'Você Empatou !!'
            resultText.style.color = 'grey'
        }

        userScore.innerText = wins
        serverScore.innerText = losses

    })

})

function GetWinner(UsersChoice, RandomChoice){

    if(UsersChoice === RandomChoice) return 'tie'

    if(UsersChoice === 'pedra'){

        if(RandomChoice === 'papel'){
            return 'lost'
        }
        
        return 'win'
    }

    if(UsersChoice === 'papel'){

        if(RandomChoice === 'tesoura'){
            return 'lost'
        }

        return 'win'
    }

    if(UsersChoice === 'tesoura'){

        if(RandomChoice === 'pedra'){
            return 'lost'
        }

        return 'win'
    }
}
