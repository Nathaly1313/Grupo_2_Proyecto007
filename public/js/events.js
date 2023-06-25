
const max = () => {
    let number, price, number2, total
    number = document.getElementById('number')
    number2 = document.getElementById('number2')
    price = document.getElementById('price')
    total = document.getElementById('total')
    number.textContent = parseInt(number.textContent) + 1
    number2.textContent = number.textContent
    total.textContent = parseFloat(parseFloat(number.textContent) * parseFloat(price.textContent))
    //console.log(number.innerHTML)
}

const min = () => {
    let number, price, number2, total
    number = document.getElementById('number')
    number2 = document.getElementById('number2')
    price = document.getElementById('price')
    total = document.getElementById('total')
    if (parseInt(number.textContent) < 1) {
        number.textContent = '0'
        number2.textContent = number.textContent
    }
    else {
        number.textContent = parseInt(number.textContent) - 1
        number2.textContent = number.textContent
        total.textContent = parseFloat(parseFloat(number.textContent) * parseFloat(price.textContent))
    }
    //console.log(number.innerHTML)
}