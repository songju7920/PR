package com.example.pr_backend.domain.user.model;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    private long userId;

    @Column(nullable = false, length = 20, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String skills;

    @Column(nullable = false, length = 40, unique = true)
    private String email;

    @Column
    private String tel;

    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false)
    private Major major;

    @Builder()
    public User(String username, String password, String skills, String email, String tel, Major major) {
        this.username = username;
        this.password = password;
        this.skills = skills;
        this.email = email;
        this.tel = tel;
        this.major = major;
    }
}
