package com.example.pr_backend.domain.user.service;

import com.example.pr_backend.domain.user.model.User;

import java.util.Optional;

public interface UserService {
    String signup(String username, String password, String skills);

    void deleteAcc(Long user_id);
}
