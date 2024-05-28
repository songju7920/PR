package com.example.pr_backend.domain.project.dto.response;

public record SearchProjectDto (
        Long post_id,
        String writer,
        String title,
        String contents,
        String logo
) {
}
