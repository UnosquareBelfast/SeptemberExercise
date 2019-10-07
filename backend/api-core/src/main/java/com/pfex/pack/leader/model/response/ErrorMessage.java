package com.pfex.pack.leader.model.response;

import lombok.AllArgsConstructor;

import java.util.Date;

@AllArgsConstructor
public class ErrorMessage {
public Date timestamp;
    public String message;

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
