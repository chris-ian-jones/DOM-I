const timerSecondsSingleDigit = document.querySelector('.digit:nth-of-type(2)')
const timerSecondsDoubleDigit = document.querySelector('.digit:nth-of-type(1)')
const timerAll = document.querySelectorAll('.digit')

console.log(timerAll)

let secondTimer = setInterval(countTimer, 1000);
let secondsCountSingleDigit = 0
let secondsCountDoubleDigit = 0

function countTimer() {
    if (secondsCountSingleDigit === 9) {
        timerSecondsSingleDigit.textContent = 0
        timerSecondsDoubleDigit.textContent = 1

        timerAll.forEach(digit => digit.style.color = 'red')
        secondsCountSingleDigit = 0
        
    } else {
    ++secondsCountSingleDigit
    timerSecondsDoubleDigit.textContent = 0
    timerAll.forEach(digit => digit.style.color = 'black')
    timerSecondsSingleDigit.textContent = secondsCountSingleDigit
    timerSecondsDoubleDigit.textContent = secondsCountDoubleDigit
    }
}