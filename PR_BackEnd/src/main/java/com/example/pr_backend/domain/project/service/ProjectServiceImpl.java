package com.example.pr_backend.domain.project.service;

import com.example.pr_backend.domain.project.dto.request.CreateProjectRequestDto;
import com.example.pr_backend.domain.project.model.Project;
import com.example.pr_backend.domain.project.repository.ProjectRepository;
import com.example.pr_backend.domain.user.exception.UserNotFoundException;
import com.example.pr_backend.domain.user.model.User;
import com.example.pr_backend.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

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
}
