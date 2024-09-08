package com.example.pr_backend.domain.project.exception;

import com.example.pr_backend.global.error.exception.BusinessException;
import com.example.pr_backend.global.error.exception.ErrorCode;

public class PostNotFoundException extends BusinessException {

    public static PostNotFoundException Exception = new PostNotFoundException();

    public PostNotFoundException() { super(ErrorCode.POST_NOT_FOUND); }
}
