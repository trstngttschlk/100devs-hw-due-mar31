// Two functions -- one object
// yes, it is possible

// Create new Calculator
function Calculator(){
    this.read = function() {
        this.num1 = +prompt('num1 please')
        this.num2 = +prompt('num2 please')
    },
    this.sum = function(){
        return this.num1+this.num2
    },
    this.mul = function(){
        return this.num1*this.num2
    }
}

let calculator = new Calculator;
calculator.read()
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

// Create a new Accumulator
function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        this.userNum = +prompt('please enter num')
        this.value += this.userNum
    }
}

let accumulator = new Accumulator(1)
accumulator.read()
accumulator.read()
console.log(accumulator.value)