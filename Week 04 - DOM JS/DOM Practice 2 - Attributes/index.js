/**
     * NOTE: Not exhaustive!!
    appendChild()
    childElementCount
    childNodes
    children
    className
    closest
    firstChild
    firstElementChild
    id
    innerHTML
    outerHTML
    outerText
    parentElement
    previousElementSibling
    textContent
 */

/**
 * Example 1
 * appendChild, innerText, createTextNode, createElement
 * */
let appendedElement = document.createElement('h2');
let text = document.createTextNode('MAGIC!');
appendedElement.appendChild(text);
document.getElementById('node').appendChild(appendedElement);

/**
 * Example 2
 * childElementCount
 * */
let elementKidCount = document.getElementById('list').childElementCount;
console.log('The List has this man children: ', elementKidCount);

/**
 * Example 3
 * childNodes (notice it returns more elements than you expect)
 * */
let elementKidNodes = document.getElementById('list').childNodes;
console.log(elementKidNodes);

/**
 * Example 4
 * children (notice it returns what you expect)
 * */
let elementChildren = document.getElementById('list').children;
console.log(elementChildren);

/**
 * Example 5
 * className
 * */
document.getElementById('node').className = 'updated-class';

/**
 * Example 6
 * closest
 * use #h1 and #p to show it overlooks siblings
 * */
let closestThing = document.getElementById('list').closest('body');
console.log(closestThing);

/**
 * Example 7
 * firstChild
 * */
let firstChild = document.getElementById('list').firstChild;
console.log(firstChild);

/**
 * Example 8
 * firstChild
 * */
let firstChildEle = document.getElementById('list').firstElementChild;
console.log(firstChildEle);

/**
 * Example 9
 * id
 * */
document.getElementById('p').id = 'updated-id';
console.log(document.getElementById('updated-id').id);

/**
 * Example 10
 * innerHTML
 * */
document.getElementById('updated-id').innerHTML = 'Bernie is awesome';

/**
 * Example 11
 * innerText
 * Notice what it does to the list
 * */
//document.getElementById('list').innerHTML = 'Bernie is awesome';

/**
 * Example 12
 * parentElement
 * */
let listParent = document.getElementById('list').parentElement;
console.log('listParent', listParent);
let h2Parent = document.getElementById('att-fun').parentElement;
console.log('h2Parent', h2Parent);

/**
 * Example 13
 * previousElementSibling
 * */
let previousSibling = document.getElementById('li-3').previousElementSibling;
console.log('previousSibling', previousSibling);
