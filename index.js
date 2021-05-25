class Calculator {
    constructor() {
        this.operand1 = '' 
        this.operand2 = ''
        this.operatorClicked = false
        this.operator = null
    }

    getNumber() {
        document.querySelectorAll('.number').forEach(item => {
            item.addEventListener('click', () => {
                if(!this.operatorClicked) {
                    this.operand1 += item.innerHTML
                } else {
                    this.operand2 += item.innerHTML
                }
                document.querySelector('.display').innerHTML += item.innerHTML
            })
        });
    }
    
    plus(){
        document.querySelector('.plus').addEventListener('click', () => {
            this.operator = (a, b) => a + b
            this.operatorClicked = true
        })
    }

    divide() {
        document.querySelector('.divide').addEventListener('click', () => {
            this.operator = (a, b) => a / b
            this.operatorClicked = true
        })
    }

    multiply() {
        document.querySelector('.multiply').addEventListener('click', () => {
            this.operator = (a, b) => a * b
            this.operatorClicked = true
        })
    }  

    minus(){
        document.querySelector('.minus').addEventListener('click', () => {
            this.operator = (a, b) => a - b
            this.operatorClicked = true
        })
    }

    percent(){
        document.querySelector('.percent').addEventListener('click', () => {
            this.operator = (a) => a / 100
            this.operatorClicked = true
        })
    }

    checkIncorectOperation() {
        document.querySelectorAll('.operator').forEach(item => {
            item.addEventListener('click', (e) => {
                const display = document.querySelector('.display').innerHTML

                if(isNaN(display[display.length - 1])) {
                    return false
                } else {
                    document.querySelector('.display').innerHTML += e.currentTarget.innerHTML
                }
            })
        })
    }

    clear() {
        document.querySelector('.clear').addEventListener('click', () => {
            document.querySelector('.display').innerHTML = '';
            this.operand1 = ''
        })
    }

    equal(){
        document.querySelector('.equal').addEventListener('click', () => {
            const result = this.operator(
                +this.operand1, 
                +this.operand2
            )
            document.querySelector('.display').innerHTML = result
            this.operand1 = result
            this.operand2 = ''
            this.operatorClicked = false
        })
    }
}

const calculator = new Calculator();

calculator.getNumber()
calculator.clear()
calculator.plus()
calculator.minus()
calculator.multiply()
calculator.percent()
calculator.divide()
calculator.checkIncorectOperation()
calculator.equal()