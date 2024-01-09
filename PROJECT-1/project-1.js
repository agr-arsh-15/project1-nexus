function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === '') {
        alert('username is mandatory...');
        document.getElementById('username').focus();
        return false;
    } else if (password === '') {
        alert('password is mandatory...');
        document.getElementById('password').focus();
        return false;
    } else {
        ('')
    }  

    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

        if (username === storedUsername && password === storedPassword) {
            alert("Logged in successfully. THANK YOU!!!");

            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
        } else {
                alert("Invalid username or password");
        }
        
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
} 

function validateSignup() {
    var fullName = document.getElementById("fullName").value;
    var emailId = document.getElementById("emailId").value;
    var contactNo = document.getElementById("contactNo").value;
    var createPassword = document.getElementById("createPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (fullName === '') {
        alert('Full Name is mandatory...');
        document.getElementById('fullName').focus();
        return false;
    } else if (emailId === '') {
        alert('Email-id is mandatory...')
        document.getElementById('emailId').focus();
        return false;
    } else if (contactNo === '') {
        alert('Contact No. is mandatory...')
        document.getElementById('contactNo').focus();
        return false;
    } else if (createPassword === '') {
        alert('Creating password is mandatory...')
        document.getElementById('createPassword').focus();
        return false;
    } else if (confirmPassword === '') {
        alert('Confirming password is mandatory...')
        document.getElementById('confirmPassword').focus();
        return false;
    } else if (createPassword !== confirmPassword) {
        alert('Passwords do not match')
        document.getElementById('confirmPassword').focus();
        document.getElementById('confirmPassword').select();
        return false;
    } else {
        alert('Signed-up successfully. Login now!!')
    }
    localStorage.setItem("username", emailId);
    localStorage.setItem("password", confirmPassword);
    
    document.getElementById("fullName").value = "";
    document.getElementById("emailId").value = "";
    document.getElementById("contactNo").value = "";
    document.getElementById("createPassword").value = "";
    document.getElementById("confirmPassword").value = "";


}