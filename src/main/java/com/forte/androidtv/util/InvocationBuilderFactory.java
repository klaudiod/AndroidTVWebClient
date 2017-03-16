package com.forte.androidtv.util;

import org.glassfish.jersey.client.ClientConfig;
import org.glassfish.jersey.filter.LoggingFilter;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.Configuration;

public class InvocationBuilderFactory {
    public static Invocation.Builder getInvocationBuilder(String restServicePrefix, String methodPath) {
        Client client = ClientBuilder.newClient((Configuration) new ClientConfig().register(LoggingFilter.class));
        WebTarget webTarget = client.target(ConnectionDataReader.getServerURL().append(restServicePrefix).append("/").append(methodPath).toString());
        Invocation.Builder invocationBuilder = webTarget.request(new String[]{"application/json"});
        return invocationBuilder;
    }
}