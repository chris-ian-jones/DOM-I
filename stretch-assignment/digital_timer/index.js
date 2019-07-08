//grab html divs for seconds digits
const timerSecondsDoubleDigit = document.querySelector('.digit:nth-of-type(1)')
const timerSecondsSingleDigit = document.querySelector('.digit:nth-of-type(2)')

//grab html divs for milliseconds digits
const timeMsDoubleDigit = document.querySelector('.digit:nth-of-type(4)')
const timeMsSingleDigit = document.querySelector('.digit:nth-of-type(5)')

//grab NodeList of all divs of 'Digit'
const timerAll = document.querySelectorAll('.digit')

// call countSecondTimer function at a fixed time of 1000ms between each call
let secondTimer = setInterval(countSecondTimer, 1000);
// set defaults for variables
let secondsCountSingleDigit = 0
let secondsCountDoubleDigit = 0

// call countMsTimer function at a fixed time of 100ms between each call
let msTimer = setInterval(countMsTimer, 100)
// set defaults for variables
let msCountSingleDigit = 0
let msCountDoubleDigit = 0


function countMsTimer() {
    if (msCountSingleDigit >= 90) {
        timeMsSingleDigit.textContent = 0
        timeMsDoubleDigit.textContent = 0
    } else {
    msCountSingleDigit = msCountSingleDigit + 10
    timeMsDoubleDigit.textContent = 0
    timeMsSingleDigit.textContent = msCountSingleDigit
    timeMsDoubleDigit.textContent = msCountDoubleDigit
    }
}

// function to increment seconds digit every second
// at 9 or more seconds, the next increment will set the text value 
// of html for seconds digits to '10', while setting whole timer to style color 'red'
function countSecondTimer() {
    if (secondsCountSingleDigit >= 9) {
        timerSecondsSingleDigit.textContent = 0
        timerSecondsDoubleDigit.textContent = 1
        timerAll.forEach(digit => digit.style.color = 'red')
    } else {
    ++secondsCountSingleDigit
    timerSecondsDoubleDigit.textContent = 0
    timerSecondsSingleDigit.textContent = secondsCountSingleDigit
    timerSecondsDoubleDigit.textContent = secondsCountDoubleDigit
    }
}

// ########################

// let timerSecondOnes = document.querySelector('.digit:nth-of-type(2)')
// let timerMsTens = document.querySelector('.digit:nth-of-type(5)')


// let timer = setInterval(countTimer, 100)
// let msCount = 0
// let sCount = 0

// function countTimer() {
//     msCount = msCount + 10
//     timerMsTens.textContent = msCount
    
//     if (sCount >= 10) {
//         sCount = 10
//         timerSecondOnes = 0
//         timerMsTens.textContent = sCount
//         timerSecondOnes.textContent = timerSecondOnes
//         // console.log(sCount)
//     } else if (msCount === 90) {
//         msCount = msCount + 10
//         timerMsTens.textContent = msCount   
//         ++sCount
//         timerSecondOnes.textContent = sCount
//         msCount = 0
//     }
// }


// #########################
