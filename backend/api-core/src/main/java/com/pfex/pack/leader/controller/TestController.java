package com.pfex.pack.leader.controller;

import com.pfex.pack.leader.model.TestViewModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/*
    Rest operations:
    Create - @PostMapping
    Read - @GetMapping
    Update - @PutMapping
    Delete - @DeleteMapping
  */
@RequestMapping("tests")
@RestController
public class TestController {

    @PostMapping
    public ResponseEntity createTest(@RequestBody TestViewModel testViewModel) {
        return ResponseEntity.ok(testViewModel);
    }

    @GetMapping("{testId}")
    public ResponseEntity getTest(@PathVariable final String testId) {
        // TODO make database call to retrieve by ID
        return ResponseEntity.ok("Test"); // Mock response
    }

    @PutMapping("{testId}")
    public ResponseEntity updateTest(@PathVariable String testId, @RequestBody TestViewModel testViewModel) {
        // Use the ID from the path variable
        testViewModel.setId(testId);

        // TODO database call to validate that ID exists

        // TODO database call to update test

        return ResponseEntity.ok(testViewModel); // Mock response
    }

    @DeleteMapping("{testId}")
    public ResponseEntity deleteTest(@PathVariable final String testId) {

        // TODO database call to delete test

        // Mock to demonstrate different responses
        if (testId.length() > 2) {
            return ResponseEntity.ok("It worked!");
        } else {
            return ResponseEntity.badRequest().body("Something went wrong");
        }
    }

    @GetMapping
    public TestViewModel searchTest(@RequestParam("firstName") String firstName) {
        // TODO query database for id, first name, last name etc
        return new TestViewModel("1", firstName, "fake"); // Mock response
    }
}