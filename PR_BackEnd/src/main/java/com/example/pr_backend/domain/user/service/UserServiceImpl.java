package com.example.pr_backend.domain.user.service;

import com.example.pr_backend.domain.user.dto.response.TokenResponse;
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
    public void signup(String username, String password, String skills, String major) {
        Major majorType;

        try {
            majorType = Major.valueOf(major);
        } catch(Exception ex) {
            throw new RuntimeException("존재하지 않는 Enum type");
        }

        User user = User.builder()
                .username(username)
                .password(passwordEncoder.encode(password))
                .skills(skills)
                .major(majorType)
                .build();
        userRepository.save(user);
    }

    @Override
    @Transactional
    public TokenResponse login(String username, String password) {
        User user = userRepository.findByUsername(username).orElseThrow(RuntimeException::new);

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException();
        }

        return TokenResponse
                .builder()
                .accessToken(jwtTokenProvider.generateAccess(user.getUsername()))
                .build();
    }

    @Override
    public void deleteAcc(Long user_id) {
        Optional<User> user = userRepository.findById(user_id);

        if (user.isPresent()) {
            userRepository.deleteById(user_id);
        } else {
            throw new RuntimeException("유저를 찾을 수 없음");
        }
    }
}
