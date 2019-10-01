package com.pfex.pack.leader.service;
import com.pfex.pack.leader.controller.TodoController;
import com.pfex.pack.leader.model.DeletedTodos;
import com.pfex.pack.leader.model.Todos;
import com.pfex.pack.leader.repository.DeletedTodoRepository;
import com.pfex.pack.leader.repository.TodoRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
@SpringBootTest
@RunWith(MockitoJUnitRunner.class)
public class DeletedTodosServiceTest {
    @Mock
    private TodoRepository todoRepository;
    @Mock
    private DeletedTodoRepository deletedTodoRepository;
    @InjectMocks
    private DeletedTodosService deletedTodosService;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(deletedTodosService);
    }
    @Test
    public void givenValidIdWhenCreatedDeletedTodoThenExpectDeletedTodosReturned() {
        // Arrange
        Todos todos = new Todos(1, "title");
        DeletedTodos deletedTodos = new DeletedTodos(null, todos.getId(), todos.getTitle());
        DeletedTodos createdDeletedTodos = new DeletedTodos(1, todos.getId(), todos.getTitle());
        when(todoRepository.findById(anyInt())).thenReturn(Optional.of(todos));
        when(deletedTodoRepository.save(deletedTodos)).thenReturn(createdDeletedTodos);
        // Act
        Optional<DeletedTodos> response = deletedTodosService.createDeletedTodo(todos.getId());
        // Assert
        System.out.print(response);
        assertThat(response).isPresent();
        assertThat(response.get()).isEqualTo(createdDeletedTodos);
        verify(todoRepository).deleteById(todos.getId());
    }

    @Test
    public void givenNOTValidIdWhenCreatedDeletedTodoThenExpectDeletedTodosReturnNotFound() {
        // Arrange
        Todos todos = new Todos(1, "title");
        when(todoRepository.findById(anyInt())).thenReturn(Optional.empty());

        // Act
        Optional<DeletedTodos> response = deletedTodosService.createDeletedTodo(todos.getId());
        // Assert
        assertThat(response).isNotPresent();
        System.out.print(response);

    }


    @Test
    public void recoverTodoFromDeleteDatabaseSuccessfully() {
        // Arrange
        DeletedTodos deletedTodos = new DeletedTodos(1, null, "hello world!");
        Todos recoverTodo = new Todos(null, deletedTodos.getTitle());
        Todos createdTodo = new Todos(1, deletedTodos.getTitle());
        when(deletedTodoRepository.findById(anyInt())).thenReturn(Optional.of(deletedTodos));
        when(todoRepository.save(recoverTodo)).thenReturn(createdTodo);

        // Act
        Optional<Todos> response = deletedTodosService.RecoverDeletedTodos(deletedTodos.getId());
        // Assert
        assertThat(response).isPresent();
        assertThat(response.get()).isEqualTo(createdTodo);
        verify(deletedTodoRepository).deleteById(deletedTodos.getId());
    }

    @Test
    public void UnableToRecoverTodoFromDeleteDatabaseNotAbleToFindDeleteToDoTestReturnEmpty() {
        // Arrange
        DeletedTodos todos = new DeletedTodos(1, null,"title");
        when(deletedTodoRepository.findById(anyInt())).thenReturn(Optional.empty());

        // Act
        Optional<Todos> response = deletedTodosService.RecoverDeletedTodos(todos.getId());
        // Assert
        assertThat(response).isNotPresent();
        System.out.print(response);
    }



}