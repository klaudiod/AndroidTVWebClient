package com.forte.androidtv.client;


import com.forte.androidtv.util.InvocationBuilderFactory;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.Response;
import java.util.List;
import java.util.Map;

@Path(value = "/media")
public class MediaService {
    public static final String MEDIA_PREFIX = "media";
    public static final String GET_CONTENT_DIRECTORY_STRUCTURE = "getContentDirectoryStructure";

    @GET
    @Path(value = "/getContentDirectoryStructure")
    @Produces(value = {"application/json"})
    public Map<String, List<String>> getContentDirectoryStructure() {
        Invocation.Builder invocationBuilder = InvocationBuilderFactory.getInvocationBuilder((String) "media", (String) "getContentDirectoryStructure");
        Response response = invocationBuilder.get();
        Map mediaFiles = (Map) response.readEntity(new GenericType<Map<String, List<String>>>() {
        });
        return mediaFiles;
    }
}