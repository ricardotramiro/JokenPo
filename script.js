const result = document.querySelector(".result");
const choicesText = document.querySelector("#choices");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");
const resetBtn = document.querySelector("#reset");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const playBtns = document.querySelectorAll(".play-btn");

// Eventos de clique nos botões de jogada
playBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const choice = btn.id;
    if (isValidChoice(choice)) {
      playTheGame(choice, playMachine());
    }
  });
});

const isValidChoice = (choice) => {
  return ["stone", "paper", "scissors"].includes(choice);
};

const playMachine = () => {
  const choices = ["stone", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const emoji = (choice) => {
  if (choice === "stone") return "🪨";
  if (choice === "paper") return "📄";
  return "✂️";
};

const playTheGame = (human, machine) => {
  choicesText.innerHTML = `Você jogou: ${emoji(human)} | Máquina jogou: ${emoji(machine)}`;

  if (human === machine) {
    result.innerHTML = "Empate! 🤝";
  } else if (
    (human === "paper" && machine === "stone") ||
    (human === "stone" && machine === "scissors") ||
    (human === "scissors" && machine === "paper")
  ) {
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber;
    result.innerHTML = "Você ganhou! 🎉";
  } else {
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = "Você perdeu! 😢";
  }
};

const resetGame = () => {
  humanScoreNumber = 0;
  machineScoreNumber = 0;
  humanScore.innerHTML = 0;
  machineScore.innerHTML = 0;
  result.innerHTML = "";
  choicesText.innerHTML = "Escolha uma opção acima para jogar";
};

resetBtn.addEventListener("click", resetGame);
