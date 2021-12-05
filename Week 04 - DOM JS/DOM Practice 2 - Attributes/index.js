/**
     * NOTE: Not exhaustive!!
    appendChild()
    childElementCount
    childNodes
    children
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
