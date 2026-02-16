const passwordBox = document.getElementById("password");
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const chars = "!@#$%^&*()<>?[]{}:';,./\|";

const allChars = uppercase + lowercase + numbers + chars;

function createPassword() {
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += chars[Math.floor(Math.random() * chars.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value = password
}

async function copyPassword() {
    try {
        await passwordBox.select();
        await document.execCommand("copy")
        alert("Password Copied: " + passwordBox.value);
    } catch (err) {
        console.log("Failed to copy: ", err);
    }

}