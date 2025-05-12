

const database= {}
let currentUser = null;

function capitalize(funct) {
    return funct.charAt(0).toUpperCase() + funct.slice(1).toLowerCase();
}
function dataChoose() {
    while (true) {
        let mode = prompt("Choose: signup / login / change-password / exit").trim().toLowerCase();
        if (mode === "signup") {
            alert("please fill the sign up form.");
            signup();

        } else if (mode === "login") {
            alert("Login selected.");
            login()
        } else if (mode === "change-password") {
            alert("Change password selected.");
            changePassword()
        } else if (mode === "exit") {
            alert("Exiting...");
            break;

        } else {
            alert("Invalid ");
        }
        
        
    }
    mode.push(database)
}
// step 2: create coditions to signup

function isValidName(name) {
    name = name.trim();
    if (name.length < 5 || /[^a-zA-Z\s]/.test(name)) return false;

    const parts = name.split(" ");
    return parts.every(part => /^[A-Z][a-z]+$/.test(capitalize(part)));
}

function isValidEmail(email) {
    email = email.trim().toLowerCase();
    if (email.includes(" ") || email.length < 10) return false;
    const atSplit = email.split("@");
    if (atSplit.length !== 2) return false;

    const exists = database.some(database => database.email === email);
    return !exists;
}

function isValidAge(age) {
    age = age.trim();
    if (!/^\d+$/.test(age)) return false;
    if (age.length === 0 || age.length >= 3) return false;
    return true;
}

function isValidPassword(password) {
    password = password.trim();
    if (password.length < 7 || /\s/.test(password)) return false;
    if (!/[@#\-\+\*\/]/.test(password)) return false;
    return true;
}

function signup() {
    let name = prompt("Enter your name").trim();
    if (!isValidName(name)) {
        alert("Invalid name. Use capital letters, no special characters, and at least 5 characters.");
        return;
    }
    name = name.split(" ").map(capitalize).join(" ");

    let email = prompt("Enter your email").trim().toLowerCase();
    if (!isValidEmail(email)) {
        alert("Invalid or already used email. Must contain '@', no spaces, and be unique.");
        return;
    }

    let age = prompt("Enter your age:").trim();
    if (!isValidAge(age)) {
        alert("Invalid age. Must be digits only and between 1-99.");
        return;
    }

    let password = prompt("entre password:").trim();
    if (!isValidPassword(password)) {
        alert("Invalid password. Must be at least 7 characters, no spaces, and contain at least one special character (@, #, -, +, *, /).");
        return;
    }

    let confirm = prompt("Confirm your password:").trim();
    if (password !== confirm) {
        alert("Passwords do not match. Signup blocked.");
        return;
    }

    // step3: Save database user
    database.push({ name, email, age, password });
    alert("Signup successful!");
}


// step4 : create conditions of log in
function login() {
    let email = prompt("Enter your email:").trim().toLowerCase();

    const user = database.find(user => user.email === email);
    if (!user) {
        alert("Email not found.");
        return;
    }

    let password = prompt("Enter your password:").trim();
    if (user.password !== password) {
        alert("Incorrect password.");
        return;
    }

    currentUser = user;
    alert(`Login successful! Welcome, ${user.name}.`);
}
// step5 : create conditions changed password


function changePassword() {
    let email = prompt("Enter your registered email:").trim().toLowerCase();
    const user = database.find(user => user.email === email);
    if (!user) {
        alert("Email not found.");
        return;
    }

    let oldPassword = prompt("Enter your current password:").trim();
    if (user.password !== oldPassword) {
        alert("Incorrect current password.");
        return;
    }

    let newPassword = prompt("Enter your new password:").trim();
    if (!isValidPassword(newPassword)) {
        alert("Invalid new password. Must be at least 7 characters, no spaces, and include one special character (@, #, -, +, *, /).");
        return;
    }

    let confirmPassword = prompt("Confirm your new password:").trim();
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match. Password change cancelled.");
        return;
    }

    user.password = newPassword;
    alert("Password successfully changed.");
}
console.log(database);





// step5 : After the user logs in, display the amount they have in their bank (user's choice) and offer them services:
//             # Logout:
//             - If the user chooses this option, they are logged out and offered the option, as at the beginning, to sign up, log in, or change the password.
            
//             # Withdraw Money:
//             - If the user chooses this option, they can withdraw an amount from their bank (not exceeding the available amount).
            
//             # Deposit Money:
//             - If the user chooses this option, they can deposit the desired amount (not exceeding 1000 dirhams).
            
//             # Take a Loan:
//             - If the user chooses this option, they can take a loan up to 20% of what they already have.
//             - They receive an additional 20%, but lose 10% with each login until reaching the amount of their loan.
            
//             # Invest:
//             - If the user chooses this option, they can invest any amount in the bank.
//             - Upon the next login, they will receive 20% of their investment each time until reaching 120% (earning 20% on each investment).
            
//             # History:
//             - Ability to view the entire transaction history.


