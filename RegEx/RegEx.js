const regUsername = /^(?=.*[A-Z])[a-zA-Z][a-zA-Z0-9]{7,15}$/;

const regPass = /^#(?=.*[A-Z])(?=.*\d{2})[a-zA-Z0-9\-\!\@\#\$]{6,22}\$/;

function sendData(){
    var username = document.getElementById("username").value;
    var pswd = document.getElementById("pass").value;

    console.log("Username valid:", regUsername.test(username));
    console.log("Password valid:", regPass.test(pswd));
}