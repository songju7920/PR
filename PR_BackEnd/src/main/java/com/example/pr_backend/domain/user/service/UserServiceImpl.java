package com.example.pr_backend.domain.user.service;

import com.example.pr_backend.domain.user.model.User;
import com.example.pr_backend.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    final private UserRepository userRepository;

    @Override
    public String signup(String username, String password, String skills) {
        User user = User.builder().username(username).password(password).skills(skills).build();
        userRepository.save(user);

        return "success";
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
