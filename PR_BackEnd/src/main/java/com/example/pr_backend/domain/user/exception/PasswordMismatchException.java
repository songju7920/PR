package com.example.pr_backend.domain.user.exception;

import com.example.pr_backend.global.error.exception.BusinessException;
import com.example.pr_backend.global.error.exception.ErrorCode;

public class PasswordMismatchException extends BusinessException {
    public static final BusinessException EXCEPTION = new PasswordMismatchException();

    private PasswordMismatchException () {
        super(ErrorCode.PASSWORD_MISMATCH);
    }
}
