package com.example.pr_backend.global.error.exception;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {

    // User
    PASSWORD_MISMATCH(403, "password mismatches"),
    USER_NOT_FOUND(404, "user not exists"),
    ROLE_NOT_FOUND(409, "role not exists"),
    USER_ALREADY_EXISTS(409, "user already exists"),

    // general
    BAD_REQUEST(400, "bad request"),
    INTERNAL_SERVER_ERROR(500, "server error");

    private final int StatusCode;
    private final String message;
}
