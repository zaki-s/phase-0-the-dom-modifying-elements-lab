// Write your code here!

// Remove the existing <main> element
document.getElementById("main").remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set its id to 'victory'
newHeader.id = "victory";

// Add the text inside the element
newHeader.textContent = "Zaki is the champion"; // Change "Zaki" to your name if needed

// Append it to the body
document.body.append(newHeader);