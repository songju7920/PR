package com.example.pr_backend.global.error;

import com.example.pr_backend.global.error.exception.ErrorCode;
import lombok.*;

import java.time.LocalDateTime;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class ErrorResponse {

    private String message;
    private int statusCode;
    private String description;
    private LocalDateTime timeStamp;

    public static ErrorResponse of(ErrorCode errorCode, String description) {
        return ErrorResponse.builder()
                .message(errorCode.getMessage())
                .statusCode(errorCode.getStatusCode())
                .description(description)
                .timeStamp(LocalDateTime.now())
                .build();
    }

    public static ErrorResponse of (int statusCode, String description) {
        return ErrorResponse.builder()
                .message(description)
                .statusCode(statusCode)
                .description(description)
                .timeStamp(LocalDateTime.now())
                .build();
    }
}
