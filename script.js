class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()
    }
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    
    delete() {
    }
    
    appendNumber(number) {
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    
    chooseOperation(operation) {
    }
    
    compute() {
    }
    
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
    }
};




const previousOperandTextElement = document.querySelectorAll('data-previous-operand')
const currentOperandTextElement = document.querySelectorAll('data-current-operand')
const numberButtons = document.querySelectorAll('data-number')
const operationButtons = document.querySelectorAll('data-operation')
const allClearButton = document.querySelectorAll('data-all-clear')
const deleteButton = document.querySelectorAll('data-delete')
const equalsButton = document.querySelectorAll('data-equals')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

