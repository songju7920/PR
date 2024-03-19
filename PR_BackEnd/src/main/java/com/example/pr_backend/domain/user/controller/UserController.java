package com.example.pr_backend.domain.user.controller;

import com.example.pr_backend.domain.user.dto.request.SignupDto;
import com.example.pr_backend.domain.user.model.Major;
import com.example.pr_backend.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequiredArgsConstructor
public class UserController {

    final private UserService userService;

    @PostMapping("/user/signup")
    public void signup (@RequestBody SignupDto signupDto) {
        String username = signupDto.getUsername();
        String password = signupDto.getPassword();
        String skills = signupDto.getSkills();
        String major = signupDto.getMajor();

        userService.signup(username, password, skills, major);
    }

    @DeleteMapping("/user/{userId}")
    public void deleteAcc (@PathVariable("userId") String user_id) {

        userService.deleteAcc(Long.parseLong(user_id));
    }
}
