const weightInput = document.querySelector('#lbsInput')
const outputDiv = document.querySelector('#output')
const gramsDiv = document.querySelector('#gramsOutput')
const kgDiv = document.querySelector('#kgOutput')
const ozDiv = document.querySelector('#ozOutput')

outputDiv.style.visibility = 'hidden'

weightInput.addEventListener('keyup',convertInput)
weightInput.addEventListener('click',showCards)

function convertInput(e) {

  let inputValue, gramsValue, kgValue, ozValue

  inputValue = (e.target.value)
  if(inputValue) {
    gramsValue = inputValue/0.0022046
    kgValue = inputValue/2.2046
    ozValue = inputValue*16
    gramsDiv.innerHTML = gramsValue
    kgDiv.innerHTML = kgValue
    ozDiv.innerHTML = ozValue
  } else {
    gramsDiv.innerHTML = ''
    kgDiv.innerHTML = ''
    ozDiv.innerHTML = ''
  }
}

function showCards(e) {
  outputDiv.style.visibility = 'visible'
}
