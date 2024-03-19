package com.example.pr_backend.domain.user.dto.request;

import com.example.pr_backend.domain.user.model.Major;
import lombok.Data;

@Data
public class SignupDto {
    private String username;
    private String password;
    private String skills;
    private String major;
}
