package com.pfex.pack.leader.controller;

import com.pfex.pack.leader.model.DeletedTodo;
import com.pfex.pack.leader.repository.DeleteTodoRepository;
import com.pfex.pack.leader.service.DeleteTodosService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("deletedtodos")
public class DeletedTodoController {

    private final DeleteTodosService service;
    private final DeleteTodoRepository deletedRepository;

    @GetMapping
    public ResponseEntity getAllDeletedTodos(){
        List<DeletedTodo> response = deletedRepository.findAll();

        if(response.isEmpty()){
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(response);
        }
    }
}
