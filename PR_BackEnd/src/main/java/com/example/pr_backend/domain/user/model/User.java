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
    private long user_id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String skills;

    @Column
    private String mail;

    @Column
    private String tel;

    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false)
    private Major major;

    @Builder()
    public User(String username, String password, String skills, String mail, String tel, Major major) {
        this.username = username;
        this.password = password;
        this.skills = skills;
        this.mail = mail;
        this.tel = tel;
        this.major = major;
    }
}
