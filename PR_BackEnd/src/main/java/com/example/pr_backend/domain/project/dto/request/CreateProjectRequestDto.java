package com.example.pr_backend.domain.project.dto.request;

public record CreateProjectRequestDto(
        String title,
        String contents
) {
}
