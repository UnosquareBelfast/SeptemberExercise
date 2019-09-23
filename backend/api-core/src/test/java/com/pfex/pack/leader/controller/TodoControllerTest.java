package com.pfex.pack.leader.controller;

import com.pfex.pack.leader.model.Todos;
import com.pfex.pack.leader.repository.TodoRepository;
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

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@SpringBootTest
@RunWith(MockitoJUnitRunner.class)
public class TodoControllerTest {

    @Mock
    TodoRepository repositoryMock;

    @InjectMocks
    private TodoController controller;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(controller);
    }

    @Test
    public void whenCreateTodoCalledTodoIsSavedToRepository() {
        // Arrange
        Integer id = 0;
        Todos todos = new Todos(id, "test");
        when(repositoryMock.save(todos)).thenReturn(todos);

        // Act
        Todos response = controller.createTodo(todos);

        // Assert
        assertThat(response).isNotNull();
    }

    @Test
    public void whenGetTodosByIdCalledThenExpectTodosReturnedOk() {
        Integer id = 1;

        Todos todos = new Todos(id, "test");

        when(repositoryMock.findById(id)).thenReturn(Optional.of(todos));

        ResponseEntity response = controller.getTodosById(id);

        assertThat(response.getBody()).isNotNull();
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    public void whenGetTodosByIdCalledThenExpectTodosReturnedNotFound() {
        Integer id = 2;

        when(repositoryMock.findById(id)).thenReturn(Optional.empty());

        ResponseEntity response = controller.getTodosById(id);

        assertThat(response.getBody()).isNull();
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
    }
}