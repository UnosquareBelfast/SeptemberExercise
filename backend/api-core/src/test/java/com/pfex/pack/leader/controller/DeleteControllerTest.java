package com.pfex.pack.leader.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import com.pfex.pack.leader.model.DeletedTodos;
import com.pfex.pack.leader.repository.DeletedTodoRepository;

import java.util.ArrayList;
import java.util.List;

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
public class DeleteControllerTest {

    @Mock
    DeletedTodoRepository repository;

    List<DeletedTodos> listOfDeletedTodos = new ArrayList<>();

    @InjectMocks
    private DeleteController controller;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(controller);
        for (int i = 0; i < 3; i++) {
            DeletedTodos todos = new DeletedTodos(i,i, "test " + i);
            listOfDeletedTodos.add(todos);
        }
    }
    @Test
    public void whenGetAllTodosIsCalledAndIsValid() {
        // Arrange
        when(repository.findAll()).thenReturn(listOfDeletedTodos);

        // Act
        ResponseEntity response = controller.allDeletedTodos();

        //Assert
        assertEquals(listOfDeletedTodos,response.getBody());
        assertEquals(HttpStatus.OK, response.getStatusCode());
        System.out.println(response);
        System.out.println(listOfDeletedTodos);
    }


}
