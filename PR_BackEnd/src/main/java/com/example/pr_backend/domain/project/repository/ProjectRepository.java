package com.example.pr_backend.domain.project.repository;

import com.example.pr_backend.domain.project.model.Project;
import org.springframework.data.repository.CrudRepository;

public interface ProjectRepository extends CrudRepository<Project, Long> {
}
