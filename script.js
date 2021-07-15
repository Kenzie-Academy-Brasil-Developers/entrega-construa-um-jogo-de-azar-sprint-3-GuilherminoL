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

const buttonsChoice = document.querySelectorAll(".select-choice")
const buttonsChoiceArray = [...buttonsChoice]
buttonsChoiceArray.forEach(button => {

    button.addEventListener('click', function(e){
        let choice = e.target.getAttribute("data-choice")
        let randomChoice = Math.floor(Math.random() * 3)+1
        let result = GetWinner( choice, choices[randomChoice] )
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
