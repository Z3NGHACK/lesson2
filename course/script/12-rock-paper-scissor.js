//save the score into local storage so it didn't lose after refresh the page
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  lose: 0,
  ties: 0
};

updateScoreElement();
//default operator (optional)
/*if(!score){
  score = {
    wins: 0,
    lose: 0,
    ties: 0
  };
}
*/

let isAutoPLaying = false;
let intervalId;
// we set interval id then clear it id
function autoplay(){
  if(!isAutoPLaying){
    intervalId = setInterval(function() {
      const PLayerMove = pickComputerMove();
      playGame(PLayerMove);
    }, 1000);
    isAutoPLaying = true;
  }else{
    clearInterval(intervalId);
    isAutoPLaying = false;
  }
}

function playGame(PLayerMove){
  const computerMove = pickComputerMove();

  let result = '';
  
  if(PLayerMove === 'scissors'){
    if(computerMove === 'rock'){
      result = 'You lose!';
    }else if(computerMove === 'paper'){
      result = 'You win!';
    }else if(computerMove === 'scissors'){
      result = 'Tie'
    }
    
  }else if(PLayerMove === 'paper'){
    if(computerMove === 'rock'){
      result = 'You win!';
    }else if(computerMove === 'paper'){b 
      result = 'Tie';
    }else if(computerMove === 'scissors'){
      result = 'You lose!'
    }

  }else if(PLayerMove === 'rock'){
    if(computerMove === 'rock'){
      result = 'Tie';
    }else if(computerMove === 'paper'){
      result = 'You lose!';
    }else if(computerMove === 'scissors'){
      result = 'You win!'
    }
  }     
  
  if(result === 'You win!'){
    score.win += 1;
  }else if(result === 'You lose!'){
    score.lose += 1;
  }else if(result === 'Tie'){
    score.ties += 1;
  }
  
  //set data to store

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-move').innerHTML = `You <img src = "images/${PLayerMove}-emoji.png" class = "move-icon">
  <img src = "images/${computerMove}-emoji.png" class = "move-icon">
   computer.`;
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `win: ${score.win}, Loses: ${score.lose}, Ties: ${score.ties}`;
}


function pickComputerMove(){
  const randomNumber = Math.random();
  let computerMove = '';

  if(randomNumber >= 0 && randomNumber < 1 / 3){
    computerMove = 'rock';
  }else if(randomNumber >= 1 / 3 && randomNumber < 1 / 2){
    computerMove = 'paper';
  }else if(randomNumber >= 1 / 2 && randomNumber < 1){
    computerMove = 'scissors';
  }

  return computerMove;
}