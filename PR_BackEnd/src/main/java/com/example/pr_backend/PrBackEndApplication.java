package com.example.pr_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@ConfigurationPropertiesScan
public class PrBackEndApplication {

    public static void main(String[] args) {
        SpringApplication.run(PrBackEndApplication.class, args);
    }

}
