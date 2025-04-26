let result_div = document.getElementById('resultDisplay')
let result_HTML = result_div.innerHTML
let numbers = document.querySelectorAll('.number')
let operators = document.querySelectorAll('.opr')
let equals = document.getElementById('getResult')
let lastChar = []
let lastString = ''
let result = ''
function clear() {
    result_div.innerHTML = ''
    lastChar = []
    result_div.style = 'color: #A7A8AA'
}
function getResult(equation) {
    result = math.eval(equation)
    if (result == Infinity) {
        result_div.style = 'color: red'
        result_div.innerHTML = 'ERROR'
        setTimeout(() => {
            clear()
        }, 1500)
    } else {
        result_div.innerHTML = math.round(result, 3)
    }
}
function calculation(clickedNumber) {
    if (clickedNumber == 'AC') {
        clear()
    } else if (
        result_div.innerHTML.length == 1 &&
        result_div.innerHTML.charAt(0) == 0
    ) {
        result_div.innerHTML = clickedNumber
    } else {
        result_div.innerHTML += clickedNumber
    }
}
function last() {
    lastString = lastChar[lastChar.length - 1]
    if (lastString == 'opr') {
        return false
    } else if (lastString == 'number') {
        return true
    }
}

function main() {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', function () {
            calculation(this.id)
            console.log('clicked -->' + ' ' + this.id)
            lastChar.push('number')
        })
    }
    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', function () {
            last()
            if (
                last() &&
                this.innerHTML != 'AC' &&
                this.innerHTML != '+/-' &&
                this.innerHTML != '.'
            ) {
                calculation(this.innerHTML)
                lastChar.push('opr')
            } else if (this.innerHTML == 'AC') {
                calculation(this.innerHTML)
            } else if (this.innerHTML == '+/-') {
                if (result_div.innerHTML.charAt(0) === '-') {
                    result_div.innerHTML = result_div.innerHTML.slice(1)
                } else {
                    result_div.innerHTML = '-' + result_div.innerHTML
                }
            } else if (this.innerHTML == '.') {
                result_div.innerHTML += '.'
            }
            console.log('clicked -->' + ' ' + this.id)
            console.log(this.innerHTML)
        })
    }
    equals.addEventListener('click', function () {
        getResult(result_div.innerHTML)
    })
}

main()
console.log(console.error())
