package com.example.pr_backend.domain.project.service;

import com.example.pr_backend.domain.project.dto.request.CreateProjectRequestDto;
import org.springframework.security.core.Authentication;

public interface ProjectService {
    public void createProject(Authentication authentication, CreateProjectRequestDto createProjectRequestDto);
}
