package com.example.pr_backend.domain.user.controller;

import com.example.pr_backend.domain.user.dto.SignupDto;
import com.example.pr_backend.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequiredArgsConstructor
public class UserController {

    final private UserService userService;

    @PostMapping("/user/signup")
    public String signup (@RequestBody SignupDto signupDto) {
        String username = signupDto.getUsername();
        String password = signupDto.getPassword();
        String skills = signupDto.getSkills();

        String result = userService.signup(username, password, skills);

        if (result.equalsIgnoreCase("success")) {
            return "success to signup! plz check DB";
        } else {
            System.out.println(result);
            return "fail to signup.. plz check log";
        }
    }

    @DeleteMapping("/user/{userId}")
    public void deleteAcc (@PathVariable("userId") String user_id) {
        userService.deleteAcc(Long.parseLong(user_id));
    }
}
