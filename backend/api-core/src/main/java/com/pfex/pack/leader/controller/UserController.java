package com.pfex.pack.leader.controller;

import com.pfex.pack.leader.model.todos.Todos;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

public class UserController {

    @GetMapping()
    public ResponseEntity allTodos() {
        List<Todos> response = repository.findAll();
        if (response.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(response);
        }
    }
}
