package com.pfex.pack.leader.controller;

import com.pfex.pack.leader.model.users.CustomerUserDetails;
import com.pfex.pack.leader.model.users.Users;
import com.pfex.pack.leader.repository.UserRepository;
import com.pfex.pack.leader.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("users")
@RestController
public class UserController {

    @Autowired
    private UserRepository repository;

    @Autowired
    private UserService service;

    @PostMapping
    public Users createUser(@RequestBody Users usermodel) {
        return repository.save(usermodel);
    }

    @GetMapping("{id}")
    public ResponseEntity getUserById(@PathVariable Integer id) {
        Optional<Users> response = repository.findById(id);

        return response.isPresent() ?
                ResponseEntity.ok(response.get()) :
                ResponseEntity.notFound().build();
    }

    @GetMapping("/findUsername")
    public ResponseEntity getUserByUsername(@RequestParam String username) {
        Optional<UserDetails> response = Optional.ofNullable(service.loadUserByUsername(username));
//        Optional<Users> response = repository.findByUsername(username);
        if (response.isPresent()) {
            System.out.println("Found");
            return ResponseEntity.ok(response);

        } else {

            System.out.println("Not Found");
            return ResponseEntity.notFound().build();
        }
    }



    @GetMapping()
    public ResponseEntity allusers() {
        List<Users> response = repository.findAll();
        if (response.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(response);
        }
    }

}
