
const base = document.querySelector('#base')
const hight = document.querySelector('#hight')
const outputBase = document.querySelector('.output-base')
const outputHight = document.querySelector('.output-hight')
const calcBtn = document.querySelector('#calc-btn')
const result = document.querySelector('.result')
const outputField = document.querySelector('.output-field')


calcBtn.addEventListener('click', () => {
    let b = +base.value
    let h = +hight.value

    outputBase.innerHTML = b
    outputHight.innerHTML = h
    
    result.innerHTML = `${b * h} square unit`
    outputField.style.display='block'
})




