const embrasilValue = document.querySelector('.embrasil-value')
const moneyValue = document.querySelector('.money-value')
const mobiValue = document.querySelector('.mobilegal-value')

const ul = document.querySelector('nav ul')

const moneyFunction = () => {
  const money = document.querySelector('.money-data')
  const borderColor = document.querySelector('.money-value h2')
  borderColor.classList.toggle('border-color-blue')
  money.classList.toggle('transform-active')
}

const embraFunction = () => {
  const embrasil = document.querySelector('.embra-data')
  const borderColor = document.querySelector('.embrasil-value h2')
  borderColor.classList.toggle('border-color-blue')
  embrasil.classList.toggle('transform-active')
}

const mobiFunction = () => {
  const mobilegal = document.querySelector('.mobi-data')
  const borderColor = document.querySelector('.mobilegal-value h2')
  borderColor.classList.toggle('border-color-blue')
  mobilegal.classList.toggle('transform-active')
}

const openMenuFunction = () => {
  if (ul.classList.contains('open')) {
    ul.classList.remove('open')
  } else {
    ul.classList.add('open')
  }
}

const typeWriter = element => {
  const textArray = element.innerHTML.split('')
  element.innerHTML = ''
  textArray.forEach((letter, i) => {
    setTimeout(() => (element.innerHTML += letter), 100 * i)
  })

  setInterval(() => {
    typeWriter(element)
  }, 6000)
}

typeWriter(elementEl)

moneyValue.addEventListener('click', moneyFunction)
embrasilValue.addEventListener('click', embraFunction)
mobiValue.addEventListener('click', mobiFunction)
