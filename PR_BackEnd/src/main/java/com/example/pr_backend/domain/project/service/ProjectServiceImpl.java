package com.example.pr_backend.domain.project.service;

import com.example.pr_backend.domain.project.dto.request.CreateProjectRequestDto;
import com.example.pr_backend.domain.project.dto.response.SearchProjectDto;
import com.example.pr_backend.domain.project.dto.response.SearchProjectRequestDto;
import com.example.pr_backend.domain.project.model.Project;
import com.example.pr_backend.domain.project.repository.ProjectRepository;
import com.example.pr_backend.domain.user.exception.UserNotFoundException;
import com.example.pr_backend.domain.user.model.User;
import com.example.pr_backend.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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
}
