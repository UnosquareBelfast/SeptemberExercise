package com.pfex.pack.leader.controller;

import com.pfex.pack.leader.model.Todos;
import com.pfex.pack.leader.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RequestMapping("todos")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

    @Autowired
    private TodoRepository repository;

    @PostMapping
    public Todos createTools(@RequestBody Todos todoModel) {
        return repository.save(todoModel);
    }

    @GetMapping("{id}")
    public ResponseEntity getTodosById(@PathVariable Integer id) {
        Optional<Todos> response = repository.findById(id);

        if (response.isPresent()) {
            return ResponseEntity.ok(response.get());
        } else {
            return ResponseEntity.notFound().build();
        }
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

//    @GetMapping
//    public ResponseEntity searchTodos(@RequestParam String title) {
//        List<Todos> response = repository.findAllByTitle(title);
//        if (response.isEmpty()) {
//            return ResponseEntity.notFound().build();
//        } else {
//            return ResponseEntity.ok(response);
//        }
//    }

    @DeleteMapping("{id}")
    public void deleteTodos(@PathVariable Integer id) {
        repository.deleteById(id);
    }

    @DeleteMapping("DeleteAll")
    public void deleteTodos() {
        repository.deleteAll();
        ResponseEntity.ok("Deleted");
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
