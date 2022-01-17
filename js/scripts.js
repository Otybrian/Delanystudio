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
    $("#product-one").click(function () {
        $("#pro2").toggle();
        $("#product-one").toggle();
    });
    $("#pro2").click(function () {
        $("#product-one").toggle();
        $("#pro2").toggle();
    });

    $("#first").mouseenter(function () {
        $("#first").hide();
        $("#first-proj").show();
    });
    $("#first").mouseleave(function () {
        $("#first").show();
        $("#first-proj").hide();
    });

    $("#second").mouseenter(function () {
        $("#second").hide();
        $("#second-proj").show();
    });
    $("#second").mouseleave(function () {
        $("#second").show();
        $("#second-proj").hide();
    });
    $("#third").mouseenter(function () {
        $("#third").hide();
        $("#third-proj").show();
    });
    $("#third").mouseleave(function () {
      $("#third").show();
      $("#third-proj").hide();
    });
    $("#fourth").mouseenter(function () {
        $("#fourth").hide();
        $("#fourth-proj").show();
    });
    $("#fourth").mouseleave(function () {
      $("#fourth").show();
      $("#fourth-proj").hide();
    });
    $("#fifth").mouseenter(function () {
        $("#fifth").hide();
        $("#fifth-proj").show();
    });
    $("#fifth").mouseleave(function () {
      $("#fifth").show();
      $("#fifth-proj").hide();
    });
    $("#sixth").mouseenter(function () {
        $("#sixth").hide();
        $("#sixth-proj").show();
    });
    $("#sixth").mouseleave(function () {
      $("#sixth").show();
      $("#sixth-proj").hide();
    });
    $("#seventh").mouseenter(function () {
        $("#seventh").hide();
        $("#seventh-proj").show();
    });
    $("#seventh").mouseleave(function () {
      $("#seventh").show();
      $("#seventh-proj").hide();
    });
    $("#eighth").mouseenter(function () {
        $("#eighth").hide();
        $("#eighth-proj").show();
    });
    $("#eighth").mouseleave(function () {
      $("#eighth").show();
      $("#eighth-proj").hide();
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
