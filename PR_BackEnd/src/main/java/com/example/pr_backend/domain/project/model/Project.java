package com.example.pr_backend.domain.project.model;

import com.example.pr_backend.domain.user.model.User;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Getter
@Entity
@DynamicInsert
@DynamicUpdate
@Table(name = "projects")
public class Project {
    @Id
    @Column(nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long post_id;

    @Column(nullable = false, length = 50)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String contents;

    @Column(nullable = false)
    @ColumnDefault("false")
    private Boolean is_recruiting;

    @ManyToOne
    @JoinColumn(name = "writer_id")
    private User user;

    protected Project() {}

    @Builder
    public Project(String title, String contents, Boolean is_recruiting, User user) {
        this.title = title;
        this.contents = contents;
        this.user = user;
        this.is_recruiting = is_recruiting;
    }
}
