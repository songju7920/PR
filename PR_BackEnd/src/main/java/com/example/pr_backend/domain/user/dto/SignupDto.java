package com.example.pr_backend.domain.user.dto;

import lombok.Data;

@Data
public class SignupDto {
    private String username;
    private String password;
    private String skills;
}
