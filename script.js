const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".create-btn");

// Function to toggle between "Create Note" and "Save Note" buttons
function toggleButton() {
    if (createBtn.textContent === "Create Note") {
        createBtn.textContent = "Save Note";
    }
}

// Function to show/hide input box and toggle button text
function toggleInputBox() {
    if (inputBox.style.display === "none") {
        inputBox.style.display = "block";
        toggleButton();
    }
}

// Function to save the text in local storage
function saveText() {
    const text = inputBox.textContent.trim();
    localStorage.setItem('savedText', text);
}

// Function to load text from local storage
function loadText() {
    const savedText = localStorage.getItem('savedText');
    if (savedText) {
        inputBox.textContent = savedText;
        toggleInputBox(); // Show input box if text is present
    }
}

// Create the input box
let inputBox = document.createElement("p");
inputBox.className = "input-box";
inputBox.setAttribute("contenteditable", "true");
inputBox.style.marginTop = "50px"; // Adding margin-top inline
inputBox.style.display = "none"; // Initialize display to "none"

// Append the input box to the notesContainer initially
notesContainer.appendChild(inputBox);

// Load saved text when the page loads
window.addEventListener("load", loadText);

// Show/hide the input box and toggle button text when the create button is clicked
createBtn.addEventListener("click", () => {
    toggleInputBox();
    if (createBtn.textContent === "Save Note") {
        // Save text when switching from "Create Note" to "Save Note"
        saveText();
    }
});

// Save text when the input box loses focus
inputBox.addEventListener("blur", saveText);
