package com.pfex.pack.leader.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.postgresql.hostchooser.HostRequirement.any;

import com.pfex.pack.leader.model.DeletedTodos;
import com.pfex.pack.leader.model.Todos;
import com.pfex.pack.leader.repository.DeletedTodoRepository;
import com.pfex.pack.leader.repository.TodoRepository;

import java.util.*;

import com.pfex.pack.leader.service.DeletedTodosService;
import com.sun.tools.javac.comp.Todo;
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


@SpringBootTest
@RunWith(MockitoJUnitRunner.class)
public class TodoControllerTest {

    @Mock
    TodoRepository repository;

    @Mock
    private DeletedTodosService deletedTodosService;

    @InjectMocks
    private TodoController controller;

    List<Todos> listOfTodos = new ArrayList<>();

    @Before
    public void setUp() {

        MockitoAnnotations.initMocks(controller);
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
    public void whenGetAllTodosIsCalledAndIsEmpty() {
        //arrange
        when(repository.findAll()).thenReturn(listOfTodos);

        //act
        ResponseEntity<List<Todos>> response = controller.allTodos();
        System.out.println(response);

        //assert
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        System.out.println(response);
        System.out.println(listOfTodos);

    }

    @Test
    public void whenGetAllTodosIsCalledAndIsValid() {

        //arrange
        Todos todo1 = new Todos(1, "hello");
        when(repository.findAll()).thenReturn(Collections.singletonList(todo1));

        //act
        ResponseEntity<List<Todos>> response = controller.allTodos();

        //assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertThat(response.getBody()).contains(todo1);

    }

    @Test
    public void addingTodoIsSuccessful() {

        Integer id = 100;
        Todos todoItem = new Todos(id, "unitTest");
        //arrange
        when(repository.save(todoItem)).thenReturn(todoItem);

        //act
        Todos response = controller.createTodo(todoItem);

        //assert
        assertEquals(todoItem.getId(), response.getId());
        assertEquals(todoItem.getTitle(), response.getTitle());

    }

    @Test
    public void addingTodoIsNotSuccessfulTitleLeftEmpty() {

        //arrange
        Todos todo = new Todos(1, "");

//        Set<ConstraintViolation<Todos>> violation = validator.validate(todo);
//
//        assertThat(violation.size()).isEqualTo(0);

        when(repository.save(todo)).thenReturn(null);

        //act
        Todos response = controller.createTodo(todo);

        //assert
        assertEquals(response, null);

        System.out.println(repository.findById(1));

        assertEquals(repository.findById(todo.getId()), Optional.empty());


    }

    @Test
    public void updatingTodoIsSuccessful() {

        Integer id = 101;
        Todos todoItem = new Todos(id, "updateThis");

        //arrange
        when(repository.save(todoItem)).thenReturn(todoItem);
        when(repository.existsById(id)).thenReturn(true);

        //act
        ResponseEntity response = controller.updateTodos(todoItem.getId(), todoItem);

        //assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(response.getBody(), todoItem);
    }

    @Test
    public void updatingTodoIsNotSuccessfulTitleLeftEmpty() {

        Todos todoItem = new Todos(101, null);

        //arrange
        when(repository.existsById(101)).thenReturn(false);

        //act
        ResponseEntity response = controller.updateTodos(todoItem.getId(), todoItem);

        //assert
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals(response.getBody(), null);

    }

    @Test
    public void deleteToDoSuccessful() {
        // ARRANGE
        DeletedTodos deletedTodos = new DeletedTodos(1, 1, "test1");
        when(deletedTodosService.createDeletedTodo(deletedTodos.getId())).thenReturn(Optional.of(deletedTodos));
        // ACT
        ResponseEntity responseEntity = controller.deleteTodos(deletedTodos.getId());
        // ASSERT
        assertThat(responseEntity).isNotNull();
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    public void deleteToDoFailureAsTodoItemDoesNotExist() {
        // ARRANGE
        when(deletedTodosService.createDeletedTodo(null)).thenReturn(Optional.empty());
        // ACT
        ResponseEntity responseEntity = controller.deleteTodos(null);
        // ASSERT
        assertThat(responseEntity).isNotNull();
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
    }

    @Test
    public void searchingForTodoAndFound() {

        // Arrange
        lenient().when(repository.findAllByTitle(any())).thenReturn(listOfTodos);
        // Act
        ResponseEntity<List<Todos>> response = controller.searchTodos("test 1");
        //Assert
        assertThat(response.getBody()).containsAll(listOfTodos);
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    public void searchingForTodoAndNotFound() {

        // Arrange
        lenient().when(repository.findAllByTitle(null)).thenReturn(listOfTodos);
        // Act
        ResponseEntity<List<Todos>> response = controller.searchTodos(null);
        //Assert
        assertEquals(response.getBody().isEmpty(), listOfTodos.isEmpty());
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    public void recoverTodoAndSuccessful() {

        //Arrange
        Todos todos = new Todos(3, "back");
        when(deletedTodosService.RecoverDeletedTodos(todos.getId())).thenReturn(Optional.of(todos));

        //Act
        ResponseEntity responseEntity = controller.recoverTodos(todos.getId());

        //Assert
        assertThat(responseEntity).isNotNull();
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    public void recoverTodoNotSuccessfulItemDoesNotExist() {

        // ARRANGE
        when(deletedTodosService.RecoverDeletedTodos(null)).thenReturn(Optional.empty());
        // ACT
        ResponseEntity responseEntity = controller.recoverTodos(null);
        // ASSERT
        assertThat(responseEntity).isNotNull();
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
    }




}
