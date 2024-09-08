package com.example.pr_backend.domain.project.controller;

import com.example.pr_backend.domain.project.dto.request.CreateProjectRequestDto;
import com.example.pr_backend.domain.project.dto.response.SearchProjectRequestDto;
import com.example.pr_backend.domain.project.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class ProjectController {
    private final ProjectService projectService;

    @PostMapping("/post/create")
    @ResponseStatus(HttpStatus.CREATED)
    public void createProject(
            Authentication authentication,
            @RequestBody CreateProjectRequestDto createProjectRequestDto
    ) {
        projectService.createProject(authentication, createProjectRequestDto);
    }

    @GetMapping("/post/search")
    public SearchProjectRequestDto searchProjects(@RequestParam("keyword") String keyword) {
        return projectService.searchProject(keyword);
    }

    @DeleteMapping("/project/{postId}")
    public void deleteProject(
            Authentication authentication,
            @PathVariable("postId") Long postId
    ) {
        projectService.DeleteProject(authentication, postId);
    }
}
