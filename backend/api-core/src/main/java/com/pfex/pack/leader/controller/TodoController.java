package com.pfex.pack.leader.controller;

import com.pfex.pack.leader.model.DeletedTodos;
import com.pfex.pack.leader.model.Todos;
import com.pfex.pack.leader.repository.TodoRepository;
import java.util.List;
import java.util.Optional;

import com.pfex.pack.leader.service.DeletedTodosService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("todos")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

    private final TodoRepository repository;
    private final DeletedTodosService deletedTodosService;


    @PostMapping
    public Todos createTodo(@Valid @RequestBody Todos todosModel) {
        return repository.save(todosModel);
    }

    @GetMapping("{id}")
    public ResponseEntity getTodosById(@PathVariable Integer id) {
        Optional<Todos> response = repository.findById(id);
        if (response.isPresent()) {
            return ResponseEntity.ok(response.get());
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("{id}")
    public ResponseEntity deleteTodos(@PathVariable Integer id) {
        Optional<DeletedTodos> response = deletedTodosService.createDeletedTodo(id);
        if (response.isPresent()) {
            return ResponseEntity.ok(response.get());
        }

        return ResponseEntity.notFound().build();
    }

    @PutMapping("{id}")
    public ResponseEntity updateTodos(@Valid @PathVariable Integer id, @RequestBody Todos todos) {
        // Use the ID from path variable
        todos.setId(id);

        // Validate if todos exists
        boolean exists = repository.existsById(id);
        if (!exists) {
            return ResponseEntity.notFound().build();
        }

        // Update the entity
        Todos response = repository.save(todos);
        return ResponseEntity.ok(response);
    }

    @GetMapping("search")
    public ResponseEntity searchTodos(@RequestParam String title) {
        List<Todos> response = repository.findAllByTitleContainsIgnoreCase(title);
        if (response.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(response);
        }
    }

    @GetMapping
    public ResponseEntity allTodos() {
        List<Todos> response = repository.findAll();
        if (response.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(response);
        }
    }
}