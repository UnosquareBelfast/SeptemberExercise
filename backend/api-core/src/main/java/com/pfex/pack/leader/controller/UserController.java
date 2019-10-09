package com.pfex.pack.leader.controller;

import com.pfex.pack.leader.model.todos.Todos;
import com.pfex.pack.leader.model.users.user;
import com.pfex.pack.leader.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

public class UserController {
    @Autowired
    private UserRepository repository;


    @GetMapping("{id}")
    public ResponseEntity getTodosById(@PathVariable Integer id) {
        Optional<user> response = repository.findById(id);

        return response.isPresent() ?
                ResponseEntity.ok(response.get()) :
                ResponseEntity.notFound().build();
    }
}
