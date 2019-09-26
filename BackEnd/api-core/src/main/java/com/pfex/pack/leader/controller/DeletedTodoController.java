package com.pfex.pack.leader.controller;

import com.pfex.pack.leader.model.DeletedTodos;
import com.pfex.pack.leader.model.Todos;
import com.pfex.pack.leader.repository.DeletedTodoRepository;
import com.pfex.pack.leader.service.DeleteToDoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("deletedtodos")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class DeletedTodoController {

    private final DeleteToDoService service;

    private final DeletedTodoRepository deleteRepo;

//    @GetMapping("{id}")
//    public ResponseEntity getDeletedTodosById(@PathVariable Integer id){
//        Optional<DeletedTodos> response = service.findById(id);
//        if(response.isPresent()){
//            return ResponseEntity.ok(response.get());
//        }
//
//        return ResponseEntity.notFound().build();
//    }

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

