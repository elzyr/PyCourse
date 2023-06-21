function validateEmail(email) {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
}

function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) {
        strength += 1;
    }
    if (password.match(/[a-z]+/)) {
        strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
        strength += 1;
    }
    if (password.match(/[0-9]+/)) {
        strength += 1;
    }
    return strength;
}

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    emailError.textContent = "";
    passwordError.textContent = "";

    const email = emailInput.value.trim();
    if (!validateEmail(email)) {
        emailError.textContent = "Nieprawidłowy adres e-mail";
        return;
    }

    const password = passwordInput.value;
    const passwordStrength = checkPasswordStrength(password);
    const passwordStrengthElement = document.getElementById("password-strength");
    passwordStrengthElement.textContent = "";

    if (passwordStrength === 0) {
        passwordStrengthElement.classList.remove("weak", "medium", "strong");
    } else if (passwordStrength === 1) {
        passwordStrengthElement.classList.remove("medium", "strong");
        passwordStrengthElement.classList.add("weak");
        passwordStrengthElement.textContent = "Słabe hasło";
    } else if (passwordStrength === 2) {
        passwordStrengthElement.classList.remove("weak", "strong");
        passwordStrengthElement.classList.add("medium");
        passwordStrengthElement.textContent = "Średnie hasło";
    }
});