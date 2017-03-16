var jsonData = 'rest/playlist/getAllPlaylists'; //emulate error
var tableContents = $('.playlists-table');

$(document).ready(function () {
    getAllPlaylists();
});

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

function getAllPlaylists() {
    $(tableContents).children('tbody').html('');
    $.getJSON(jsonData, function (data, i) {
        $.each(data, function (i, item) {
            // console.log(item.id);
            $(tableContents).children('tbody').append('<tr><td><a data-id="' + item.playlistId + '" href="/AndroidTVWebClient/new-playlist.jsp?playlistId=' + item.playlistId + '"><span>' + item.name + '</span></a></td><td><div class="actions"><button class="btn btn-danger deletePlaylistAction" id="deletePlaylistButton"><span class="icon icon-uEA01-trash"></span></button></div></td></tr>');
        });
    })
        .complete(function () {
            $('.deletePlaylistAction').on('click', function () {
                console.log($(this).closest('tr').children('td').children('a').data('id'));
                deleteItem($(this).closest('tr').children('td').children('a').data('id'), $(this).closest('tr').children('td').children('a').children('span').text());
            });
        });
}


function deleteItem(itemId, itemName) {
    console.log("id to delete: " + itemId);
    $.ajax({
        url: "rest/playlist/deletePlaylist/" + itemId,
        type: "DELETE",
        success: function (result) {
            console.log("Item removed.");
            notifyGrowl('Playlist &#171;' + itemName + '&#187; has been successfuly deleted', 'success');
            getAllPlaylists();
        },
        error: function (result) {
            console.log("Error while getting response from web-service.");
        }
    });
}