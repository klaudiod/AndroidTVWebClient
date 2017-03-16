package com.forte.androidtv.client;

import com.forte.androidtv.authorization.AuthorizationManager;
import com.forte.androidtv.entities.User;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import org.apache.log4j.Logger;

@Path(value = "/authorization")
public class AuthorizationService {
    public static final String AUTHENTICATION_STATUS = "authenticationStatus";
    static final Logger logger = Logger.getLogger(AuthorizationManager.class);
    @POST
    @Path(value = "/login")
    @Produces(value = {"application/json"})
    @Consumes(value = {"application/json"})
    public boolean login(@Context HttpServletRequest request, @Context HttpServletResponse response, User user) {
        logger.info("klaudio");
        boolean authenticationStatus = AuthorizationManager.login((String) user.getLogin(), (String) user.getPassword());
        request.getSession().setAttribute("authenticationStatus", (Object) authenticationStatus);
        return authenticationStatus;
    }

    @POST
    @Path(value = "/logout")
    @Produces(value = {"application/json"})
    public void logout(@Context HttpServletRequest request, @Context HttpServletResponse response) {
        request.getSession().invalidate();
    }
}