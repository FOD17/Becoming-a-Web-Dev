/**
 * Basic JavaScript
 */

// We can also do this in the web console, replit, or in node


// Variables - var, let, const
var myName = "Bernie"
let myBreed = "Havanese"
const cute = True

// Show something is "private"
var _favoriteFood = "pizza"

// Array
let todoList = ["Sleep", "Walk Bernie", "Sleep"]

// Object
const dog = {name: "Bernie", breed: "havanese"}
dog.colors = "black and white"

// Loops - for, for/in, for/of, while, do/while
for (let i = 0; i < 5; i++) {
    // do something
  }

for (const key in dog) {
   // do something
}

for (const iterator of object) {
    // do something
}

while (condition) {
    // do something
}

do {
    
} while (condition);

// Functions
function addFive (number) {
    return number + 5
}

const addSix = (number) => {
    return number + 6
}

const addSeven = function(number){
    return number + 7
}