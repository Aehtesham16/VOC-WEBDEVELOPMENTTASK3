const passwordInput = document.getElementById('password');
const passwordStrength = document.getElementById('password-strength');

passwordInput.addEventListener('input', checkPasswordStrength);

function checkPasswordStrength() {
    const password = passwordInput.value;
    const strengthIndicator = getPasswordStrength(password);

    passwordStrength.textContent = `Password Strength: ${strengthIndicator}`;
    passwordStrength.style.color = getColorForStrength(strengthIndicator);
}

function getPasswordStrength(password) {
    // Implement your password strength logic here.
    // You can use regex, length, and other criteria to determine strength.
    // Return 'Weak', 'Medium', or 'Strong' accordingly.
    return 'Weak';
}

function getColorForStrength(strength) {
    switch (strength) {
        case 'Weak':
            return '#FF0000'; // Red for weak passwords
        case 'Medium':
            return '#FFA500'; // Orange for medium passwords
        case 'Strong':
            return '#008000'; // Green for strong passwords
        default:
            return '#888'; // Default color
    }
}
