const embrasilValue = document.querySelector('.embrasil-value')
const moneyValue = document.querySelector('.money-value')
const mobilegalValue = document.querySelector('.mobilegal-value')



moneyValue.addEventListener('click', () => {
 const money = document.querySelector('.money-data')
  const borderColor = document.querySelector('.money-value h2')
  borderColor.classList.toggle('border-color-blue')
  money.classList.toggle('transform-active')
  
})

embrasilValue.addEventListener('click', () => {
  const embrasil = document.querySelector('.embra-data')
  const borderColor = document.querySelector('.embrasil-value h2')
  borderColor.classList.toggle('border-color-blue')
  embrasil.classList.toggle('transform-active')
})

mobilegalValue.addEventListener('click', () => {
  const mobilegal = document.querySelector('.mobi-data')
  const borderColor = document.querySelector('.mobilegal-value h2')
  borderColor.classList.toggle('border-color-blue')
  mobilegal.classList.toggle('transform-active')
})
