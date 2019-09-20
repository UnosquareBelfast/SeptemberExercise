package com.pfex.pack.leader.controller;

import com.pfex.pack.leader.model.DeletedTodos;
import com.pfex.pack.leader.repository.DeletedTodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("deleteToDos")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DeleteController {

    @Autowired
    private DeletedTodoRepository deletedTodoRepository;


    @GetMapping()
    public ResponseEntity allTodos() {
        List<DeletedTodos> response = deletedTodoRepository.findAll();
        if (response.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(response);
        }

    }
}
