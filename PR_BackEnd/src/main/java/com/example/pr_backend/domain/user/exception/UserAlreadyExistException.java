package com.example.pr_backend.domain.user.exception;

import com.example.pr_backend.global.error.exception.BusinessException;
import com.example.pr_backend.global.error.exception.ErrorCode;

public class UserAlreadyExistException extends BusinessException{
    public static final BusinessException EXCEPTION = new UserAlreadyExistException();

    private UserAlreadyExistException () {
        super(ErrorCode.USER_ALREADY_EXISTS);
    }
}
