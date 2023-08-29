import { randomNumber } from "./src/utils.js"

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnScren1 = document.getElementById('btn-try')
const btnScren2 = document.getElementById('btn-reset')
let Number = randomNumber(0,10)
let attempts = 1

btnScren1.addEventListener('click', (event) => {
  event.preventDefault()

  let tryCatch = document.getElementById('inputNumber')
  if(tryCatch.value != Number){
     attempts++
     tryCatch.value =''
     return
  }
  const trys = (attempts ==1) ? 'tentativa' : 'tentativas'
  screen2.querySelector('h2').innerHTML = `Você acertou em ${attempts} ${trys}`
  screen1.classList.add('hide')
  screen2.classList.remove('hide')
})

btnScren2.addEventListener('click', (event) => {
  event.preventDefault()
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
  attempts = 1
  Number = randomNumber(0,10)
  console.log(Number)
})


console.log(Number)