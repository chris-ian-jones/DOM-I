const timerSecondsSingleDigit = document.querySelector('.digit:nth-of-type(2)')
console.log(timerSecondsSingleDigit)

let timer = setInterval(countTimer, 1000);
let secondsCount = 0

function countTimer() {
    ++secondsCount
    timerSecondsSingleDigit.textContent = secondsCount
    console.log(secondsCount)
}