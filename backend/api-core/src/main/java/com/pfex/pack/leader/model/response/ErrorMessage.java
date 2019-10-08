package com.pfex.pack.leader.model.response;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ErrorMessage {
    public final LocalDateTime timestamp;
    public final String message;
}
