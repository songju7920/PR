package com.example.pr_backend.domain.user.service;

public interface UserService {
    void signup(String username, String password, String skills, String major);

    void deleteAcc(Long user_id);
}
