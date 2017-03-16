package com.forte.androidtv.util;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.log4j.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

public class FileUploadServlet extends HttpServlet {
    private static final long serialVersionUID = 1;
    private static final String UPLOAD_PROPERTIES = "upload.properties";
    private static final int MEMORY_THRESHOLD = 3145728;
    private static final String MAX_FILE_SIZE = "maxFileSize";
    private static final String MAX_REQUEST_SIZE = "maxRequestSize";
    private static final String UPLOAD_DIRECTORY = "uploadDirectory";
    private static final String FOLDER_NAME = "folderName";
    static final Logger logger = Logger.getLogger(FileUploadServlet.class);

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String folderName = request.getRequestURI().split("=")[1];
        logger.info((Object) ("Upload folder name - " + folderName));
        Map<String, String> uploadProperties = this.getUploadProperties();
        ServletFileUpload servletFileUpload = this.initServletFileUpload(uploadProperties);
        List formItems = null;
        try {
            formItems = servletFileUpload.parseRequest(request);
        } catch (FileUploadException e) {
            logger.error((Object) "FileUploadException on upload file to server", (Throwable) e);
        }
        this.writeFiles(formItems, uploadProperties.get("uploadDirectory"), folderName);
        response.sendRedirect("/AndroidTVWebClient/new-playlist.jsp");
    }

    private Map<String, String> getUploadProperties() {
        HashMap<String, String> uploadProperties = new HashMap<String, String>();
        ClassLoader loader = Thread.currentThread().getContextClassLoader();
        Properties propertiesFile = new Properties();
        try {
            InputStream resourceStream = loader.getResourceAsStream("upload.properties");
            Throwable throwable = null;
            try {
                propertiesFile.load(resourceStream);
                uploadProperties.put("maxFileSize", propertiesFile.getProperty("maxFileSize"));
                uploadProperties.put("maxRequestSize", propertiesFile.getProperty("maxRequestSize"));
                uploadProperties.put("uploadDirectory", propertiesFile.getProperty("uploadDirectory"));
            } finally {
                if (resourceStream != null) {
                    if (throwable != null) {
                        try {
                            resourceStream.close();
                        } catch (Throwable var6_8) {
                            throwable.addSuppressed(var6_8);
                        }
                    } else {
                        resourceStream.close();
                    }
                }
            }
        } catch (FileNotFoundException e) {
            logger.error((Object) "File <upload.properties> for not found.", (Throwable) e);
        } catch (IOException e) {
            logger.error((Object) "IOException on reading server info from file", (Throwable) e);
        }
        return uploadProperties;
    }

    private ServletFileUpload initServletFileUpload(Map<String, String> uploadProperties) {
        DiskFileItemFactory diskFileItemFactory = new DiskFileItemFactory();
        diskFileItemFactory.setSizeThreshold(3145728);
        diskFileItemFactory.setRepository(new File(System.getProperty("java.io.tmpdir")));
        ServletFileUpload servletFileUpload = new ServletFileUpload((FileItemFactory) diskFileItemFactory);
        servletFileUpload.setFileSizeMax(Long.parseLong(uploadProperties.get("maxFileSize")));
        servletFileUpload.setSizeMax(Long.parseLong(uploadProperties.get("maxRequestSize")));
        File uploadDir = new File(uploadProperties.get("uploadDirectory"));
        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }
        return servletFileUpload;
    }

    private void writeFiles(List<FileItem> formItems, String uploadPath, String folderName) {
        try {
            if (formItems != null && formItems.size() > 0) {
                for (FileItem item : formItems) {
                    if (item.isFormField()) continue;
                    String fileName = new File(item.getName()).getName();
                    String filePath = uploadPath + File.separator;
                    filePath = folderName != null && !folderName.isEmpty() && !folderName.equals("content") ? filePath + folderName + File.separator + fileName : filePath + fileName;
                    logger.debug((Object) ("File path: " + filePath));
                    File storeFile = new File(filePath);
                    storeFile.getParentFile().mkdir();
                    item.write(storeFile);
                }
            }
        } catch (Exception e) {
            logger.error((Object) "Exception on upload file to server", (Throwable) e);
        }
    }
}