function alertNotification(state, text) {
    $('.info-container').append('<div class="alert ' + state + ' alert-dismissable">' + text + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true" class="icon icon-close"></span></button></div>')
};

function notifyGrowl(text, state) {
    $.notify({
        message: text
    }, {
        type: state,
        delay: 4000,
        animate: {
            enter: 'animated fadeInDown',
            exit: 'animated fadeOutUp'
        },
        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-growl alert-{0}" role="alert">' +
        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss"><span aria-hidden="true" class="icon icon-close"></span></button>' +
        '<span data-notify="icon"></span> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
};

var jsonData = 'rest/screen/getAllScreensAndPlaylists';
var tableContents = $('.screens-table');
$.getJSON(jsonData, function (data, i) {
    console.log("Data " + JSON.stringify(data));
    $.each(data.screens, function (i, item) {
        var playlistDropdownState = '';
        var playlistSetState = 'hide';
        if (item.playlist) {
            selectedPlaylist = item.playlist.playlistId;
        } else {
            selectedPlaylist = '0';
            playlistDropdownState = 'hide';
            playlistSetState = '';
        }
        ;
        var fileDropdownState = '';
        var fileResetState = '';
        var fileSetTimeState = 'hide';
        var classString = "form-confrol selectpicker " + playlistDropdownState;
        $(tableContents).children('tbody').append('<tr data-name="' + item.name + '" data-id="' + item.screenId + '">' +
            '<td><div class="screen-title-editable" data-title="' + item.name + '"><span>' + item.name + '</span></div></td>' +
            '<td class="playlist playlist-dropdown">' +
            '<select class="' + classString + '" data-selected="' + selectedPlaylist + '" >'+
            '<option value="disabled" disabled selected>Select Playlist&#8230;</option>'+
            '</select>' +
            '<button class="set-duration set-screen-action ' + playlistSetState + '"><span>Set Playlist</span></button>' +
            '</td>' +
            '<td>' +
            '<input type="time" id="timePicker"/>' +
            '</td>' +
            '<td>' +
            '<button class="btn btn-link btn-noreload"><span>Play now!</span></button>' +
            '</td>' +
            '</tr>');
        setListsActions();
    });

    $.each(data.playlists, function (i, item) {
        $(tableContents).children('tbody').children('tr').children('td').children('select').append('<option value="' + item.playlistId + '" id="' + item.playlistId + '">' + item.name + '</option>');
    });

    $.each($(tableContents).children('tbody').children('tr').children('.playlist-dropdown'), function (index, val) {
        var thisSelectedValue = $(this).children('select').data('selected');
        console.log(thisSelectedValue);
        $(this).children('select').children('option[id=' + thisSelectedValue + ']').prop('selected', 'selected');
    });
    $('.selectpicker').selectpicker('refresh');
    editableScreenName();
    setStartTime();


    //update playlist on screen
    $('.screens-table').find('.selectpicker').on('changed.bs.select', function (e) {
        var screenId = $(this).selectpicker().closest('tr').attr('data-id');
        var screenDefaultPlaylist = $(this).selectpicker('val');
        var screen = {screenId: Number(screenId), playlistId: Number(screenDefaultPlaylist)};
        console.log("Screen: " + JSON.stringify(screen));
        updateScreen(screen)
    });
})
    .success(function () {
        setListsActions();
        //alertNotification('alert-success', 'TV screens loaded successfuly.');
        $('.selectpicker').selectpicker('refresh');
    })
    .error(function () {
        alertNotification('alert-danger', 'An error was occurred while retrieving playlist data. Please try again later or <a href="mailto:adminmail@4tegroupe.com">contact</a> your administrator.')
    })
    .complete(function () {
        console.log("data load process and check complete");
    });

function setListsActions() {
    $('.set-screen-action').on('click', function () {
        $(this).parent('.playlist-dropdown').find('.bootstrap-select').removeClass('hide');
        $(this).addClass('hide');
    })
};


$('.tableContents').find('.selectpicker').on('changed.bs.select', function (e) {
    console.log($(this).val);
});

function editableScreenName() {
    $('.screen-title-editable').on('click', function(event) {
        event.preventDefault();
        if (!$(this).hasClass('edit')) {
            var thisContainer = $(this);
            var tempName = $(this).children('span').text();
            $(thisContainer).addClass('edit');
            $(thisContainer).html('<input type="text" value="'+tempName+'"/>');
            $(thisContainer).children('input').focus();
            applyScreenNameonBlur();
            applyScreenNameonEnter();
            setScreenName(tempName);
        };
    });
}

function setScreenName(name) {
    $('.screen-title-editable').children('input').on('keyup', function(){
        if ($(this).val() != '') {
            $(this).parent('.screen-title-editable').attr('data-title', $(this).val());
        } else {
            $(this).parent('.screen-title-editable').attr('data-title', name);
        }
    });
}

function applyScreenNameonBlur() {
    $('.screen-title-editable').children('input').on('blur', function(event) {
        var tempInputVal = $(this).parent('.screen-title-editable').attr('data-title');
        var thisContainer = $(this).parent('.screen-title-editable');
        var screenId = $(this).parent('.screen-title-editable').closest('tr').attr('data-id');
        $(thisContainer).removeClass('edit');
        $(thisContainer).html('<span>'+tempInputVal+'</span>');
        updateScreenName(screenId, tempInputVal)
    })
}

function applyScreenNameonEnter() {
    $('.screen-title-editable').children('input').on('keypress', function(event) {
        if (event.which == 13) {
            var tempInputVal = $(this).parent('.screen-title-editable').attr('data-title');
            var thisContainer = $(this).parent('.screen-title-editable');
            var screenId = $(this).parent('.screen-title-editable').closest('tr').attr('data-id');
            $(thisContainer).removeClass('edit');
            $(thisContainer).html('<span>'+tempInputVal+'</span>');
            updateScreenName(screenId, tempInputVal)
        };
    })
}

function updateScreenName(screenId, screenName){
    var screen = {screenId: screenId, name: screenName};
    console.log("Screen to update: " + JSON.stringify(screen));
    updateScreen(screen);
}

function setStartTime() {
    $('#timePicker').on('change', function(event) {
        var screenId = $(this).closest('tr').attr('data-id');
        var startTime = $(this).val();
        var timeArray = startTime.split(":")
        var playlistStartTime = timeArray[0] * 60 + timeArray[1];//in minutes
        var screen = {screenId: screenId, playlistStartTime: playlistStartTime};
        console.log("Update info: "  + JSON.stringify(screen));
        updateScreen(screen);
    })
}

function updateScreen(screen){
    $.ajax({
        url: "rest/screen/updateScreen",
        type: "POST",
        dataType: "json",
        data: JSON.stringify(screen),
        contentType: "application/json",
        success: function (result) {
            notifyGrowl('TV screen has been successfully updated', 'success');
        },
        error: function (result) {
            console.log("Error while getting response from web-service.");
        }
    });
}


