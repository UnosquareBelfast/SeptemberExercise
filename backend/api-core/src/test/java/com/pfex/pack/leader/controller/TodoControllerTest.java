package com.pfex.pack.leader.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import com.pfex.pack.leader.model.Todos;
import com.pfex.pack.leader.repository.TodoRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.junit.Assert.*;

@SpringBootTest
@RunWith(MockitoJUnitRunner.class)
public class TodoControllerTest {

    @Mock
    TodoRepository repository;

    List<Todos> listOfTodos = new ArrayList<>();

    @InjectMocks
    private TodoController controller;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(controller);
        for (int i = 0; i < 3; i++) {
            Todos todos = new Todos(i, "test " + i);
            listOfTodos.add(todos);
        }

    }

    @Test
    public void whenGetTodosByIdCalledThenExpectTodosReturnedOk() {
        Integer id = 1;

        Todos todos = new Todos(id, "test");

        // Arrange
        when(repository.findById(id)).thenReturn(Optional.of(todos));

        // Act
        ResponseEntity response = controller.getTodosById(id);

        // Assert
        assertThat(response.getBody()).isNotNull();
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    public void whenGetTodosByIdCalledThenExpectTodosReturnsNotFound() {
        Integer id = 2;

        // Arrange
        when(repository.findById(id)).thenReturn(Optional.empty());

        // Act
        ResponseEntity response = controller.getTodosById(id);

        // Assert
        assertThat(response.getBody()).isNull();
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
    }

    @Test
    public void whenGetAllTodosIsCalledAndIsValid() {
        // Arrange
        when(repository.findAll()).thenReturn(listOfTodos);

        // Act
        ResponseEntity response = controller.allTodos();

        //Assert
        assertEquals(listOfTodos,response.getBody());
        assertEquals(HttpStatus.OK, response.getStatusCode());
        System.out.println(response);
        System.out.println(listOfTodos);
    }

    @Test
    public void whenGetAllTodosIsCalledAndIsEmpty() {
        // Arrange
        listOfTodos.clear();
        when(repository.findAll()).thenReturn(listOfTodos);

        // Act
        ResponseEntity response = controller.allTodos();

        //Assert
        assertEquals(null,response.getBody());
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());


    }
    @Test
    public void whenCountAllToDos() {
        // Arrange
        Long ToDosSize = Long.valueOf(listOfTodos.size());
        when(repository.count()).thenReturn(ToDosSize);

        // Act
        ResponseEntity response = controller.countTodos();

        //Assert
        assertEquals(ToDosSize,response.getBody());
        assertEquals(HttpStatus.OK, response.getStatusCode());

    }

    @Test
    public void whenCountAllToDosIsEmpty() {
        // Arrange
        listOfTodos.clear();
        Long ToDosSize = Long.valueOf(listOfTodos.size());
        when(repository.count()).thenReturn(ToDosSize);

        // Act
        ResponseEntity response = controller.countTodos();

        //Assert
        assertEquals(null,response.getBody());
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());

    }

//    @Test
//    public void whenDeletingAToDo() {
//        // Arrange
//        Integer ToDoID = 1;
//        Todos newToDo = new Todos(ToDoID, "Title Be Here");
//        when(repository.delete(ToDoID)).thenReturn(ToDosSize);
//        // Act
//
//        //Assert
//
//    }
//
//    @Test
//    public void whenDeletingAEmptyToDo() {
//        // Arrange
//
//        // Act
//
//        //Assert
//    }

//    @Test
//    public void creatingANewToDo() {
//        int ToDoID = 1;
//        Todos newToDo = new Todos(ToDoID, "Title Be Here");
//        when(controller.createTools(newToDo)).thenReturn(listOfTodos.add(newToDo));
//
//    }






}
