let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    loss: 0,
    tie: 0
}
updateScoreElement();

function playerMove(playerChoice) {
    const Move = computerChoice();
    let result;
    if (playerChoice == 'Scissors') {
        if (Move == 'Scissor') {
            result = 'match tie';
        } else if (Move == 'Rock') {
            result = 'computer win';
        } else {
            result = 'you win'
        }
    }

    else if (playerChoice == 'Paper') {
        if (Move == 'Paper') {
            result = 'match tie';
        } else if (Move == 'Scissor') {
            result = 'computer win';
        } else {
            result = 'you win'
        }
    }

    else if (playerChoice == 'Rock') {
        if (Move == 'ROck') {
            result = 'match tie';
        }
        else if (Move == 'Scissor') {
            result = 'you win';
        }
        else {
            result = 'computer win';
        }
    }

    if (result == 'you win') {
        score.win += 1;
    }
    else if (result == 'computer win') {
        score.loss += 1;
    }
    else if (result == 'match tie') {
        score.tie += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.final-result')
        .innerHTML = `${result}`;

    document.querySelector('.choice')
        .innerHTML = `you - ${playerChoice} -> computer - ${Move}.`;

    updateScoreElement();
}

function updateScoreElement() {
    document.querySelector('.score-section')
        .innerHTML = `wins : ${score.win} ¦ loss: ${score.loss} ¦ tie :${score.tie}`;
}

function computerChoice() {

    let computerMove = '';
    const RandomNumber = Math.random();

    if (RandomNumber >= 0 && RandomNumber <= 1 / 3) {
        computerMove = 'Rock';
    }
    else if (RandomNumber > 1 / 3 && RandomNumber <= 2 / 3) {
        computerMove = 'Paper';
    }
    else {
        computerMove = 'Scissor';
    }
    return computerMove;
}
