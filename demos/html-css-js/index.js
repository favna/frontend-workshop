// Retrieve the input element and add an event listener to it
document.getElementById('name-input').addEventListener('keyup', handleKeyUp);

/** @param {KeyboardEvent} event The HTML event fired when a keypress goes up */
function handleKeyUp(event) {
  const outputElement = document.getElementById('name');
  const inputElementText = event.target.value;
  outputElement.innerText = inputElementText;
}
