package com.forte.androidtv.authorization;

import org.apache.log4j.Logger;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

public class AuthorizationManager {
    public static final String LOGIN = "login";
    public static final String PASSWORD = "password";
    private static final String FILE_PATH = "user.properties";
    static final Logger logger = Logger.getLogger(AuthorizationManager.class);

    public static boolean login(String login, String password) {
        if (login == null || login.isEmpty() || password == null || password.isEmpty()) {
            return false;
        }
        if (!AuthorizationManager.isValidLoginAndPassword(login, password)) {
            return false;
        }
        return true;
    }

    private static boolean isValidLoginAndPassword(String login, String password) {
        Map<String, String> userDataMap = AuthorizationManager.readUserDataFromFile();
        String userLogin = userDataMap.get("login");
        String userPassword = userDataMap.get("password");
        if (!login.equals(userLogin)) {
            return false;
        }
        if (!password.equals(userPassword)) {
            return false;
        }
        return true;
    }

    private static Map<String, String> readUserDataFromFile() {
        HashMap<String, String> userDataMap = new HashMap<String, String>();
        ClassLoader loader = Thread.currentThread().getContextClassLoader();
        Properties propertiesFile = new Properties();
        try {
            InputStream resourceStream = loader.getResourceAsStream("user.properties");
            Throwable throwable = null;
            try {
                propertiesFile.load(resourceStream);
                userDataMap.put("login", propertiesFile.getProperty("login"));
                userDataMap.put("password", propertiesFile.getProperty("password"));
                System.out.println("klaudio: "+ propertiesFile.getProperty("login"));
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
            logger.error((Object) "File <user.properties> with valid credentials not found", (Throwable) e);
        } catch (IOException e) {
            logger.error((Object) "IOException on reading credentials from file", (Throwable) e);
        }
        return userDataMap;
    }
}