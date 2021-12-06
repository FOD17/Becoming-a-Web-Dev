document.getElementById("list-adder").addEventListener("click", () => {
  // Get Text
  let textBoxContent = document.getElementById("text").value

  // Create the element
  let listElement = document.createElement("li")
  let textNode = document.createTextNode(textBoxContent)
  listElement.appendChild(textNode)

  // Add it to the list
  document.getElementById("todo-list").appendChild(listElement)

  // Clear TextArea
  document.getElementById("text").value = ""
})
