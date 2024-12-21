package com.example.getrand_frontservice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/getrand")
public class getRandController {
    @GetMapping
    public String getRand() {
        return "/page/main_page";
    }
}
