package com.example.pr_backend.domain.user.repository;

import com.example.pr_backend.domain.user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
