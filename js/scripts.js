function sendMessage() {
    var inputtedName = document.getElementById("name").value;
    var inputtedEmail = document.getElementById("email").value;
    var inputtedMessage = document.getElementById("message").value;
    var givenName = validName();
    validEmail()
    validMessage();
    console.log(givenName);


    function validName() {
        if (inputtedName == "") {
            alert("please input your name!");
            document.getElementById("name").focus();
            return false;
        }
    }

    function validEmail() {
        if (inputtedEmail == "") {
            alert("please enter your email address!");
            document.email.email.focus();
            return false;
        }
    }

    function validMessage() {
        if (inputtedMessage == "") {
            alert("kindly add a message!");
            document.message.message.focus();
            return true;
        }
    }


};
