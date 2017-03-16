package com.forte.androidtv.entities;


import java.io.Serializable;
import java.util.List;

public class PlaylistUpdateInfo implements Serializable {
    private Long playlistId;
    private String name;
    private List<MediaUpdateInfo> media;

    public Long getPlaylistId() {
        return this.playlistId;
    }

    public void setPlaylistId(Long playlistId) {
        this.playlistId = playlistId;
    }

    public List<MediaUpdateInfo> getMedia() {
        return this.media;
    }

    public void setMedia(List<MediaUpdateInfo> media) {
        this.media = media;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }
}