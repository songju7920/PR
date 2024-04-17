package com.example.pr_backend.domain.user.dto.response;

import com.example.pr_backend.domain.user.model.Major;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserInfoDto {
    private long user_id;
    private String username;
    private String skills;
    private String mail;
    private String tel;
    private Major major;
}
