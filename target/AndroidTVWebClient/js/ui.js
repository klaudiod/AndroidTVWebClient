$(document).ready(function() {

    function isElementExist(selector) {
        return !!$(selector).size();
    }

    if (isElementExist('.login-form')) {

        $('.login-form').children('.submit-button').children('.btn').on('click', function(event) {
            $.each($('.login-form'), function(index, innerForm) {
                $('.form-group', innerForm).each(function() {
                    if ($(this).children('input').val() == '') {
                        event.preventDefault();
                        console.log("empty " + $(this).children('input').attr('id'));
                        if ($(this).children('input').attr('#password')) {
                            showPopoverError($(this).children('input'), 'Enter password');
                        };
                    };
                });
            })
        });
        setTimeout(function() {
            $('.login-form').children('.form-group').children('#password').focus();
        }, 1300);
    }

    function showPopoverError(thisObject, text) {
        thisObject
            .attr('data-toggle', 'popover')
            .attr('data-content', text);
        thisObject.popover('show');
        thisObject.popover('show');
        setTimeout(function() {
            $('[data-toggle="popover"]').popover('destroy');
        }, 10000); //Destroy all popovers in 10 seconds
    };

    function notifyGrowl(text, state) {
        $.notify({
            message: text
        },{
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

    $('.login-form').children('.form-group').children('input').on('keyup', function(event) {
        // event.preventDefault();
        $(this).popover('destroy');
    });

    if ($('.floatlabel').children('.formfield').val() != '') {
        $(this).parent('.floatlabel').addClass('open');
    };


    $('.floatlabel').children('.formfield').on('focus', function(event) {
        event.preventDefault();
        $(this).parent('.floatlabel').addClass('open');
    });

    $('.floatlabel').children('.formfield').on('blur', function(event) {
        event.preventDefault();
        if ($(this).val() == '') {
            $(this).parent('.floatlabel').removeClass('open');
        };
    });


    $('.btn-switch-view').children('.btn').on('click', function(event) {
        event.preventDefault();
        if ($(this).children('input').attr('id') == 'gridView') {
            $('.files-view')
                .removeClass('list');
        } else {
            $('.files-view')
                .addClass('list');
        };
    });

    $('.files-view .file').children('.item').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('selected');

        $.each($('.files-view'), function(i, filesView) {
            $('section', filesView).each(function() {
                $.each($(this), function(i, fileItem) {
                    $('.file', fileItem).each(function() {
                        $.each($(this), function(i, fileItemContents) {
                            $('.item.selected', fileItemContents).each(function() {
                                // console.log($(this).length);
                                if ($(this).length) {
                                    $('#filesDialog').find('.modal-footer').find('button')
                                        .removeClass('disabled')
                                        .children('span').text('Continue');
                                    // $('#filesDialog').find('.modal-footer').find('button').attr('data-dismiss', 'modal');
                                    $('.selected-files').removeClass('hide');
                                    // $('.new-playlist-footer-container')
                                    // .find('.btn').children('.text').text('Save Playlist');
                                } else {
                                    console.log("nooo");
                                };
                            });
                        });
                    });
                });
            });
        });
    });

    $(window).on('load resize', function() {
        // $('.files-view.grid').children('.item').css('height', $(this).outerHeight());
        if ($('body').hasClass('modal-open')) {
            setModalBodyHeight();
        }
    });

    $('body').css('position', 'relative');

    function setModalBodyHeight(){
        $(this).find('.modal-body').css('height', $(window).height() - ($(this).find('.modal-header').outerHeight() + $(this).find('.modal-footer').outerHeight()));
    };

    $('#filesDialog').on('shown.bs.modal', function() {
        setModalBodyHeight();
    });

    $('.selectpicker').selectpicker({
        // style: 'btn-info'
    });

    // Sortable items on favorite list
    if (isElementExist('.playlist-items-container')) {
        // $('.customer-favorites-items-container').draggable();
        $(".playlist-items-container").sortable({
            handle: ".btn-draggable",
            placeholder: "playlist-items-placeholder",
            scroll: true,
            scrollSpeed: 20,
            axis: "y"
        });


        // $( ".customer-favorites-items-container" ).disableSelection();
    };



    // function enableSavePlaylistBtn(){
    // $('#filesDialog').on('hide.bs.dropdown', function(event) {
    //     $('.new-playlist-footer-container .new-playlist-footer').children('#savePlaylist').removeClass('hide');
    // });
    // }
});
