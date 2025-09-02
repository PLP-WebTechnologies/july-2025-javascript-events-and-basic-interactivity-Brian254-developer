// Part 1: JavaScript Event Handling and Interactive Elements
document.getElementById("accessBtn").addEventListener("click", function () {
  const description = `
    <h2>JavaScript Event Handling</h2>
    <p>JavaScript event handling allows developers to respond to user interactions such as clicks, key presses, and mouse movements.</p>
    <ul>
      <li><strong>addEventListener()</strong> – Attaches an event handler to an element.</li>
      <li><strong>event.preventDefault()</strong> – Prevents the default browser behavior.</li>
      <li><strong>event.stopPropagation()</strong> – Stops the event from bubbling up the DOM tree.</li>
    </ul>
    <p>Example:</p>
    <pre>
document.getElementById("myBtn").addEventListener("click", function() {
  alert("Button clicked!");
});
    </pre>
  `;

  document.getElementById("description").innerHTML = description;
});

// Change input field background color on focus and blur
const input = document.getElementById("inputField");
input.addEventListener("focus" , function() {
    input.style.backgroundColor = "yellow"
    input.style.color = "black";      
});

input.addEventListener("blur" , function() {
    input.style.backgroundColor = ""
    input.style.color = "";      
});

// Part 2: Building Interactive Elements
const toggleButton = document.getElementById("ToggleTheme");

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});


function toggleDropdown() {
  const menu = document.getElementById("dropdownContent");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Part 3: Form Validation with JavaScript
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  let isValid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters and include letters and numbers.";
    isValid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Final success message
  if (isValid) {
    document.getElementById("successMessage").textContent = "Form submitted successfully!";
  } else {
    document.getElementById("successMessage").textContent = "";
  }
});
