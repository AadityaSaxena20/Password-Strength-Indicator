const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  let strength = 0;

  // Criteria
  if (password.length >= 6) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  // Update UI
  if (password.length === 0) {
    strengthBar.className = "";
    strengthText.textContent = "Strength:";
  } else if (strength <= 1) {
    strengthBar.className = "weak";
    strengthText.textContent = "Strength: Weak";
  } else if (strength === 2 || strength === 3) {
    strengthBar.className = "medium";
    strengthText.textContent = "Strength: Medium";
  } else {
    strengthBar.className = "strong";
    strengthText.textContent = "Strength: Strong";
  }
});
