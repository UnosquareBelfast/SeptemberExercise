package com.pfex.pack.leader.service;

import com.pfex.pack.leader.controller.TodoController;
import com.pfex.pack.leader.model.DeletedTodos;
import com.pfex.pack.leader.model.Todos;
import com.pfex.pack.leader.repository.DeletedTodoRepository;
import com.pfex.pack.leader.repository.TodoRepository;
import org.graalvm.compiler.core.common.type.ArithmeticOpTable;
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
import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.*;

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

    @Test
    public void givenInvalidIdWhenCreatedDeletedTodo(){

        DeletedTodos deletedTodos = new DeletedTodos(null, null, null);
        //arrange
        lenient().when(todoRepository.findById(anyInt())).thenReturn(Optional.empty());
        lenient().when(deletedTodoRepository.save(deletedTodos)).thenReturn(null);

        //Act
        Optional<DeletedTodos> response = deletedTodosService.createDeletedTodo(null);

        //Assert
        assertThat(response.isPresent());
        assertEquals(response, Optional.empty());

    }




    @Test
    public void givenValidDeletedTodoThenExpectRecoveredDeletedTodo(){

        //Arrange
        Todos todos = new Todos(1, "title");
        DeletedTodos deletedTodos = new DeletedTodos(null, todos.getId(), todos.getTitle());
        DeletedTodos createdDeletedTodos = new DeletedTodos(1, todos.getId(), todos.getTitle());
        Todos recoveredTodos = new Todos(createdDeletedTodos.getTodoId(), createdDeletedTodos.getTitle());

        when(deletedTodoRepository.findById(anyInt())).thenReturn(Optional.of(createdDeletedTodos));
        when(todoRepository.save(recoveredTodos)).thenReturn(todos);


        //ACT
        Optional<Todos> response = deletedTodosService.RecoverDeletedTodos(createdDeletedTodos.getId());

        //Assert
        assertThat(response).isPresent();
        assertThat(response.get()).isEqualTo(todos);

        verify(deletedTodoRepository).deleteById(recoveredTodos.getId());
    }

    @Test
    public void givenInvalidDeletedTodoThenNoRecovery(){

        Todos recoveredTodos = new Todos(null, null);
        DeletedTodos createdDeletedTodos = new DeletedTodos(null, null, null);

        //Arrange
        lenient().when(deletedTodoRepository.findById(anyInt())).thenReturn(Optional.empty());
        lenient().when(todoRepository.save(recoveredTodos)).thenReturn(null);

        //ACT
        Optional<Todos> response = deletedTodosService.RecoverDeletedTodos(createdDeletedTodos.getId());
        System.out.println(response);

        //Assert
        assertThat(response.isPresent());
        assertEquals(response, Optional.empty());
    }

}


