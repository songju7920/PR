package com.example.pr_backend.domain.project.dto.response;

import java.util.List;

public record SearchProjectRequestDto (
        List<SearchProjectDto> projects
) {
}
