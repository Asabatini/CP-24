const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".create-btn");

// Create the input box
let inputBox = document.createElement("p");
inputBox.className = "input-box";
inputBox.setAttribute("contenteditable", "true");
inputBox.style.marginTop = "50px"; // Adding margin-top inline

// Append the input box to the notesContainer initially
notesContainer.appendChild(inputBox);

// On page load, check if there's any saved text in local storage
window.onload = function() {
    var savedText = localStorage.getItem('savedText');
            
    // If there's saved text, populate the input box with it
    if (savedText !== null) {
        inputBox.innerText = savedText;
        createBtn.textContent = "Show Notes"; // Change button text to "Show Notes"
    }
};

// Save text to local storage when input box loses focus
inputBox.addEventListener("blur", () => {
    // Get the text from the input box
    var text = inputBox.innerText.trim();
            
    // Store the text in local storage under a specific key
    localStorage.setItem('savedText', text);
});

// Show the input box when the create button is clicked
createBtn.addEventListener("click", () => {
    if (inputBox.style.display === "none") {
        inputBox.style.display = "block";
        createBtn.textContent = "Hide Notes"; // Change button text to "Hide Notes"
    } else {
        inputBox.style.display = "none";
        createBtn.textContent = "Show Notes"; // Change button text to "Show Notes"
    }
});
