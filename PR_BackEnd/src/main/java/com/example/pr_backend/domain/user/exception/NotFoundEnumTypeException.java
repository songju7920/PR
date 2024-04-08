package com.example.pr_backend.domain.user.exception;

import com.example.pr_backend.global.error.exception.BusinessException;
import com.example.pr_backend.global.error.exception.ErrorCode;

public class NotFoundEnumTypeException extends BusinessException {
    public static final BusinessException EXCEPTION = new NotFoundEnumTypeException();
    private NotFoundEnumTypeException (){
        super(ErrorCode.ROLE_NOT_FOUND);
    }
}
