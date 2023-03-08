// Get references to the DOM elements
const colorList = document.getElementById("color-list");
const addColorForm = document.getElementById("add-color-form");
const colorInput = document.getElementById("color-input");

// Add an event listener to the form submit button
addColorForm.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value of the color input field
  const newColor = colorInput.value;

  // Create a new list item element
  const newListItem = document.createElement("li");

  // Set the text content of the new list item
  newListItem.textContent = newColor;

  // Append the new list item to the color list
  colorList.appendChild(newListItem);

  // Clear the color input field
  colorInput.value = "";
});
