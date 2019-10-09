package com.pfex.pack.leader.controller;

import com.pfex.pack.leader.model.users.user;
import com.pfex.pack.leader.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("users")
@RestController
public class UserController {
    @Autowired
    private UserRepository repository;

    @PostMapping
    public user createUser(@RequestBody user usermodel) {
        return repository.save(usermodel);
    }

    @GetMapping("{id}")
    public ResponseEntity getUserById(@PathVariable Integer id) {
        Optional<user> response = repository.findById(id);

        return response.isPresent() ?
                ResponseEntity.ok(response.get()) :
                ResponseEntity.notFound().build();
    }
    @GetMapping("{username}")
    public ResponseEntity getUserByUsername(@PathVariable String username) {
        List<user> response = repository.findByUsername(username);
        if (response.isEmpty()) {
            System.out.println("Not Found");
            return ResponseEntity.notFound().build();
        } else {
            System.out.println("Found");
            return ResponseEntity.ok(response);

        }
    }

    @GetMapping()
    public ResponseEntity allusers() {
        List<user> response = repository.findAll();
        if (response.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(response);
        }
    }

}
