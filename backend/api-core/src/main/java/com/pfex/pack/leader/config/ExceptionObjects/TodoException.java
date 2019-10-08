package com.pfex.pack.leader.config.ExceptionObjects;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class TodoException extends RuntimeException {
    private final String message;
}
