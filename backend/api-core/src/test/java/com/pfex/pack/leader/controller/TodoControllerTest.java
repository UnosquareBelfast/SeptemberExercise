package com.pfex.pack.leader.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.postgresql.hostchooser.HostRequirement.any;

import com.pfex.pack.leader.model.DeletedTodos;
import com.pfex.pack.leader.model.Todos;
import com.pfex.pack.leader.repository.DeletedTodoRepository;
import com.pfex.pack.leader.repository.TodoRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
    public void whenGetAllTodosIsCalledAndIsValid(){
        //arrange
        when(repository.findAll()).thenReturn(listOfTodos);

        //act
        ResponseEntity response = controller.allTodos();

        //assert
        assertEquals(listOfTodos, response.getBody());
        assertEquals(HttpStatus.OK, response.getStatusCode());
        System.out.println(response);
        System.out.println(listOfTodos);

    }

    @Test
    public void addingTodoIsSuccessful(){

        Integer id=100;
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
    public void updatingTodoIsSuccessful(){

        Integer id =101;
        Todos todoItem = new Todos(id, "updateThis");

        //arrange
        when(repository.save(todoItem)).thenReturn(todoItem);
        when(repository.existsById(id)).thenReturn(true);

        Todos resp = controller.createTodo(todoItem);
        //System.out.println(resp.getTitle());

        resp.setTitle("updateThat");
        //System.out.println(resp);

        //act
        ResponseEntity response = controller.updateTodos(resp.getId(), resp);
        //System.out.println(response);


        //System.out.println(repository.existsById(id));//returning false
        //System.out.println(resp);

        //assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(todoItem.getTitle(), "updateThat");
    }

//    @Test
//    public void deleteToDoSuccessful(){
//
//
//        //not working at all
//
//        Integer id =102;
//        Todos todoItem = new Todos(id, "deleting");
//
//        //arrange
//        when(repository.save(todoItem)).thenReturn(todoItem);
//        //when(controller.deleteTodos(todoItem.getId())).thenReturn(null);
//
//        Todos theTodo = controller.createTodo(todoItem);
//        System.out.println(theTodo);
//
//        //when(deletedTodosService.createDeletedTodo(theTodo.getId())).thenReturn(Optional.empty());
//
//        //when(deletedTodosService.createDeletedTodo(todoItem.getId())).thenReturn(null);
//
//        when(repository.findById(theTodo.getId())).thenReturn(Optional.of(theTodo));
//
//        DeletedTodos deletedItem = new DeletedTodos(null, theTodo.getId(), theTodo.getTitle());
//        when(deletedTodoRepository.save(deletedItem)).thenReturn(deletedItem);
//
//
//        System.out.println(deletedItem);
//
//
//
//        //act
//       Optional<DeletedTodos> response = deletedTodosService.createDeletedTodo(theTodo.getId());
//       System.out.println(response);
//
//
//
//
//        ResponseEntity response2 = controller.deleteTodos(theTodo.getId());
//        System.out.println(response2.getStatusCode());
//
//
//
//        //assert
//        //assertEquals(HttpStatus.OK, response.getStatusCode());
//
//
//    }

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


}
