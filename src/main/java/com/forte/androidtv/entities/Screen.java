package com.forte.androidtv.entities;


import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;
import java.util.Date;

@XmlRootElement
public class Screen implements Serializable {
    private Long screenId;
    private Date lastActivity;
    private String name;
    private Playlist playlist;
    private String googleId;
    private Long playlistStartTime;

    public Screen() {
    }

    public Screen(Long id) {
        this.screenId = id;
    }

    public Long getScreenId() {
        return this.screenId;
    }

    public void setScreenId(Long screenId) {
        this.screenId = screenId;
    }

    public Date getLastActivity() {
        return this.lastActivity;
    }

    public void setLastActivity(Date lastActivity) {
        this.lastActivity = lastActivity;
    }

    public Playlist getPlaylist() {
        return this.playlist;
    }

    public void setPlaylist(Playlist defaultPlaylist) {
        this.playlist = defaultPlaylist;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGoogleId() {
        return this.googleId;
    }

    public void setGoogleId(String googleId) {
        this.googleId = googleId;
    }

    public Long getPlaylistStartTime() {
        return this.playlistStartTime;
    }

    public void setPlaylistStartTime(Long playlistStartTime) {
        this.playlistStartTime = playlistStartTime;
    }
}