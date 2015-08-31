var userChoice;
var computerChoice;

function log(message) {
  document.write("<p>" + message + "</p>");
};

function throwHands() {
  // Computer
  var computerChoiceRand = Math.random();
  if (computerChoiceRand < 0.34) {
    computerChoice = "rock";
  } else if (computerChoiceRand <= 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  // Player
  userChoice = prompt("Do you choose rock, paper or scissors?");
}

function compare(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    log('The result is a tie!');
    return "tie";
  }

  if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      log('rock wins!');
      return "player";
    } else {
      log('paper wins!');
      return "computer";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      log('paper wins!');
      return "player";
    } else {
      log('scissors wins!');
      return "computer";
    }
  } else if(userChoice === "scissors") {
    if (computerChoice === "paper") {
      log('scissors wins!');
      return "player";
    } else {
      log('rocks wins!');
      return "computer";
    }
  }
}

function playBout() {
  var gamesPlayed = 0;
  var numberOfGames = 3;
  var userWins = 0;
  var compWins = 0;

  while (gamesPlayed < numberOfGames) {
    // Best 2 of 3
    if (userWins >= 2 || compWins >= 2) {
      break;
    }

    throwHands();
    var winner = compare(userChoice, computerChoice);
    if (winner !== "tie") {
      gamesPlayed++;

      if (winner == "player") {
        log("You win.");
        userWins++;
      } else {
        log("You lose.");
        compWins++;
      }
    }
  }

  if (userWins > compWins) {
    log("You've won this bout.");
  } else {
    log("You've lost this bout.");
  }
}
playBout();

function playMatch() {
  var gamesPlayed = 0;
  var numberOfGames = 3;
  var userWins = 0;
  var compWins = 0;

  while (gamesPlayed < numberOfGames) {
    // Best 2 of 3
    if (userWins >= 2 || compWins >= 2) {
      break;
    }

    throwHands();
    var winner = compare(userChoice, computerChoice);
    if (winner !== "tie") {
      gamesPlayed++;

      if (winner == "player") {
        log("You win.");
        userWins++;
      } else {
        log("You lose.");
        compWins++;
      }
    }
  }

  if (userWins > compWins) {
    log("You've won this match.");
  } else {
    log("You've lost this match.");
