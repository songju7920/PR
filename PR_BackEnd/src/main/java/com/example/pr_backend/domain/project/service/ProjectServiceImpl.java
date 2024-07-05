package com.example.pr_backend.domain.project.service;

import com.example.pr_backend.domain.project.dto.request.CreateProjectRequestDto;
import com.example.pr_backend.domain.project.dto.response.SearchProjectDto;
import com.example.pr_backend.domain.project.dto.response.SearchProjectRequestDto;
import com.example.pr_backend.domain.project.exception.PostNotFoundException;
import com.example.pr_backend.domain.project.model.Project;
import com.example.pr_backend.domain.project.repository.ProjectRepository;
import com.example.pr_backend.domain.user.exception.UserNotFoundException;
import com.example.pr_backend.domain.user.model.User;
import com.example.pr_backend.domain.user.repository.UserRepository;
import com.example.pr_backend.global.exception.ForbiddenException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {

    private final UserRepository userRepository;
    private final ProjectRepository projectRepository;

    @Override
    public void createProject(Authentication authentication, CreateProjectRequestDto createProjectRequestDto) {
        String title = createProjectRequestDto.title();
        String contents = createProjectRequestDto.contents();

        String username = authentication.getName();
        User user = userRepository.findByUsername(username).orElseThrow(
                () -> UserNotFoundException.EXCEPTION
        );

        System.out.println(createProjectRequestDto);

        projectRepository.save(Project.builder()
                        .title(title)
                        .contents(contents)
                        .user(user)
                        .build());
    }

    @Override
    public SearchProjectRequestDto searchProject(String keyword) {

        List<Project> projects = projectRepository.findByTitleContaining(keyword);

        List<SearchProjectDto> processedProjects = new ArrayList<>();
        for (Project project: projects) {
            SearchProjectDto processedProject = new SearchProjectDto(
                    project.getPost_id(),
                    project.getUser().getUsername(),
                    project.getTitle(),
                    project.getContents(),
                    project.getLogo()
            );

            processedProjects.add(processedProject);
        }

        return new SearchProjectRequestDto(processedProjects);
    }

    @Override
    public void DeleteProject(Authentication authentication, Long postId) {
        String username = authentication.getName();

        Project project = projectRepository.findByPost_id(postId).orElseThrow(
                () -> PostNotFoundException.Exception
        );

        if (!Objects.equals(project.getUser().getUsername(), username)) {
            throw ForbiddenException.Exception;
        }

        projectRepository.deleteById(postId);
    }
}
