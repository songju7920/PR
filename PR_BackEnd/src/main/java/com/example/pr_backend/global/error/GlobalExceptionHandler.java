package com.example.pr_backend.global.error;

import com.example.pr_backend.global.error.exception.BusinessException;
import com.example.pr_backend.global.error.exception.ErrorCode;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    // 비지니스 로직 에러
    @ExceptionHandler(BusinessException.class)
    protected ResponseEntity<ErrorResponse> handleBusinessException (BusinessException e) {

        ErrorCode errorCode = e.getErrorCode();
        ErrorResponse response = ErrorResponse.of(errorCode, errorCode.getMessage());

        return new ResponseEntity<>(response, HttpStatusCode.valueOf(errorCode.getStatusCode()));
    }
}
