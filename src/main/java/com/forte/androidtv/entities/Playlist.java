package com.forte.androidtv.entities;


import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@XmlRootElement
public class Playlist implements Serializable {
    private Long playlistId;
    private String name;
    private List<Media> media = new ArrayList<Media>(0);
    private Set<Screen> screens = new HashSet<Screen>(0);

    public Playlist() {
    }

    public Playlist(Long id) {
        this.playlistId = id;
    }

    public Long getPlaylistId() {
        return this.playlistId;
    }

    public void setPlaylistId(Long playlistId) {
        this.playlistId = playlistId;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Media> getMedia() {
        return this.media;
    }

    public void setMedia(List<Media> mediaList) {
        this.media = mediaList;
    }

    public Set<Screen> getScreens() {
        return this.screens;
    }

    public void setScreens(Set<Screen> screens) {
        this.screens = screens;
    }
}