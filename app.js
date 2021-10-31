// Global Variables Here
const cells = document.querySelectorAll('.cell')
const h2 = document.querySelector('h2')
const gameBoard = document.querySelector('.game-board')
const status = document.querySelector('.status')

const playAgain = document.querySelector('#play-again')
let gameActive = true
let turn = 'X'
let counter = 0
let boardLayout = ['', '', '', '', '', '', '', '', '']

const isGameWinner = function () {
  if (
    boardLayout[0] !== '' &&
    boardLayout[0] === boardLayout[1] &&
    boardLayout[1] === boardLayout[2]
  ) {
    return true
  }
  if (
    boardLayout[3] !== '' &&
    boardLayout[3] === boardLayout[4] &&
    boardLayout[4] === boardLayout[5]
  )
    return true
  if (
    boardLayout[6] !== '' &&
    boardLayout[6] === boardLayout[7] &&
    boardLayout[7] === boardLayout[8]
  )
    return true
  if (
    boardLayout[0] !== '' &&
    boardLayout[0] === boardLayout[3] &&
    boardLayout[3] === boardLayout[6]
  )
    return true
  if (
    boardLayout[1] !== '' &&
    boardLayout[1] === boardLayout[4] &&
    boardLayout[4] === boardLayout[7]
  )
    return true
  if (
    boardLayout[2] !== '' &&
    boardLayout[2] === boardLayout[5] &&
    boardLayout[5] === boardLayout[8]
  )
    return true
  if (
    boardLayout[0] !== '' &&
    boardLayout[0] === boardLayout[4] &&
    boardLayout[4] === boardLayout[8]
  )
    return true
  if (
    boardLayout[2] !== '' &&
    boardLayout[2] === boardLayout[4] &&
    boardLayout[4] === boardLayout[6]
  )
    return true

  return false
}

function winningConditions() {
  let xMark = []
  let oMark = []
  for (let i = 0; i < boardLayout.length; i++) {
    if (boardLayout[i] === `X`) {
      xMark.push(i)
    } else if (boardLayout[i] === 'O') {
      oMark.push(i)
    }
  }
}

function tieGame() {
  if (counter === 9) {
    return true
  } else {
    return false
  }
}

const turnStatus = function () {
  if (turn === 'X') {
    turn = 'O'
    h2.innerHTML = "O's turn"
  } else {
    turn = 'X'
    h2.innerHTML = "X's turn"
  }
}
////////////////////////////////
// Event Listeners Here
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function (e) {
    if (cells[i].innerText === '' && gameActive) {
      cells[i].innerText = `${turn}`
      boardLayout[i] = `${turn}`
      counter++
      //winningConditions()
      cells[i].classList.add('clicked')

      turnStatus()
      if (isGameWinner()) {
        if (turn === 'O') {
          gameActive = false
          h2.innerHTML = 'X wins!'
        } else {
          gameActive = false
          h2.innerHTML = 'O Wins!'
        }
      }
      if (tieGame()) {
        gameActive = false
        h2.innerHTML = 'Tie Game!'
      }
    }
  })
}

function restart() {
  location.reload()
}
playAgain.addEventListener('click', restart)

function startGame() {}
