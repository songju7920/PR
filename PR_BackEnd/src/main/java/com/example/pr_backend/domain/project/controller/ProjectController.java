package com.example.pr_backend.domain.project.controller;

import com.example.pr_backend.domain.project.dto.request.CreateProjectRequestDto;
import com.example.pr_backend.domain.project.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ProjectController {
    private final ProjectService projectService;

    @PostMapping("/post/create")
    @ResponseStatus(HttpStatus.CREATED)
    public void createProject(Authentication authentication, @RequestBody CreateProjectRequestDto createProjectRequestDto) {
        projectService.createProject(authentication, createProjectRequestDto);
    }
}
