$(document).ready(function () {
    $("#design-one").click(function () {
        $("#pro").toggle();
        $("#design-one").toggle();
    });
    $("#pro").click(function () {
        $("#design-one").toggle();
        $("#pro").toggle();
    });

    $("#development-one").click(function () {
        $("#pro1").toggle();
        $("#development-one").toggle();
    });
    $("#pro1").click(function () {
        $("#development-one").toggle();
        $("#pro1").toggle();
    });


});



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

    alert("Hello " + document.getElementById("name").value + ', We are glad you reached out to us. Thank you for your message. We shall get back to you soonest!');
};
