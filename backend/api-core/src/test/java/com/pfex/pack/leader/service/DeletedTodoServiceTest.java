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

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@SpringBootTest
@RunWith(MockitoJUnitRunner.class)
public class DeletedTodoServiceTest {

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
        // ARRANGE
        Todos todos = new Todos(1, "title");
        DeletedTodos deletedTodos = new DeletedTodos(null, todos.getId(), todos.getTitle());
        DeletedTodos createdDeletedTodos = new DeletedTodos(1, todos.getId(), todos.getTitle());

        when(todoRepository.findById(anyInt())).thenReturn(Optional.of(todos));
        when(deletedTodoRepository.save(deletedTodos)).thenReturn(createdDeletedTodos);

        // ACT
        Optional<DeletedTodos> response = deletedTodosService.createDeletedTodo(todos.getId());

        // ASSERT
        assertThat(response).isPresent();
        assertThat(response.get()).isEqualTo(createdDeletedTodos);

        verify(todoRepository).deleteById(todos.getId());
    }

}


