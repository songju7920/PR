package com.example.pr_backend.domain.user.service;

import com.example.pr_backend.domain.user.dto.response.TokenResponse;
import com.example.pr_backend.domain.user.dto.response.UserInfoDto;
import com.example.pr_backend.domain.user.exception.NotFoundEnumTypeException;
import com.example.pr_backend.domain.user.exception.PasswordMismatchException;
import com.example.pr_backend.domain.user.exception.UserAlreadyExistException;
import com.example.pr_backend.domain.user.exception.UserNotFoundException;
import com.example.pr_backend.domain.user.model.Major;
import com.example.pr_backend.domain.user.model.User;
import com.example.pr_backend.domain.user.repository.UserRepository;
import com.example.pr_backend.global.security.jwt.JwtTokenProvider;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    final private PasswordEncoder passwordEncoder;
    final private UserRepository userRepository;
    final private JwtTokenProvider jwtTokenProvider;

    @Override
    public void signup(String username, String password, String skills, String major, String email) {
        Major majorType;

        try {
            majorType = Major.valueOf(major);
        } catch(Exception ex) {
            throw NotFoundEnumTypeException.EXCEPTION;
        }

        if (userRepository.existsByUsernameOrEmail(username, email)) {
            throw UserAlreadyExistException.EXCEPTION;
        }

        User user = User.builder()
                .username(username)
                .password(passwordEncoder.encode(password))
                .skills(skills)
                .email(email)
                .major(majorType)
                .build();
        userRepository.save(user);
    }

    @Override
    @Transactional
    public TokenResponse login(String username, String password) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> UserNotFoundException.EXCEPTION);

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw PasswordMismatchException.EXCEPTION;
        }

        return TokenResponse
                .builder()
                .accessToken(jwtTokenProvider.generateAccess(user.getUsername(), user.getUserId()))
                .user_id(user.getUserId())
                .build();
    }

    @Override
    public void deleteAcc(Long user_id) {
        Optional<User> user = userRepository.findById(user_id);

        if (user.isPresent()) {
            userRepository.deleteById(user_id);
        } else {
            throw UserNotFoundException.EXCEPTION;
        }
    }

    @Override
    public UserInfoDto getUserData(Long user_id) {
        User user = userRepository.findById(user_id)
                .orElseThrow(() -> UserNotFoundException.EXCEPTION);

        return UserInfoDto.builder()
                .user_id(user_id)
                .username(user.getUsername())
                .skills(user.getSkills())
                .mail(user.getEmail())
                .tel(user.getTel())
                .major(user.getMajor())
                .build();
    }
}
