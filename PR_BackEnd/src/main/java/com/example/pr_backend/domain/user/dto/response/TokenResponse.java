package com.example.pr_backend.domain.user.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TokenResponse {
    private Long user_id;
    private String accessToken;
}
