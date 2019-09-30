package com.pfex.pack.leader.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import com.pfex.pack.leader.model.DeletedTodos;
import com.pfex.pack.leader.model.Todos;
import com.pfex.pack.leader.repository.TodoRepository;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import com.pfex.pack.leader.service.DeletedTodosService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@SpringBootTest
@RunWith(MockitoJUnitRunner.class)
public class TodoControllerTest {

    @Mock
    DeletedTodosService deletedTodosService;

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

    @Test
    public void SavingNewTodo() {

        // Arrange
        Todos newTodo = new Todos(8,"I'm new here");
        when(repository.save(newTodo)).thenReturn(newTodo);

        // Act
        listOfTodos.add(controller.createTodos(newTodo));

        //Assert
        assertEquals(newTodo,listOfTodos.get(3));
    }

    @Test
    public void deleteToDoSuccessful(){
        // ARRANGE
        DeletedTodos deletedTodos = new DeletedTodos(1, 1,"test1");
        when(deletedTodosService.createDeletedTodo(deletedTodos.getId())).thenReturn(Optional.of(deletedTodos));
        // ACT
        ResponseEntity responseEntity = controller.deleteTodos(deletedTodos.getId());
        // ASSERT
        assertThat(responseEntity).isNotNull();
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
    }
    @Test
    public void deleteToDoFailure(){
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
        when(repository.findAllByTitle(any())).thenReturn(listOfTodos);

        // Act
        ResponseEntity<List<Todos>> response = controller.searchTodos("test 1");

        //Assert
        assertThat(response.getBody()).containsAll(listOfTodos);
        assertEquals(HttpStatus.OK, response.getStatusCode());

    }

    @Test
    public void searchingForTodoAndNOTFound() {
        // Arrange
        listOfTodos.clear();
        when(repository.findAllByTitle(any())).thenReturn(listOfTodos);

        // Act
        ResponseEntity<List<Todos>> response = controller.searchTodos("test 1");

        //Assert
        System.out.print(response);
        assertThat(response).isNotNull();
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());

    }

    @Test
    public void successfullyUpdateATodo() {
        // Arrange
        Todos updatedTodo = new Todos(2,"Updated Todo");
        Boolean found = false;

        when(repository.existsById(listOfTodos.get(1).getId())).thenReturn(found = true);
        when(repository.save(updatedTodo)).thenReturn(listOfTodos.set(1,updatedTodo));

        // Act
        ResponseEntity responseEntity = controller.updateTest(1,updatedTodo);

        //Assert
        assertThat(found).isTrue();
        assertThat(listOfTodos.get(1)).isEqualTo(updatedTodo);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());

    }

    @Test
    public void FailedToUpdateATodo() {
        // Arrange
        Todos updatedTodo = new Todos(2,"Updated Todo");
        Boolean found = false;

        when(repository.existsById(listOfTodos.get(1).getId())).thenReturn(found = false);

        // Act
        ResponseEntity responseEntity = controller.updateTest(1,updatedTodo);

        //Assert
        assertThat(found).isFalse();
        assertThat(listOfTodos).doesNotContain(updatedTodo);
        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());

    }







}
