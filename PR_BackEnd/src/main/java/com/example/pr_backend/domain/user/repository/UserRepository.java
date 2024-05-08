package com.example.pr_backend.domain.user.repository;

import com.example.pr_backend.domain.user.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {

    Boolean existsByUsernameOrEmail(String username, String email);

    Optional<User> findByUsername(String username);
}
