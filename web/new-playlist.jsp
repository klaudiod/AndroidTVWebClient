<%@ taglib uri='http://java.sun.com/jsp/jstl/core' prefix='c'%>


    <html lang="en">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Create Playlist &#183; Forte Group Andriod TV Application</title>
        <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:300&subset=latin,cyrillic' rel='stylesheet'
              type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Yeseva+One&subset=latin,cyrillic' rel='stylesheet'
              type='text/css'>
        <link href="css/main.css" rel="stylesheet">
        <link rel="icon" href="img/favicon.png" type="image">
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>

    <body>

    <aside>
        <div class="aside-content animated fadeIn">
            <h2>Android TV Application</h2>

            <div class="list-group">
                <a href="playlists.html" class="list-group-item"><span>Playlists</span></a>
                <!-- <a href="content.html" class="list-group-item"><span>Content</span></a> -->
                <a href="screens.html" class="list-group-item"><span>TV Screens</span></a>
            </div>
        </div>
        <div class="aside-footer">
            <a href="new-playlist.jsp" class="btn btn-default animated fadeInUp"><span
                    class="hidden-xs">Create Playlist</span><span class="visible-xs"><span
                    class="icon icon-plus"></span></a>
        </div>
    </aside>
    <section class="content">
        <div class="content-header animated fadeIn">
            <h1>Create New Playlist</h1>

            <div class="actions">
                <a href="index.html" id="logoutButton"><span>Log Out</span></a>
            </div>
        </div>
        <div class="content-body animated fadeIn">
            <div class="info-container"></div>
            <div class="playlist-name">
                <div class="form-group form-group-lg floatlabel">
                    <input type="text" class="form-control formfield" id="playlistName">
                    <label for="login">Playlist Name</label>
                </div>
            </div>
            <div class="selected-files hide">
                <table class="table table-hover files-table">
                    <caption>Files</caption>
                    <thead>
                    <tr>
                        <th>File</th>
                        <th>Duration</th>
                    </tr>
                    </thead>
                    <tbody class="playlist-items-container">
                    </tbody>
                </table>
            </div>
            <div class="new-playlist-footer-container">
                <div class="new-playlist-footer">
                    <!--<a href="#" data-toggle="modal" data-target="#filesDialog" class="btn btn-lg btn-warning"-->
                    <!--id="createPlaylist"><span class="text">Add Files</span></a>-->
                    <a href="#" class="btn btn-lg btn-warning hide btn-first" id="savePlaylist"><span class="text">Save Playlist</span></a>
                    <a href="#" class="btn btn-lg btn-warning hide btn-first" id="enterPlaylistName"><span class="text">Enter Playlist Name</span></a>
                    <a class="btn btn-default btn-lg btn-link btn-dashed btn-add-files" data-toggle="modal"
                       data-target="#filesDialog"><span>Add Files</span></a>
                    <%--<a class="btn btn-default btn-link btn-dashed add-line-link"><span>Add Link to the Video</span></a>--%>
                    <a class="btn btn-default btn-link btn-dashed add-weather-link"><span>Add Weather</span></a>
                    <a class="btn btn-default btn-link btn-dashed add-sport-link"><span>Add Sport</span></a>
                    <a class="btn btn-default btn-link btn-dashed add-life-link"><span>Add Life</span></a>
                </div>
            </div>
        </div>
    </section>

    <script src="js/jquery-1.11.3.min.js"></script>
    <script src="js/bootstrap/bootstrap.min.js"></script>
    <script src="js/bootstrap-select/bootstrap-select.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/bootstrap-notify.min.js"></script>
    <script src="js/ui.js"></script>

    <script src="js/blueimp-file-upload/js/vendor/jquery.ui.widget.js"></script>
    <!-- The Templates plugin is included to render the upload/download listings -->
    <script src="js/blueimp-tmpl/js/tmpl.min.js"></script>
    <!-- The Load Image plugin is included for the preview images and image resizing functionality -->
    <script src="js/blueimp-load-image/js/load-image.all.min.js"></script>
    <!-- The Canvas to Blob plugin is included for image resizing functionality -->
    <script src="js/blueimp-canvas-to-blob/js/canvas-to-blob.min.js"></script>
    <!-- Bootstrap JS is not required, but included for the responsive demo navigation -->
    <!-- <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script> -->
    <!-- blueimp Gallery script -->
    <!-- <script src="//blueimp.github.io/Gallery/js/jquery.blueimp-gallery.min.js"></script> -->
    <!-- The Iframe Transport is required for browsers without support for XHR file uploads -->
    <script src="js/blueimp-file-upload/js/jquery.iframe-transport.js"></script>
    <!-- The basic File Upload plugin -->
    <script src="js/blueimp-file-upload/js/jquery.fileupload.js"></script>
    <!-- The File Upload processing plugin -->
    <script src="js/blueimp-file-upload/js/jquery.fileupload-process.js"></script>
    <!-- The File Upload image preview & resize plugin -->
    <script src="js/blueimp-file-upload/js/jquery.fileupload-image.js"></script>
    <!-- The File Upload audio preview plugin -->
    <script src="js/blueimp-file-upload/js/jquery.fileupload-audio.js"></script>
    <!-- The File Upload video preview plugin -->
    <script src="js/blueimp-file-upload/js/jquery.fileupload-video.js"></script>
    <!-- The File Upload validation plugin -->
    <script src="js/blueimp-file-upload/js/jquery.fileupload-validate.js"></script>
    <!-- The File Upload user interface plugin -->
    <script src="js/blueimp-file-upload/js/jquery.fileupload-ui.js"></script>

    <c:if test="${empty param.playlistId}">
        <script src="js/logic/new-playlist.js"></script>
    </c:if>

    <c:if test="${not empty param.playlistId}">
        <script src="js/logic/edit-playlist.js"></script>
    </c:if>


    <!-- Modal -->
    <div class="modal fade" id="filesDialog" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="files-switch">
                        <div class="btn-group btn-switch-view" data-toggle="buttons">
                            <label class="btn btn-default active">
                                <input type="radio" name="options" id="gridView" autocomplete="off" checked> <span
                                    class="icon icon-grid"></span>
                            </label>
                            <label class="btn btn-default">
                                <input type="radio" name="options" id="listView" autocomplete="off"> <span
                                    class="icon icon-list"></span>
                            </label>
                        </div>
                    </div>
                    <h4 class="modal-title" id="gridSystemModalLabel">Select Files</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true"><span class="icon icon-close"></span></span>
                    </button>
                </div>
                <div class="modal-body" data-spy="scroll" data-target="#foldersNav" data-offset="0">
                    <div class="playlist-files-container">
                        <div class="tree">
                            <div id="foldersNav">
                                <ul class="nav">
                                    <li class="caption-title">Folders</li>
                                </ul>
                            </div>
                        </div>
                        <div class="files">
                            <div class="files-view grid">
                            </div>
                            <div class="fileupload-flyout">
                                <div class="fileupload-container">
                                    <div class="header">
                                        <h4>Upload files to <span class="folder"></span> folder</h4>
                                        <button type="button" class="close" aria-label="Close"><span aria-hidden="true"><span class="icon icon-close"></span></span>
                                        </button>
                                    </div>
                                    <div class="content">
                                        <form id="fileupload" action="uploadFile" method="POST" enctype="multipart/form-data">
                        <noscript><input type="hidden" name="redirect" value="https://blueimp.github.io/jQuery-File-Upload/"></noscript>
                        <div class="row fileupload-buttonbar">
                            <div class="col-lg-12">
                                <span class="btn btn-warning btn-lg fileinput-button">
                                    <span>Add Files�</span>
                                    <input type="file" name="files[]" multiple>
                                </span>
                                <button type="submit" class="btn btn-link start">
                                    <span class="icon icon-upload"></span>
                                    <span>Start Upload</span>
                                </button>

                                <span class="fileupload-process"></span>
                            </div>
                            <div class="col-lg-12 fileupload-progress fade">
                                <div class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar progress-bar-success" style="width:0%;"></div>
                                </div>
                                <div class="progress-extended">&nbsp;</div>
                            </div>
                        </div>
                        <table role="presentation" class="table table-condensed fileupload-table">
                            <tbody class="files"></tbody>
                        </table>
                    </form>
                    <script id="template-upload" type="text/x-tmpl">

                            {% for (var i=0, file; file=o.files[i]; i++) { %}
                                <tr class="template-upload fade">
                                    <div class="progress progress-fileupload progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><div class="progress-bar progress-bar-success" style="width:0%;"></div></div>
                                    
                                    <td>
                                        <p class="name">{%=file.name%}</p>
                                        <strong class="error text-danger"></strong>
                                    </td>
                                    <td>
                                        <p class="size">Processing�</p>
                                    </td>
                                    <td class="text-right">
                                        {% if (!i && !o.options.autoUpload) { %}
                                            <button class="btn btn-warning btn-sm start hide" disabled>
                                                <span>Upload</span>
                                            </button>
                                        {% } %}
                                        {% if (!i) { %}
                                            <div class="actions">
                                                <button class="btn btn-danger cancel">
                                                    <span class="icon icon-uEA01-trash"></span>
                                                </button>
                                            </div>
                                        {% } %}
                                    </td>
                                </tr>
                            {% } %}


                    </script>
                    <script id="template-download" type="text/x-tmpl">
                    {% for (var i=0, file; file=o.files[i]; i++) { %}
                        <tr class="template-download fade hide">
                            <td>
                                <span class="preview">
                                    {% if (file.thumbnailUrl) { %}
                                        <a href="{%=file.url%}" title="{%=file.name%}" download="{%=file.name%}" data-gallery><img src="{%=file.thumbnailUrl%}"></a>
                                    {% } %}
                                </span>
                            </td>
                            <td>
                                <p class="name">
                                    {% if (file.url) { %}
                                        <a href="{%=file.url%}" title="{%=file.name%}" download="{%=file.name%}" {%=file.thumbnailUrl?'data-gallery':''%}>{%=file.name%}</a>
                                    {% } else { %}
                                        <span>{%=file.name%}</span>
                                    {% } %}
                                </p>

                            </td>
                            <td>
                                <span class="size">{%=o.formatFileSize(file.size)%}</span>
                            </td>
                            <td class="text-right">
                                {% if (file.deleteUrl) { %}
                                    <button class="btn btn-link btn-sm delete" data-type="{%=file.deleteType%}" data-url="{%=file.deleteUrl%}"{% if (file.deleteWithCredentials) { %} data-xhr-fields='{"withCredentials":true}'{% } %}>
                                        <span>Delete</span>
                                    </button>
                                    <input type="checkbox" name="delete" value="1" class="toggle">
                                {% } else { %}
                                    <button class="btn btn-link btn-sm cancel">
                                        <span>Cancel</span>
                                    </button>
                                {% } %}
                            </td>
                        </tr>
                    {% } %}
                    </script>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="modal-footer text-center">
                    <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
                    <button type="button" class="btn btn-warning btn-lg disabled" id="continueButton">
                        <span>Select Files</span></button>
                </div>
            </div>
        </div>
    </div>

    <!-- file upload -->
    <!-- <div class="modal file-upload fade" id="fileuploadModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="uploadModalTitle">Upload files to <span></span> folder</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><span class="icon icon-close"></span></span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="fileupload" action="uploadFile" method="POST" enctype="multipart/form-data">
                        <noscript><input type="hidden" name="redirect" value="https://blueimp.github.io/jQuery-File-Upload/"></noscript>
                        <div class="row fileupload-buttonbar">
                            <div class="col-lg-12">
                                <span class="btn btn-warning btn-lg fileinput-button">
                                    <span>Add Files�</span>
                                    <input type="file" name="files[]" multiple>
                                </span>
                                <button type="submit" class="btn btn-link start">
                                    <span class="icon icon-upload"></span>
                                    <span>Start Upload</span>
                                </button>

                                <span class="fileupload-process"></span>
                            </div>
                            <div class="col-lg-12 fileupload-progress fade">
                                <div class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar progress-bar-success" style="width:0%;"></div>
                                </div>
                                <div class="progress-extended">&nbsp;</div>
                            </div>
                        </div>
                        <table role="presentation" class="table table-condensed fileupload-table">
                            <tbody class="files"></tbody>
                        </table>
                    </form>
                    <script id="template-upload" type="text/x-tmpl">

                            {% for (var i=0, file; file=o.files[i]; i++) { %}
                                <tr class="template-upload fade">
                                    <div class="progress progress-fileupload progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><div class="progress-bar progress-bar-success" style="width:0%;"></div></div>
                                    <td>
                                        <span class="preview"></span>
                                    </td>
                                    <td>
                                        <p class="name">{%=file.name%}</p>
                                        <strong class="error text-danger"></strong>
                                    </td>
                                    <td>
                                        <p class="size">Processing�</p>
                                    </td>
                                    <td class="text-right">
                                        {% if (!i && !o.options.autoUpload) { %}
                                            <button class="btn btn-warning btn-sm start" disabled>
                                                <span>Upload</span>
                                            </button>
                                        {% } %}
                                        {% if (!i) { %}
                                            <button class="btn btn-sm btn-link cancel">
                                                <span>Cancel</span>
                                            </button>
                                        {% } %}
                                    </td>
                                </tr>
                            {% } %}


                    </script>
                    <script id="template-download" type="text/x-tmpl">
                    {% for (var i=0, file; file=o.files[i]; i++) { %}
                        <tr class="template-download fade">
                            <td>
                                <span class="preview">
                                    {% if (file.thumbnailUrl) { %}
                                        <a href="{%=file.url%}" title="{%=file.name%}" download="{%=file.name%}" data-gallery><img src="{%=file.thumbnailUrl%}"></a>
                                    {% } %}
                                </span>
                            </td>
                            <td>
                                <p class="name">
                                    {% if (file.url) { %}
                                        <a href="{%=file.url%}" title="{%=file.name%}" download="{%=file.name%}" {%=file.thumbnailUrl?'data-gallery':''%}>{%=file.name%}</a>
                                    {% } else { %}
                                        <span>{%=file.name%}</span>
                                    {% } %}
                                </p>

                            </td>
                            <td>
                                <span class="size">{%=o.formatFileSize(file.size)%}</span>
                            </td>
                            <td class="text-right">
                                {% if (file.deleteUrl) { %}
                                    <button class="btn btn-link btn-sm delete" data-type="{%=file.deleteType%}" data-url="{%=file.deleteUrl%}"{% if (file.deleteWithCredentials) { %} data-xhr-fields='{"withCredentials":true}'{% } %}>
                                        <span>Delete</span>
                                    </button>
                                    <input type="checkbox" name="delete" value="1" class="toggle">
                                {% } else { %}
                                    <button class="btn btn-link btn-sm cancel">
                                        <span>Cancel</span>
                                    </button>
                                {% } %}
                            </td>
                        </tr>
                    {% } %}
                    </script>
                </div>
            </div>
        </div>
    </div> -->

    </body>

    </html>
