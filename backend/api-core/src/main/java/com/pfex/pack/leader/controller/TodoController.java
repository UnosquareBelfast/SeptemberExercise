package com.pfex.pack.leader.controller;

import com.pfex.pack.leader.model.DeletedTodo;
import com.pfex.pack.leader.model.Todos;
import com.pfex.pack.leader.repository.TodoRepository;
import com.pfex.pack.leader.service.DeleteTodosService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("todos")
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

    private final TodoRepository repository;
    private final DeleteTodosService deleteTodosService;

    @PostMapping
    public Todos createTodo(@RequestBody Todos todosModel) {
        return repository.save(todosModel);
    }

    @GetMapping("{id}")
    public ResponseEntity getTodosById(@PathVariable Integer id){
        Optional<Todos> response = repository.findById(id);

        if(response.isPresent()){
            return ResponseEntity.ok(response.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("{id}")
    public ResponseEntity updateTodos(@PathVariable Integer id, @RequestBody Todos todosModel) {
        todosModel.setId(id);

        boolean exists = repository.existsById(id);
        if(!exists) {
            return ResponseEntity.notFound().build();
        }

        Todos response = repository.save(todosModel);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("{id}")
    public ResponseEntity deleteTodos(@PathVariable Integer id) {
        Optional<DeletedTodo> response = deleteTodosService.createDeletedTodo(id);
        if(response.isPresent())
            return ResponseEntity.ok(response.get());

        return ResponseEntity.notFound().build();
    }

    @GetMapping
    public List<Todos> getCallTodos() {
        return repository.findAll();
    }

//    @DeleteMapping
//    public ResponseEntity deleteTodos(@PathVariable Integer id) {
//        Optional<DeletedTodo> response = deleteTodosService.createDeletedTodo(id);
//        if(response.isPresent())
//            return ResponseEntity.ok(response.get());
//
//        return ResponseEntity.notFound().build();
//    }

//    @GetMapping("search")
//    public ResponseEntity searchTodos(@RequestParam String title) {
//        List<Todos> response = repository.findAllByTitleContainsIgnoreCase(title);
//        if(response.isEmpty()) {
//            return ResponseEntity.notFound().build();
//        } else {
//            return ResponseEntity.ok(response);
//        }
//    }
}
