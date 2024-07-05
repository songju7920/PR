package com.example.pr_backend.domain.project.repository;

import com.example.pr_backend.domain.project.model.Project;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface ProjectRepository extends CrudRepository<Project, Long> {

    List<Project> findByTitleContaining(String keyword);

    Optional<Project> findByPost_id(Long postId);
}
