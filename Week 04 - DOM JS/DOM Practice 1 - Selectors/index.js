// getElementById()
let someText = document.getElementById('some-text');
console.log(someText);

// getElementsByClassName()
let liElements = document.getElementsByClassName('list-class');
console.log(liElements);

// getElementsByName()
let namedElements = document.getElementsByName('bernie');
console.log(namedElements[0].textContent);

// getQuerySelector()
// The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
let selectedQuery = document.querySelector('.list-class');
console.log(selectedQuery);

let secondSelectedQuery = document.querySelector('div.text-wrapper-two > p');
console.log(secondSelectedQuery);

//querySelectorAll()
let allQueries = document.querySelectorAll('p');
console.log(allQueries);

// getElementsByTagName()
// a tag is a read only element
let taggedElements = document.getElementsByTagName('div');
console.log(taggedElements);

// createElement()
var headingThree = document.createElement('h3');
headingThree.innerHTML = 'DOM MASTER';
document.body.appendChild(headingThree);
