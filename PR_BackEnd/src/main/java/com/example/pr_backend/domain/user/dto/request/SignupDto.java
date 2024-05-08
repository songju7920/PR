package com.example.pr_backend.domain.user.dto.request;

public record SignupDto (
    String username,
    String password,
    String skills,
    String major,
    String email
) {
}
