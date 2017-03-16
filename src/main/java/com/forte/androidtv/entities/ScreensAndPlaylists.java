package com.forte.androidtv.entities;


import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;
import java.util.List;

@XmlRootElement
public class ScreensAndPlaylists implements Serializable {
    List<Screen> screens;
    List<Playlist> playlists;

    public List<Screen> getScreens() {
        return this.screens;
    }

    public void setScreens(List<Screen> screens) {
        this.screens = screens;
    }

    public List<Playlist> getPlaylists() {
        return this.playlists;
    }

    public void setPlaylists(List<Playlist> playlists) {
        this.playlists = playlists;
    }
}