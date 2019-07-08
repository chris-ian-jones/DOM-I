const timerSecondsSingleDigit = document.querySelector('.digit:nth-of-type(2)')
const timerSecondsDoubleDigit = document.querySelector('.digit:nth-of-type(1)')
// console.log(timerSecondsDoubleDigit)

let secondTimer = setInterval(countTimer, 1000);
let secondsCountSingleDigit = 0
let secondsCountDoubleDigit = 0

function countTimer() {
    if (secondsCountSingleDigit === 9) {
        timerSecondsSingleDigit.textContent = 0
        timerSecondsDoubleDigit.textContent = 1
        secondsCountSingleDigit = 0
        secondsCountDoubleDigit = 0
    } else {
    ++secondsCountSingleDigit
    timerSecondsSingleDigit.textContent = secondsCountSingleDigit
    timerSecondsDoubleDigit.textContent = secondsCountDoubleDigit
    // console.log(secondsCount)
    }
}