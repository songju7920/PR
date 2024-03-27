package com.example.pr_backend.domain.user.dto.request;

import lombok.Data;

@Data
public class LoginDto {

    private String username;

    private String password;
}
