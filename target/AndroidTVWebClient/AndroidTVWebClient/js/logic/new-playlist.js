$(document).ready(function () {

    var scrollAmount = $(document).height() - $('.section.content').height();
    var urlParams = window.location.search;
    var playlistName = '';
    var playlist;
    var fileList = [];
    var currentFolderToUpload = "content";


    //link manipulation
    $('.new-playlist-footer').children('.add-line-link').on('click', function(event){
        event.preventDefault();
        if (!$('.playlist-items-container').children('.empty').length) {
            appendLink();
            dropdownDurations();
            dropdownDurationClickInint();
            setDurationAction();
            applyVideoLink();
            deleteFileAction();
            applyValueOnBlur();
            resetDuration();
            showSaveButton();
            duplicateFile();
            $("body").animate({
                scrollTop: scrollAmount
            }, function(){
                scrollAmount = ($(document).height() - $('.section.content').height());
                highlightAppendedLink($('.playlist-items-container').children('.empty'));
            });
        } else {
            highlightAppendedLink($('.playlist-items-container').children('.empty'));
        };
        checkVideoLinkName();
    });

    $('.new-playlist-footer').children('.add-weather-link').on('click', function(event){
        event.preventDefault();
        addWeatherLink();
        scrollAmount = ($(document).height() - $('.section.content').height());
        $('.playlist-items-container').children('.new').removeClass('new');
        deleteFileAction();
        dropdownDurations();
        dropdownDurationClickInint();
        setDurationAction();
        applyValueOnBlur();
        resetDuration();
    });

    $('.new-playlist-footer').children('.add-sport-link').on('click', function(event){
        event.preventDefault();
        addSportLink();
        scrollAmount = ($(document).height() - $('.section.content').height());
        $('.playlist-items-container').children('.new').removeClass('new');
        deleteFileAction();
        dropdownDurations();
        dropdownDurationClickInint();
        setDurationAction();
        applyValueOnBlur();
        resetDuration();
    });

    $('.new-playlist-footer').children('.add-life-link').on('click', function(event){
        event.preventDefault();
        addLifeLink();
        scrollAmount = ($(document).height() - $('.section.content').height());
        $('.playlist-items-container').children('.new').removeClass('new');
        deleteFileAction();
        dropdownDurations();
        dropdownDurationClickInint();
        setDurationAction();
        applyValueOnBlur();
        resetDuration();
    });

    function appendLink(){
        $('.selected-files').removeClass('hide');
        $('.playlist-items-container').append('<tr class="link empty highlight" data-url="" data-minutes="0" data-seconds="0">'+
            '<td class="video-title">'+
            '<div class="btn-draggable ui-sortable-handle"></div>'+
            '<input placeholder="Enter link to the Video">'+
            '<button class="applyLinkAction apply-button hide"><span>Apply</span></button>'+
            '</td>'+
            '<td>'+
            '<div class="dropdown dropdown-duration hide minutes">'+
            '<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
            '<span class="count">0</span> minutes<span class="caret"></span>' +
            '</button>'+
            '<div class="dropdown-menu" aria-labelledby="dLabel">'+
            '<input type="text form-control">'+
            '</div>'+
            '</div>'+
            '<div class="dropdown dropdown-duration hide seconds">'+
            '<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
            '<span class="count">0</span> seconds<span class="caret"></span>'+
            '</button>'+
            '<div class="dropdown-menu" aria-labelledby="dLabel">'+
            '<input type="text form-control">'+
            '</div>'+
            '</div>'+
            '<button class="reset reset-duration-action hide"><span>Reset</span></button>' +
            '<button class="set-duration set-duration-action"><span>Set Duration</span></button>'+
            '<div class="actions">'+
            '<button class="btn btn-link btn-noreload btn-duplicate-action">' +
            '<span>Duplicate</span>' +
            '</button>' +
            '<button class="btn btn-danger deleteFileAction"><span class="icon icon-uEA01-trash"></span></button>'+
            '</div>'+
            '</td>'+
            '</tr>');
    }

    function addWeatherLink(){
        $('.selected-files').removeClass('hide');
        $('.playlist-items-container').append('<tr class="link empty new" data-url="forte.weather" data-minutes="0" data-seconds="0">'+
            '<td class="video-title">' +
            '<div class="btn-draggable ui-sortable-handle"></div>' +
            '<input type="text" value="forte.weather" disabled="true"/>' +
            '</td>' +
            '<td>' +
            '<div class="dropdown dropdown-duration hide minutes">'+
            '<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
            '<span class="count">0</span> minutes<span class="caret"></span>' +
            '</button>'+
            '<div class="dropdown-menu" aria-labelledby="dLabel">'+
            '<input type="text form-control">'+
            '</div>'+
            '</div>'+
            '<div class="dropdown dropdown-duration hide seconds">'+
            '<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
            '<span class="count">0</span> seconds<span class="caret"></span>'+
            '</button>'+
            '<div class="dropdown-menu" aria-labelledby="dLabel">'+
            '<input type="text form-control">'+
            '</div>'+
            '</div>'+
            '<button class="reset reset-duration-action hide">' +
            '<span>Reset</span>' +
            '</button>' +
            '<button class="set-duration set-duration-action">' +
            '<span>Set Duration</span>' +
            '</button>'+
            '<div class="actions">' +
            '<button class="btn btn-danger deleteFileAction"><span class="icon icon-uEA01-trash"></span></button>' +
            '</div>' +
            '</td>' +
            '</tr>');

        var tempLink = $(this).parent('.video-title').children('input').val();
        $(this).parent('.video-title').parent('tr').attr('data-url', tempLink);
        $(this).parent('.video-title').parent('.link').removeClass('link');
        $(this).parent('.video-title').children('input').replaceWith(tempLink);
        $(this).parent('.video-title').children('.apply-button').remove();
        deleteFileAction();
    }

    function addSportLink(){
        $('.selected-files').removeClass('hide');
        $('.playlist-items-container').append('<tr class="link empty new" data-url="UsatodaycomSports-TopStories.rss" data-minutes="0" data-seconds="0">'+
            '<td class="video-title">' +
            '<div class="btn-draggable ui-sortable-handle"></div>' +
            '<input type="text" value="UsatodaycomSports-TopStories" disabled="true"/>' +
            '</td>' +
            '<td>' +
            '<div class="dropdown dropdown-duration hide minutes">'+
            '<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
            '<span class="count">0</span> minutes<span class="caret"></span>' +
            '</button>'+
            '<div class="dropdown-menu" aria-labelledby="dLabel">'+
            '<input type="text form-control">'+
            '</div>'+
            '</div>'+
            '<div class="dropdown dropdown-duration hide seconds">'+
            '<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
            '<span class="count">0</span> seconds<span class="caret"></span>'+
            '</button>'+
            '<div class="dropdown-menu" aria-labelledby="dLabel">'+
            '<input type="text form-control">'+
            '</div>'+
            '</div>'+
            '<button class="reset reset-duration-action hide">' +
            '<span>Reset</span>' +
            '</button>' +
            '<button class="set-duration set-duration-action">' +
            '<span>Set Duration</span>' +
            '</button>'+
            '<div class="actions">' +
            '<button class="btn btn-danger deleteFileAction"><span class="icon icon-uEA01-trash"></span></button>' +
            '</div>' +
            '</td>' +
            '</tr>');
        var tempLink = $(this).parent('.video-title').children('input').val();
        $(this).parent('.video-title').parent('tr').attr('data-url', tempLink);
        $(this).parent('.video-title').parent('.link').removeClass('link');
        $(this).parent('.video-title').children('input').replaceWith(tempLink);
        $(this).parent('.video-title').children('.apply-button').remove();
        deleteFileAction();
    }

    function addLifeLink(){
        $('.selected-files').removeClass('hide');
        $('.playlist-items-container').append('<tr class="link empty new" data-url="Usatoday-LifeTopStories.rss" data-minutes="0" data-seconds="0">'+
            '<td class="video-title">' +
            '<div class="btn-draggable ui-sortable-handle"></div>' +
            '<input type="text" value="Usatoday-LifeTopStories" disabled="true"/>' +
            '</td>' +
            '<td>' +
            '<div class="dropdown dropdown-duration hide minutes">'+
            '<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
            '<span class="count">0</span> minutes<span class="caret"></span>' +
            '</button>'+
            '<div class="dropdown-menu" aria-labelledby="dLabel">'+
            '<input type="text form-control">'+
            '</div>'+
            '</div>'+
            '<div class="dropdown dropdown-duration hide seconds">'+
            '<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
            '<span class="count">0</span> seconds<span class="caret"></span>'+
            '</button>'+
            '<div class="dropdown-menu" aria-labelledby="dLabel">'+
            '<input type="text form-control">'+
            '</div>'+
            '</div>'+
            '<button class="reset reset-duration-action hide">' +
            '<span>Reset</span>' +
            '</button>' +
            '<button class="set-duration set-duration-action">' +
            '<span>Set Duration</span>' +
            '</button>'+
            '<div class="actions">' +
            '<button class="btn btn-danger deleteFileAction"><span class="icon icon-uEA01-trash"></span></button>' +
            '</div>' +
            '</td>' +
            '</tr>');
        var tempLink = $(this).parent('.video-title').children('input').val();
        $(this).parent('.video-title').parent('tr').attr('data-url', tempLink);
        $(this).parent('.video-title').parent('.link').removeClass('link');
        $(this).parent('.video-title').children('input').replaceWith(tempLink);
        $(this).parent('.video-title').children('.apply-button').remove();
        deleteFileAction();
    }

    function checkVideoLinkName(){
        $('.playlist-items-container').children('tr.link').children('td.video-title').children('input').on('keyup', function(event) {
            event.preventDefault();
            if ($(this).val() != '') {
                $(this).parent('.video-title').parent('.link').removeClass('empty');
                $(this).next('.apply-button').removeClass('hide');
            } else {
                $(this).next('.apply-button').addClass('hide');
                $(this).parent('.video-title').parent('.link').addClass('empty');
            };
        });
    }

    function applyVideoLink(){
        $('.applyLinkAction').on('click', function(event){
            event.preventDefault();
            console.log($(this).parent('.video-title').children('input').val());
            var tempLink = $(this).parent('.video-title').children('input').val();
            $(this).parent('.video-title').parent('tr').attr('data-url', tempLink);
            $(this).parent('.video-title').parent('.link').removeClass('link');
            $(this).parent('.video-title').children('input').replaceWith(tempLink);
            $(this).parent('.video-title').children('.apply-button').remove();
        });
    }

    function highlightAppendedLink(element){
        $(element).addClass('highlight');
        $(element).children('td').children('input').focus();
        setTimeout(function() {
            $('.playlist-items-container').children('tr.link').removeClass('highlight');
            $(element).removeClass('highlight');
        }, 1500);
    }

    function dropdownDurations(){
        $('.dropdown-duration').on('hidden.bs.dropdown', function(event) {
            if ($(this).children('.dropdown-menu').children('input').val() != '') {
                $(this).children('button').children('.count').text($(this).children('.dropdown-menu').children('input').val());
            } else {
                $(this).children('button').children('.count').text('0');
            };
        });

        $('.set-duration-action').on('click', function(event) {
            event.preventDefault();
            $(this).parent('td').children('.dropdown').removeClass('hide');
            $(this).parent('td').children('.reset-duration-action').removeClass('hide');
            $(this).addClass('hide');
        });
    }
    //end link manipulations


    $("#createPlaylist").click(function () {
        playlistName = document.getElementById("playlistName").value;
        $($(this)).addClass('hide');
        $('.new-playlist-footer-container');
    });


    $('.playlist-name').find('#playlistName').on('keyup', function () {
        if ($('.selected-files').hasClass('hide')) {
            console.log('no files');
        } else {
            console.log('files exists');
            if ($(this).val().length) {
                $('.new-playlist-footer').find('#savePlaylist').removeClass('hide');
                $('.new-playlist-footer').find('#enterPlaylistName').addClass('hide');
            } else {
                $('.new-playlist-footer').find('#savePlaylist').addClass('hide');
                $('.new-playlist-footer').find('#enterPlaylistName').removeClass('hide');
            };
        };
    });


    function showSaveButton(){
        var playlistNameTemp = $('.playlist-name').find('#playlistName').val();
        if (playlistNameTemp == '') {
            $('.new-playlist-footer').find('#savePlaylist').addClass('hide');
            $('.new-playlist-footer').find('#enterPlaylistName').removeClass('hide');
        } else {
            $('.new-playlist-footer').find('#savePlaylist').removeClass('hide');
            $('.new-playlist-footer').find('#enterPlaylistName').addClass('hide');
        };
    }


    $("#continueButton").click(function () {
        showSaveButton();
        var tableContents = $('.files-table');

        $.each($('.files-view').children('section').children('div.file').children('div.item.selected'), function (i, file) {
            console.log("selected: " + $(this).attr('data-folder') + "/" + $(this).attr('data-file'));//data-file="' + file + '"data-folder=
            fileList.push({filename: $(this).attr('data-folder') + "/" + $(this).attr('data-file')});
            $(tableContents).children('tbody').append('<tr data-minutes="0" data-seconds="0" data-folder="' +
                $(this).attr('data-folder') + '" data-file="' + $(this).attr('data-file') + '" id="' + file.mediaId + '">' +
                '<td class="video-title"><div class="btn-draggable">' +
                '</div>' + file.innerText +
                '</td>' +
                '<td>' +
                '<div class="dropdown dropdown-duration hide minutes">' +
                '<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                '<span class="count">0</span> minutes<span class="caret"></span>' +
                '</button>' +
                '<div class="dropdown-menu" aria-labelledby="dLabel">' +
                '<input type="text form-control">' +
                '</div>' +
                '</div>' +
                '<div class="dropdown dropdown-duration hide seconds">' +
                '<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                '<span class="count">0</span> seconds<span class="caret"></span>' +
                '</button>' +
                '<div class="dropdown-menu" aria-labelledby="dLabel">' +
                '<input type="text form-control" >' +
                '</div>' +
                '</div>' +
                '<button class="reset reset-duration-action hide"><span>Reset</span></button>' +
                    <!-- Set time -->
                '<button class="set-duration set-duration-action"><span>Set Duration</span></button>' +
                '<div class="actions">' +
                '<button class="btn btn-link btn-noreload btn-duplicate-action">' +
                '<span>Duplicate</span>' +
                '</button>' +
                '<button class="btn btn-danger deleteFileAction">' +
                '<span class="icon icon-uEA01-trash"></span>' +
                '</button>' +
                '</div>' +
                '</td>' +
                '</tr>');
        });
        setDurationAction();
        dropdownDurationClickInint();
        applyValueOnBlur();
        resetDuration();
        deleteFileAction();
        duplicateFile();
    });


    //delete media from playlist
    function deleteFileAction() {
        $('.deleteFileAction').on('click', function (event) {
            console.log("delete " + $(this).closest('tr').attr('id'));
            deleteFile($(this).closest('tr').attr('id'), $(this).closest('tr'));
        });
    };

    function deleteFile(fileName, deletedRow) {
        $(deletedRow).remove();
    };
    //end delete media from playlist


    //duration manipulation
    function dropdownDurationClickInint() {
        $('.dropdown-duration').on('shown.bs.dropdown', function (event) {
            event.preventDefault();
            countChange($(this));
            enterValue($(this));
        });
    };

    function countChange(thisObject) {
        $(thisObject).children('.dropdown-menu').children('input')
            .focus()
            .val($(thisObject).children('button').children('.count').text());
    };

    function enterValue(thisInput) {
        $(thisInput).children('.dropdown-menu').children('input').on('keydown', function (e) {
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                (e.keyCode >= 35 && e.keyCode <= 40)) {
                return;
            }
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            };
        });

        $(thisInput).children('.dropdown-menu').children('input').on('keypress', function (e) {
            if (e.which == 13) {
                // console.log($(this).val());
                if ($(this).val() != '') {
                    $(this).parent('.dropdown-menu').parent('.dropdown-duration').children('button').children('.count').text($(this).val());
                    if ($(this).parent('.dropdown-menu').parent('.dropdown-duration').hasClass('minutes')) {
                        $(this).parent('.dropdown-menu').parent('.dropdown-duration').parent('td').parent('tr').attr('data-minutes', $(this).val());
                    }
                    if ($(this).parent('.dropdown-menu').parent('.dropdown-duration').hasClass('seconds')) {
                        $(this).parent('.dropdown-menu').parent('.dropdown-duration').parent('td').parent('tr').attr('data-seconds', $(this).val());
                    }
                } else {
                    $(this).parent('.dropdown-menu').parent('.dropdown-duration').children('button').children('.count').text('0');
                };
                $(this).closest('.dropdown-duration').removeClass('open');
            };
            if (e.which == 9) {
                e.preventDefault();
                console.log("tab pressed");
            };
        });
    };

    function setDurationAction() {
        $('.set-duration-action').on('click', function (event) {
            event.preventDefault();
            $(this).parent('td').children('.dropdown').removeClass('hide');
            $(this).parent('td').children('.reset-duration-action').removeClass('hide');
            $(this).addClass('hide');
        });
    };

    function applyValueOnBlur() {
        $('.dropdown-duration').on('hidden.bs.dropdown', function (event) {
            var thisInput = $(this).children('.dropdown-menu').children('input');
            if ($(this).children('.dropdown-menu').children('input').val() != '') {
                console.log(thisInput);
                $(this).children('button').children('.count').text($(this).children('.dropdown-menu').children('input').val());
                if ($(thisInput).parent('.dropdown-menu').parent('.dropdown-duration').hasClass('minutes')) {
                    $(thisInput).parent('.dropdown-menu').parent('.dropdown-duration').parent('td').parent('tr').attr('data-minutes',
                        $(this).children('.dropdown-menu').children('input').val());
                }
                if ($(thisInput).parent('.dropdown-menu').parent('.dropdown-duration').hasClass('seconds')) {
                    $(thisInput).parent('.dropdown-menu').parent('.dropdown-duration').parent('td').parent('tr').attr('data-seconds',
                        $(this).children('.dropdown-menu').children('input').val());
                }
            } else {
                $(this).children('button').children('.count').text('0');
            };
        });
    };

    function resetDuration() {
        $('.reset-duration-action').on('click', function () {
            $(this).closest('td').find('.dropdown-duration').find('.count').text('0');
            $(this).closest('td').parent('tr')
                .attr('data-minutes', '0')
                .attr('data-seconds', '0');
            //$(this).closest('td').find('.dropdown-duration').find('.dropdown-menu').find('input').value = "";
            $(this).addClass('hide');
            $(this).closest('td').find('.dropdown-duration').addClass('hide');
            $(this).next('.set-duration-action').removeClass('hide');
        });
    };
    //end duration manipulation


    $('#enterPlaylistName').on('click', function () {
        $("body").animate({scrollTop: 0}, "slow");
        setTimeout(function () {
            $('.playlist-name').children('.form-group').addClass('animated shake');
            $('.playlist-name').find('#playlistName').focus();
        }, 700);
        setTimeout(function () {
            $('.playlist-name').children('.form-group').removeClass('animated shake');
        }, 1700);
    });

    $("#savePlaylist").click(function () {
        playlistName = document.getElementById("playlistName").value;
        fileList = [];

        $(".files-table").children('tbody').children('tr').each(function (i) {
            var folder = $(this).attr('data-folder');
            var file = $(this).attr('data-file');
            var minutes = parseInt($(this).attr('data-minutes'));
            var seconds = parseInt($(this).attr('data-seconds'));
            if (folder === 'content') {
                fileList.push({
                    "filename": file,
                    "sequenceNumber": i,
                    "duration": parseInt((minutes * 60 + seconds))
                });
            } else if(folder == undefined){
                fileList.push({
                    "filename": $(this).attr('data-url'),
                    "sequenceNumber": i,
                    "duration": parseInt((minutes * 60 + seconds))
                });
            } else {
                fileList.push({
                    "filename": folder + "/" + file,
                    "sequenceNumber": i,
                    "duration": parseInt((minutes * 60 + seconds))
                });
            }
        });

        playlist = {name: playlistName, media: fileList};
        console.log("New playlist: " + JSON.stringify(playlist));
        if (urlParams === '') {
            console.log("new");
            $.ajax({
                url: "rest/playlist/createPlayList",
                type: "POST",
                dataType: "json",
                data: JSON.stringify(playlist),
                contentType: "application/json",
                success: function (result) {
                    console.log("Result:" + JSON.stringify(result));
                    window.location.href = "playlists.html"
                },
                error: function (result) {
                    console.log("Error while getting response from web-service.");
                }
            });
        }
    });

    function setModalHeight(){
        var thisModal = $('#filesDialog');
        $(thisModal).find('.modal-body').css('height', $(window).height() - ($(this).find('.modal-header').outerHeight() + $(this).find('.modal-footer').outerHeight()));
        $('.fileupload-flyout').height($(window).height() - ($(this).find('.modal-header').outerHeight() + $(this).find('.modal-footer').outerHeight()));
    }

    $(window).on('load resize', function() {
        setModalHeight();
    });

    if (isElementExist('#filesDialog')) {
        $('#filesDialog').on('shown.bs.modal', function () {
            $(this).find('.modal-body').css('height', $(window).height() - ($(this).find('.modal-header').outerHeight() + $(this).find('.modal-footer').outerHeight()));
            // console.log('files dialog modal opened');
            var playlistName = document.getElementById("playlistName").value;
            setFiveViewWidth();
        });
        // setFiveViewWidth();
        var playlistName = document.getElementById("playlistName").value;
        var playlistContentData = 'rest/media/getContentDirectoryStructure';
        var playlistContents = $('#filesDialog').find('.modal-body');

        function ItemOutputParse(title, file, domOutput) {
            var extensionOutputType = 'none';
            var fileName = file.substr(0, file.lastIndexOf('.')) || file;
            //console.log("fileName " + fileName);
            var extension = file.substr((file.lastIndexOf('.') + 1));
            switch (extension) {
                case 'jpg':
                case 'png':
                case 'gif':
                    extensionOutputType = 'image';
                    break;
                case 'zip':
                case 'rar':
                    extensionOutputType = 'archive';
                    break;
                case 'xls':
                case 'xlsx':
                case 'pdf':
                    extensionOutputType = 'document';
                    break;
                case 'mp4':
                case 'avi':
                    extensionOutputType = 'video';
                    break;
                case 'mp3':
                    extensionOutputType = 'audio';
                    break;
                default:
                    console.log('unknown file type');
            };

            var pathToImage;
            if(title === 'content'){
                pathToImage = "content/" + file;
            } else {
                pathToImage = "content/" + title + "/" + file;
            }

            //var preview;
            //if(extensionOutputType === 'image'){
            //    //preview = '<div class="preview" style="background-image: url(' + "../AndroidTVWebClient/img/" + pathToImage + ');"></div>';
            //    preview = '<div class="preview" style="background-image: url(android-tv/' + pathToImage + ');"></div>';
            //} else {
            //    preview = '<div class="preview"></div>';
            //}
            console.log(fileName + ', ' + extensionOutputType);
            $(domOutput).append('<div class="file"><div class="item '  + extensionOutputType + '" data-file="' + file + '"data-folder="' + title + '">' +
                '<div class="preview"></div>' +
                '<div class="icon"></div><span class="caption">' + file + '</span></div></div>');
        };

        $.getJSON(playlistContentData, function (data, i) {
            console.log("Received data: " + data);
            $.each(data, function (title, data) {
                console.log("title: " + title + ", data: " + data);
                $('#foldersNav').children('ul').append('<li class="folder" data-folder="' + title + '"><a href="#' + title + '"><span>' + title + '</span></a>' +
                    '<button class="upload-button" type="button" id="upload-button" title="Upload File">' +
                    '<span class="icon icon-upload"></span>' +
                    '</button>' +
                    '</li>');
                $('.files-view').append('<section id ="' + title + '"><h4>' + title + '</h4></section>');
                $.each(data, function (i, item) {
                    ItemOutputParse(title, item, $('.files-view').children('section[id=' + title + ']'));
                });
            });
        })
            .success(function () {
            })
            .error(function () {
                notifyGrowl('An error was occurred while retrieving file list. ' +
                    'Please try again later or <a href="mailto:adminmail@4tegroupe.com">contact</a> your administrator.', 'danger');
            })
            .complete(function () {
                initItemsSelect();
                initFileUploadTrigger();
            });
    };

    function initItemsSelect() {
        $('.files-view section .file').children('.item').on('click', function (event) {
            event.preventDefault();
            $(this).toggleClass('selected');

            $.each($('.files-view'), function (i, filesView) {
                $('section', filesView).each(function () {
                    $.each($(this), function (i, fileItem) {
                        $('.file', fileItem).each(function () {
                            $.each($(this), function (i, fileItemContents) {
                                $('.item.selected', fileItemContents).each(function () {
                                    if ($(this).length) {
                                        $('#filesDialog').find('.modal-footer').find('button')
                                            .removeClass('disabled')
                                            .children('span').text('Continue');
                                        $('#filesDialog').find('.modal-footer').find('button').attr('data-dismiss', 'modal');
                                        $('.selected-files').removeClass('hide');
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
    };

    function setFiveViewWidth(){
        $.each( $('.playlist-files-container').find('.files-view').children('section'), function(i, left) {
            var coverWidth = $('.playlist-files-container').find('.files-view').children('section').width();
            console.log(coverWidth);
            $('.file', left).each(function() {
                console.log("aa"+ i);
            });
        })
    }


    function isElementExist(selector) {
        return !!$(selector).size();
    }

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
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">' +
            '<span aria-hidden="true" class="icon icon-close"></span>' +
            '</button>' +
            '<span data-notify="icon"></span> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" ' +
            'style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
        });
    };

    function duplicateFile(){
        $('.btn-duplicate-action').on('click', function(){
            var tempFile = $(this).closest('tr').html();
            var tempDataFolder = $(this).closest('tr').attr('data-folder');
            var tempDataFile = $(this).closest('tr').attr('data-file');
            var tempDataMinutes = $(this).closest('tr').attr('data-minutes');
            var tempDataSeconds = $(this).closest('tr').attr('data-seconds');
            var thisElement = $(this);
            console.log("dupl " + tempFile);
            $(thisElement).closest('tr').after('<tr data-folder="' + tempDataFolder + '" data-file="' + tempDataFile + '" ' +
                'data-minutes="' + tempDataMinutes + '" data-seconds="' + tempDataSeconds + '">'+tempFile+'</tr>');
            $(thisElement).closest('tr').next('tr').addClass('highlight');
            setTimeout(function() {
                $(thisElement).closest('tr').next('tr').removeClass('highlight');
            }, 1000);
            setDurationAction();
            dropdownDurationClickInint();
            applyValueOnBlur();
            resetDuration();
            deleteFileAction();
        });
    };

    function initFileUploadTrigger(){
        $('.upload-button').on('click', function(event){
            event.preventDefault(event);
            $('.fileupload-flyout').addClass('open');
            $('.fileupload-container').find('h4').children('span').text($(this).parent('li').children('a').children('span').text());
            $("#fileupload").find(".files").empty();
            var folderName = $(this).parent('li').children('a').children('span').text();
            initFileUpload(folderName);
        });
    }

    $('.fileupload-container').children('.header').children('.close').on('click', function(event){
        event.preventDefault(event);
        $('.fileupload-flyout').removeClass('open');
        $("#fileupload").find(".files").empty();
    });

    $('#filesDialog').on('hide.bs.modal', function() {
        $('.fileupload-flyout').removeClass('open');
        $("#fileupload").find(".files").empty();
    });

    function initFileUpload(folderName){
        // var folderName = $(event.relatedTarget).parent('li').data('folder');
        console.log(folderName);
        $('.fileupload-container').find('h4').children('span').text(folderName);
        $('#fileupload').fileupload({
            // Uncomment the following to send cross-domain cookies:
            //xhrFields: {withCredentials: true},
            url: ('uploadFile/folderName=' + folderName)
        });

        // Enable iframe cross-domain access via redirect option:
        $('#fileupload').fileupload(
            'option',
            'redirect',
            window.location.href.replace(
                /\/[^\/]*$/,
                '/cors/result.html?%s'
            )
        );

        if (window.location.hostname === 'blueimp.github.io') {
            // Demo settings:
            $('#fileupload').fileupload('option', {
                url: '//jquery-file-upload.appspot.com/',
                // Enable image resizing, except for Android and Opera,
                // which actually support image resizing, but fail to
                // send Blob objects via XHR requests:
                disableImageResize: /Android(?!.*Chrome)|Opera/
                    .test(window.navigator.userAgent),
                maxFileSize: 999000,
                acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
            });
            // Upload server status check for browsers with CORS support:
            if ($.support.cors) {
                $.ajax({
                    url: '//jquery-file-upload.appspot.com/',
                    type: 'HEAD'
                }).fail(function () {
                    $('<div class="alert alert-danger"/>')
                        .text('Upload server currently unavailable - ' +
                        new Date())
                        .appendTo('#fileupload');
                });
            }
        } else {
            // Load existing files:
            $('#fileupload').addClass('fileupload-processing');
            $.ajax({
                // Uncomment the following to send cross-domain cookies:
                //xhrFields: {withCredentials: true},
                //url: 'uploadFile',
                //method: 'post',
                context: $('#fileupload')[0]
            }).always(function () {
                $(this).removeClass('fileupload-processing');
            }).done(function (result) {
                $(this).fileupload('option', 'done')
                    .call(this, $.Event('done'), {result: result});
            });
        }
    };


});


