package com.pfex.pack.leader.controller;


import com.pfex.pack.leader.model.DeletedTodos;
import com.pfex.pack.leader.repository.DeletedTodoRepository;
import com.pfex.pack.leader.service.DeletedTodosService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("deletedtodos")
@RequiredArgsConstructor
public class DeletedTodoController {

    @Autowired
    private final DeletedTodosService service;

    @Autowired
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

    @GetMapping("search")
    public ResponseEntity searchDeletedTodos(@Valid @RequestParam String title) {
        List<DeletedTodos> response = deleteRepo.findAllByTitleContainsIgnoreCase(title);

        return ResponseEntity.ok(response);
    }


}
