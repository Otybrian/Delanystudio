function sendMessage() {
    var inputtedName = document.getElementById("name").value;
    var inputtedEmail = document.getElementById("email").value;
    var inputtedMessage = document.getElementById("message").value;
    var givenName = validName();
    validEmail()
    validMessage();
    console.log(givenName);


};
