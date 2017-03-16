var login = "admin";
var password = "";

function loginAction(passwordValue) {
    var data = {"login": login, "password": passwordValue};
    console.log("Data " + JSON.stringify(data));
    $.ajax({
        url: "rest/authorization/login",
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function (result) {
            var isLoggedIn = JSON.stringify(result);
            if (isLoggedIn === 'true') {
                console.log("Login successful");
                window.location.href = "playlists.html";
            } else {
                if (password === '') {
                    showPopoverError($('.login-form').children('.form-group').children('#password'), 'Enter password');
                } else {
                    showPopoverError($('.login-form').children('.form-group').children('#password'), 'Wrong password');
                }

            }
        },
        error: function (result) {
            console.log("Error while getting response from web-service.");
        }
    });
}

$("#loginButton").click(function (e) {
    e.preventDefault();
    password = $('.login-form').children('.form-group').children('#password').val();
    loginAction(password);
});

$('.login-form').children('.form-group').children('input').keyup(function (event) {
    password = $('.login-form').children('.form-group').children('#password').val();
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        loginAction(password);
    }
});

function showPopoverError(thisObject, text) {
    thisObject
        .attr('data-toggle', 'popover')
        .attr('data-content', text);
    thisObject.popover('show');
    setTimeout(function () {
        $('[data-toggle="popover"]').popover('destroy');
    }, 10000); //Destroy all popovers in 10 seconds
};

$("#logoutButton").on('click', function (e) {
    e.preventDefault();
    $.ajax({
        url: "rest/authorization/logout",
        type: "GET",
        success: function (result) {
            window.location.href = "index.html";
        },
        error: function (result) {
            console.log("Error while getting response from web-service.");
        }
    });
});

