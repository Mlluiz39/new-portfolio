const embrasilValue = document.querySelector('.embrasil-value')
const moneyValue = document.querySelector('.money-value')
const mobilegalValue = document.querySelector('.mobilegal-value')

moneyValue.addEventListener('click', () => {
  const moneyData = document.querySelector('.money-data')
  const borderColor = document.querySelector('.money-value h2')
  moneyData.classList.toggle('money-data-active')
  borderColor.classList.toggle('border-color-blue')
})

embrasilValue.addEventListener('click', () => {
  const embraData = document.querySelector('.embra-data')
  const borderColor = document.querySelector('.embrasil-value h2')
  embraData.classList.toggle('.embra-data-active')
  borderColor.classList.toggle('border-color-blue')
})

mobilegalValue.addEventListener('click', () => {
  const mobiData = document.querySelector('.mobi-data')
  const borderColor = document.querySelector('.mobilegal-value h2')
  mobiData.classList.toggle('mobi-data-active')
  borderColor.classList.toggle('border-color-blue')
})