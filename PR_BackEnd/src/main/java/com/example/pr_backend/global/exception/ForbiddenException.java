package com.example.pr_backend.global.exception;

import com.example.pr_backend.global.error.exception.BusinessException;
import com.example.pr_backend.global.error.exception.ErrorCode;

public class ForbiddenException extends BusinessException {

    public static ForbiddenException Exception = new ForbiddenException();

    public ForbiddenException() { super(ErrorCode.FORBIDDEN); }
}
