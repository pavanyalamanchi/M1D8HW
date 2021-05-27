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

}