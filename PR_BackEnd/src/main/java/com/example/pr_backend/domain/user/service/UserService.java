package com.example.pr_backend.domain.user.service;

import com.example.pr_backend.domain.user.dto.response.TokenResponse;

public interface UserService {
    void signup(String username, String password, String skills, String major);

    TokenResponse login(String username, String password);

    void deleteAcc(Long user_id);

}
