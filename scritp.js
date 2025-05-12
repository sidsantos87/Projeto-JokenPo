const finish = document.querySelector(".resultado")
const paragraph = document.querySelector(".emotion")
const pessoa = document.querySelector("#human")
const maquina = document.querySelector("#machine")

let resultadoFinal = 0
let imagemFinal = 0

const GAME_OPTIONS = {
   ROCK : 'pedra',
   PAPER : 'papel',
   SCISSORS : 'tesoura'
}

const startGame = (humanoEscolha) => {
   console.log(humanoEscolha);

   startTheGame(humanoEscolha, gamerMachine());
}


const gamerMachine = () => {
   const opcoes = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
   const randomNumber = Math.floor(Math.random() * 3);

   return opcoes[randomNumber]
}

const startTheGame = (gamer, computer) => {

   if (gamer === computer) {
      finish.innerHTML = 'Deu empate!'
      paragraph.innerHTML = '&#x1F91D'
   }
   else if ((gamer === GAME_OPTIONS.ROCK && computer === GAME_OPTIONS.SCISSORS) ||
      (gamer === GAME_OPTIONS.SCISSORS && computer === GAME_OPTIONS.PAPER) ||
      (gamer === GAME_OPTIONS.PAPER && computer === GAME_OPTIONS.ROCK)) {

      resultadoFinal++
      pessoa.innerHTML = resultadoFinal
      finish.innerHTML = 'Você Ganhou!'
      paragraph.innerHTML = '&#128525'
   }
   else {

      imagemFinal++
      maquina.innerHTML = imagemFinal
      finish.innerHTML = 'Alexa Ganhou!'
      paragraph.innerHTML = '&#128530'
   }
}
