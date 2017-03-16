package com.forte.androidtv.client;


import com.forte.androidtv.entities.Playlist;
import com.forte.androidtv.entities.PlaylistUpdateInfo;
import com.forte.androidtv.util.InvocationBuilderFactory;

import javax.ws.rs.*;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path(value = "/playlist")
public class PlaylistService {
    public static final String PLAYLIST_PREFIX = "playlist";
    public static final String CREATE_PLAYLIST = "createPlayList";
    public static final String UPDATE_PLAYLIST = "updatePlaylist";
    public static final String GET_PLAYLIST_BY_ID = "getPlaylistById";
    public static final String GET_ALL_PLAYLISTS = "getAllPlaylists";
    public static final String DELETE_PLAYLIST = "deletePlaylist";

    @POST
    @Path(value = "/createPlayList")
    @Produces(value = {"application/json"})
    @Consumes(value = {"application/json"})
    public Long addPlaylist(Playlist playlist) {
        Invocation.Builder invocationBuilder = InvocationBuilderFactory.getInvocationBuilder((String) "playlist", (String) "createPlayList");
        Response response = invocationBuilder.post(Entity.entity((Object) playlist, (String) "application/json"));
        return (Long) response.readEntity(Long.class);
    }

    @POST
    @Path(value = "/updatePlaylist")
    @Produces(value = {"application/json"})
    @Consumes(value = {"application/json"})
    public void updatePlayList(PlaylistUpdateInfo playlistUpdateInfo) {
        Invocation.Builder invocationBuilder = InvocationBuilderFactory.getInvocationBuilder((String) "playlist", (String) "updatePlaylist");
        Response response = invocationBuilder.post(Entity.entity((Object) playlistUpdateInfo, (String) "application/json"));
    }

    @GET
    @Path(value = "/getPlaylistById/{playlistId}")
    @Produces(value = {"application/json"})
    public Playlist getPlaylistById(@PathParam(value = "playlistId") Long playlistId) {
        Invocation.Builder invocationBuilder = InvocationBuilderFactory.getInvocationBuilder((String) "playlist", (String) ("getPlaylistById/" + playlistId));
        Response response = invocationBuilder.get();
        Playlist playlist = (Playlist) response.readEntity(Playlist.class);
        return playlist;
    }

    @GET
    @Path(value = "/getAllPlaylists")
    @Produces(value = {"application/json"})
    @Consumes(value = {"application/json"})
    public List<Playlist> getAllPlaylists() {
        Invocation.Builder invocationBuilder = InvocationBuilderFactory.getInvocationBuilder((String) "playlist", (String) "getAllPlaylists");
        Response response = invocationBuilder.get();
        List playlists = (List) response.readEntity(new GenericType<List<Playlist>>() {
        });
        return playlists;
    }

    @DELETE
    @Path(value = "/deletePlaylist/{id}")
    @Consumes(value = {"application/json"})
    public void deletePlaylist(@PathParam(value = "id") Long id) {
        Invocation.Builder invocationBuilder = InvocationBuilderFactory.getInvocationBuilder((String) "playlist", (String) ("deletePlaylist/" + id));
        Response response = invocationBuilder.delete();
    }
}