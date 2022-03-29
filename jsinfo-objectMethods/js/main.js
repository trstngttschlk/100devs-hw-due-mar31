// Using "this" in object literal
// the result is undefined, "this" is a keyword

// Create a calculator
let calculator = {
    read: function() {
        this.userInput1 = prompt('Please input the first number')
        this.userInput2 = prompt('Please input the second number')
    },
    sum: function() {
        return +this.userInput1 + +this.userInput2
    },
    mul: function() {
        return +this.userInput1 * +this.userInput2
    },
}

calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())

// Chaining
let ladder = {
    step: 0,
    up: function(){
        this.step++
        return this
    },
    down: function(){
        this.step--
        return this
    },
    showStep: function(){
        alert(this.step)
        return this
    }
}
ladder.up().up().down().showStep().down().showStep();