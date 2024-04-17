package com.example.pr_backend.domain.user.controller;

import com.example.pr_backend.domain.user.dto.request.LoginDto;
import com.example.pr_backend.domain.user.dto.request.SignupDto;
import com.example.pr_backend.domain.user.dto.response.TokenResponse;
import com.example.pr_backend.domain.user.dto.response.UserInfoDto;
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

    @PostMapping("/user/login")
    public TokenResponse login(@RequestBody LoginDto loginDto) {
        String username = loginDto.getUsername();
        String password = loginDto.getPassword();

        return userService.login(username, password);
    }

    @DeleteMapping("/user/{userId}")
    public void deleteAcc (@PathVariable("userId") String user_id) {

        userService.deleteAcc(Long.parseLong(user_id));
    }

    @GetMapping("/user/profile/info/{userId}")
    public UserInfoDto getUserData (@PathVariable("userId") String user_id) {

        return userService.getUserData(Long.parseLong(user_id));
    }
}
