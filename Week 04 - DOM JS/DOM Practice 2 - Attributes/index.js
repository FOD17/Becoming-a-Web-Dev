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
    innerText
    insertBefore()
    outerHTML
    outerText
    parentElement
    previousSibling()
    remove()
    setAttributeNode()
    textContent
 */

/**
 * Example 1
 * appendChild, innerText, createTextNpde, createElement
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
 * childNodes (notice it returns what you expect)
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
let closestThing = document.getElementById('list').closest('#body');
console.log(closestThing);
