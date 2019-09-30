package com.pfex.pack.leader.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import com.pfex.pack.leader.model.DeletedTodos;
import com.pfex.pack.leader.model.Todos;
import com.pfex.pack.leader.repository.DeletedTodoRepository;
import com.pfex.pack.leader.repository.TodoRepository;
import java.util.*;
import com.pfex.pack.leader.service.DeletedTodosService;
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
public class DeletedControllerTest {

    @Mock
    DeletedTodoRepository deletedTodoRepository;

    @InjectMocks
    private DeletedTodoController deletedTodoController;

    List<DeletedTodos> listOfDeletedTodos = new ArrayList<>();


    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(deletedTodoController);
    }

    @Test
    public void whenGetAllDeletedTodosIsCalledAndIsEmpty(){
        //arrange
        when(deletedTodoRepository.findAll()).thenReturn(listOfDeletedTodos);

        //act
        ResponseEntity<List<DeletedTodos>> response = deletedTodoController.allDeletedTodos();
        System.out.println(response);

        //assert
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        System.out.println(response);
        System.out.println(listOfDeletedTodos);

    }

    @Test
    public void whenGetAllDeletedTodosIsCalledAndIsValid(){

        //arrange
        DeletedTodos deletedTodo1 = new DeletedTodos(1, 2, "hello");
        when(deletedTodoRepository.findAll()).thenReturn(Collections.singletonList(deletedTodo1));

        //act
        ResponseEntity<List<DeletedTodos>> response = deletedTodoController.allDeletedTodos();

        //assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertThat(response.getBody()).contains(deletedTodo1);

    }


}

