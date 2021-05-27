window.onload = function() {
    numberCreator()
}

const numberCreator = function() {
    let parentDiv = document.getElementById('number-container')
    parentDiv.innerHTML = ''
    for (let i = 1; i <= 76; i++) {
        let newNumber = document.createElement('div')
        newNumber.innerText = i
        newNumber.classList.add('number')
        parentDiv.appendChild(newNumber)
    }
}
const buttonClick = function() {
    let randomNumber = Math.floor((Math.random() * 76) + 1)
    let randomBoardNumber = document.getElementsByClassName('number')
    for (let i = 0; i < randomBoardNumber.length; i++) {
        if (randomBoardNumber[i] === randomNumber) {
            document.getElementsByClassName('number')[i].style.backgroundColor = 'red'
        }
    }
}
