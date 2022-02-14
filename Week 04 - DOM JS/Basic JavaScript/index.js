/**
 * Basic JavaScript
 */

// We can also do this in the web console, replit, or in node

// Variables - var, let, const
var myName = "Bernie"
let dogAge = 1
let myBreed = "Havanese"
const cute = True

// Show something is "private"
var _favoriteFood = "pizza"

// Array
let todoList = ["Sleep", "Walk Bernie", "Sleep"]

// Object
const dog = { name: "Bernie", breed: "havanese" }
dog.colors = "black and white"

// Conditionals
const x = 11
if (x > 10) {
  // do something
} else if (x > 5) {
  // do something
} else {
  // do something
}

const value = 5
switch (value) {
  case 5: // do something
    break

  case 4:
    break

  default:
    // do default thing or nothing at all
    break
}

// Loops - for, for/in, for/of, while, do/while
for (let i = 0; i < 5; i++) {
  // do something
}

let todoList = ["Sleep", "Walk Bernie", "Sleep"]
for (const item of todoList) {
  console.log(item)
}

const dog = { dogOne: "Bernie", dogTwo: "Fido", dogThree: "Woof Woof" }
for (const key in dog) {
  console.log(key, dog[key])
}

let x = 20
while (x >= 10) {
  console.log(x)
  x = x - 1
}

let x = 20
do {
  console.log(x)
  x = x - 1
} while (x >= 10)

// Functions
function addFive(number) {
  return number + 5
}

const addSix = (number) => {
  return number + 6
}

const addSeven = function (number) {
  return number + 7
}
