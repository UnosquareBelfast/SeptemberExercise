package com.pfex.pack.leader.controller;

import com.pfex.pack.leader.exceptions.testExceptions;
import com.pfex.pack.leader.model.DeletedTodos;
import com.pfex.pack.leader.model.Todos;
import com.pfex.pack.leader.repository.TodoRepository;
import com.pfex.pack.leader.service.DeleteToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

/*
    Rest operations:
    Create - @PostMapping
    Read - @GetMapping
    Update - @PutMapping
    Delete - @DeleteMapping
  */
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("todos")
@RestController
public class TodoController {


    private final TodoRepository repository;
    private final DeleteToDoService deleteToDoService;

    @PostMapping
    public Todos createTodo(@Valid @RequestBody Todos todosModel) {
        return repository.save(todosModel);
    }


    @GetMapping("{id}")
    public ResponseEntity getTodosById(@PathVariable Integer id) {
        Optional<Todos> response = repository.findById(id);
        return response.isPresent() ? ResponseEntity.ok(response.get()) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Object> deleteTodos(@PathVariable Integer id) {
        Optional<DeletedTodos> response = deleteToDoService.createDeletedTodo(id);
        if (response.isPresent()) {
            return ResponseEntity.ok(response.get());
        }
        repository.deleteById(id);
        return ResponseEntity.notFound().build();
    }

    @PutMapping("{id}")
    public ResponseEntity updateTodos(@Valid @PathVariable Integer id, @RequestBody Todos todos) {
        // Use the ID from the path variable
        todos.setId(id);

        // TODO database call to validate that ID exists

        // TODO database call to update test
        //Validate if todos exists
        boolean exists = repository.existsById(id); // Mock response
        if (!exists) {
            return ResponseEntity.notFound().build();
        }
        //Update the todos
        Todos response = repository.save(todos);
        return ResponseEntity.ok(response);
    }

    @GetMapping()
    public ResponseEntity allTodos() {
        List<Todos> response = repository.findAll();
        if (response.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(response);
        }
    }

    @GetMapping ("search")
    public ResponseEntity searchTodos(@Valid @RequestParam String title) {
        List<Todos> response = repository.findAllByTitleContainsIgnoreCase(title);
            return ResponseEntity.ok(response);
    }

}





