const themeBtn = document.getElementById('themeBtn');
const regForm = document.getElementById('regForm');
const message = document.getElementById('message');
const resetBtn = document.getElementById('resetBtn');
const outer = document.getElementById('outer');
const innerBtn = document.getElementById('innerBtn');

const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

regForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (username.length < 3) {
    showMessage("Username must be at least 3 characters", "red");
  } else if (!email.includes("@")) {
    showMessage("Invalid email format", "red");
  } else if (password.length < 6) {
    showMessage("Password must be at least 6 characters", "red");
  } else {
    showMessage("Registration successful!", "green");
  }
});

resetBtn.addEventListener('click', () => {
  regForm.reset();
  message.textContent = "";
});

function showMessage(text, color) {
  message.textContent = text;
  message.style.color = color;
}

usernameInput.addEventListener('input', () => {
  if (usernameInput.value.trim().length < 3) {
    showMessage("Username too short", "red");
  } else {
    message.textContent = "";
  }
});

emailInput.addEventListener('input', () => {
  if (!emailInput.value.includes("@")) {
    showMessage("Invalid email format", "red");
  } else {
    message.textContent = "";
  }
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.value.trim().length < 6) {
    showMessage("Password too short", "red");
  } else {
    message.textContent = "";
  }
});

// Event Bubbling & Capturing
innerBtn.addEventListener('click', () => {
  console.log("Button Clicked");
});

outer.addEventListener('click', () => {
  console.log("Div Clicked (Bubbling)");
});

outer.addEventListener('click', () => {
  console.log("Div Clicked (Capturing)");
}, { capture: true });
