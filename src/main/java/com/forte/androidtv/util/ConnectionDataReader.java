package com.forte.androidtv.util;


import org.apache.log4j.Logger;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class ConnectionDataReader {
    private static final String FILE_PATH = "hosts.properties";
    private static final String URL = "url";
    static final Logger logger = Logger.getLogger(ConnectionDataReader.class);

    public static StringBuilder getServerURL() {
        StringBuilder serverURL = new StringBuilder();
        ClassLoader loader = Thread.currentThread().getContextClassLoader();
        Properties propertiesFile = new Properties();
        try {
            InputStream resourceStream = loader.getResourceAsStream("hosts.properties");
            Throwable throwable = null;
            try {
                propertiesFile.load(resourceStream);
                serverURL.append(propertiesFile.getProperty("url"));
                logger.debug((Object) ("Server URL: " + serverURL));
            } finally {
                if (resourceStream != null) {
                    if (throwable != null) {
                        try {
                            resourceStream.close();
                        } catch (Throwable var5_7) {
                            throwable.addSuppressed(var5_7);
                        }
                    } else {
                        resourceStream.close();
                    }
                }
            }
        } catch (FileNotFoundException e) {
            logger.error((Object) "File <hosts.properties> for not found.", (Throwable) e);
        } catch (IOException e) {
            logger.error((Object) "IOException on reading server info from file", (Throwable) e);
        }
        return serverURL;
    }
}