package com.pfex.pack.leader.controller;

import com.pfex.pack.leader.model.DeletedTodos;
import com.pfex.pack.leader.repository.DeletedTodoRepository;
import com.pfex.pack.leader.service.DeletedTodosService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("deletedtodos")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class DeleteController {

    private final DeletedTodosService service;

    @Autowired
    private final DeletedTodoRepository deleteRepo;


    @GetMapping
    public ResponseEntity allDeletedTodos() {
        List<DeletedTodos> response = deleteRepo.findAll();
        if (response.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(response);
        }
    }
}
