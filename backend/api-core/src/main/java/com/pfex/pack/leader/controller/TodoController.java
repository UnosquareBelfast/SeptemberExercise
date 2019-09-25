package com.pfex.pack.leader.controller;

import com.pfex.pack.leader.model.DeletedTodos;
import com.pfex.pack.leader.model.Todos;
import com.pfex.pack.leader.repository.TodoRepository;
import com.pfex.pack.leader.service.DeletedTodosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RequestMapping("todos")
@RestController
public class TodoController {

    @Autowired
    private TodoRepository repository;

    @Autowired
    private  DeletedTodosService deletedTodosService;

    @PostMapping
    public Todos createTools(@RequestBody Todos todoModel) {
        return repository.save(todoModel);
    }

    @GetMapping("{id}")
    public ResponseEntity getTodosById(@PathVariable Integer id) {
        Optional<Todos> response = repository.findById(id);

        return response.isPresent() ?
                ResponseEntity.ok(response.get()) :
                ResponseEntity.notFound().build();
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
    @GetMapping("count")
    public ResponseEntity countTodos() {
        long response = repository.count();
        if (response == 0) {
           return ResponseEntity.notFound().build();
        }else {
            return ResponseEntity.ok(response);
        }

    }

    @GetMapping("/search/{id}")
    public ResponseEntity searchTodos(@RequestParam String title) {
        List<Todos> response = repository.findAllByTitle(title);
        if (response.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(response);
        }
    }

    @DeleteMapping("{id}")
    public ResponseEntity deleteTodos(@PathVariable Integer id) {
        Optional<DeletedTodos> response = deletedTodosService.createDeletedTodo(id);
        if (response.isPresent()) {
            return ResponseEntity.ok(response.get());
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/recover/{id}")
    public ResponseEntity recoverTodos(@PathVariable Integer id) {
        Optional<Todos> response = deletedTodosService.RecoverDeletedTodos(id);

        return response.isPresent() ?
                ResponseEntity.ok(response.get()) :
                ResponseEntity.notFound().build();
    }


    @PutMapping("{id}")
    public ResponseEntity updateTest(@PathVariable Integer id, @RequestBody @Valid Todos todoModel) {
        // Use the ID from the path variable
        todoModel.setId(id);

        Boolean todos_exists = repository.existsById(id);
        if(!todos_exists) {
            return ResponseEntity.notFound().build();
        }


        Todos response = repository.save(todoModel);
        return ResponseEntity.ok(response);
    }




}
