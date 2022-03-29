// Hello, object

const user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name

// Check for emptiness
function isEmpty(obj){
    for (key in obj){ // executes only if obj has at least 1 key
        return false
    }
    return true
}
let schedule = {}
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

// Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0
for (let key in salaries){
    sum+=salaries[key]
}
console.log(sum)

// Multiply numeric property values by 2
function multiplyNumeric(obj){
    for (key in obj){
        if (typeof obj[key] == "number"){
            obj[key] *= 2
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

multiplyNumeric(menu)

console.log(menu)