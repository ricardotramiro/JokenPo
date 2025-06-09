const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");
const resetBtn = document.querySelector(".reset-btn");

let humanScoreNumber = 0;
let machineScoreNumber = 0;


//ENUNS
const GAME_OPTIONS = {
    STONE: 'stone',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = ["stone", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);

  console.log(randomNumber);

  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  console.log("Humano:" + human + "maquina:" + machine);

  if (human === machine) {
    result.innerHTML = "Deu empate";
  } else if (
    (human === "paper" && machine === "stone") ||
    (human === "stone" && machine === "scissors") ||
    (human === "scissors" && machine === "paper")
  ) {
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber;
    result.innerHTML = "Você ganhou uhuuu";
  } else {
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = "Você perdeu hahaha";
  }
};

// 4. Função de reset
const resetGame = () => {
  humanScoreNumber = 0;
  machineScoreNumber = 0;
  humanScore.innerHTML = 0;
  machineScore.innerHTML = 0;
  result.innerHTML = "";
};

// 5. Evento de clique no botão
resetBtn.addEventListener("click", resetGame);
