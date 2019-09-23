package com.pfex.pack.leader.service;

import com.pfex.pack.leader.model.Todos;
import com.pfex.pack.leader.model.DeletedTodo;
import com.pfex.pack.leader.repository.DeleteTodoRepository;
import com.pfex.pack.leader.repository.TodoRepository;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DeleteTodosService{
    private final DeleteTodoRepository deleteTodoRepository;
    private final TodoRepository todoRepository;

    public Optional<DeletedTodo> createDeletedTodo(Integer id){
        Optional<Todos> optionalTodos = todoRepository.findById(id);
        if (!optionalTodos.isPresent())
            return Optional.empty();

        Todos todos = optionalTodos.get();
        DeletedTodo deletedTodos = new DeletedTodo(todos.getId(), todos.getTitle());
        DeletedTodo response = deleteTodoRepository.save(deletedTodos);

        if(response != null)
            todoRepository.deleteById(todos.getId());

        return Optional.ofNullable(response);
    }

    public Optional<DeletedTodo> findById(Integer id){
        return deleteTodoRepository.findById(id);
    }
}