package com.forte.androidtv.client;


import com.forte.androidtv.entities.Screen;
import com.forte.androidtv.entities.ScreenUpdateInfo;
import com.forte.androidtv.entities.ScreensAndPlaylists;
import com.forte.androidtv.util.InvocationBuilderFactory;

import javax.ws.rs.*;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path(value = "/screen")
public class ScreenService {
    public static final String SCREEN_PREFIX = "screen";
    public static final String GET_ALL_SCREENS = "getAllScreens";
    public static final String GET_ALL_SCREENS_AND_PLAYLISTS = "getAllScreensAndPlaylists";
    public static final String UPDATE_SCREEN = "updateScreen";

    @GET
    @Path(value = "/getAllScreens")
    @Produces(value = {"application/json"})
    @Consumes(value = {"application/json"})
    public List<Screen> getAllScreens() {
        Invocation.Builder invocationBuilder = InvocationBuilderFactory.getInvocationBuilder((String) "screen", (String) "getAllScreens");
        Response response = invocationBuilder.get();
        List screens = (List) response.readEntity(new GenericType<List<Screen>>() {
        });
        return screens;
    }

    @GET
    @Path(value = "/getAllScreensAndPlaylists")
    @Produces(value = {"application/json"})
    @Consumes(value = {"application/json"})
    public ScreensAndPlaylists getAllScreensAndPlaylists() {
        ScreensAndPlaylists screensAndPlaylists = new ScreensAndPlaylists();
        screensAndPlaylists.setPlaylists(new PlaylistService().getAllPlaylists());
        screensAndPlaylists.setScreens(this.getAllScreens());
        return screensAndPlaylists;
    }

    @POST
    @Path(value = "/updateScreen")
    @Produces(value = {"application/json"})
    @Consumes(value = {"application/json"})
    public void updateScreen(ScreenUpdateInfo screenUpdateInfo) {
        Invocation.Builder invocationBuilder = InvocationBuilderFactory.getInvocationBuilder((String) "screen", (String) "updateScreen");
        Response response = invocationBuilder.post(Entity.entity((Object) screenUpdateInfo, (String) "application/json"));
    }
}