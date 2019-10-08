package com.pfex.pack.leader.service;
import com.pfex.pack.leader.model.todos.DeletedTodos;
import com.pfex.pack.leader.model.todos.Todos;
import com.pfex.pack.leader.repository.DeletedTodoRepository;
import com.pfex.pack.leader.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DeletedTodosService {

    private final DeletedTodoRepository deletedTodoRepository;
    private final TodoRepository todoRepository;

    public Optional<DeletedTodos> createDeletedTodo(Integer id){
        Optional<Todos> optionalTodos = todoRepository.findById(id);
        if(!optionalTodos.isPresent()) {
            return Optional.empty();
        }
        Todos todos = optionalTodos.get();
        DeletedTodos deletedTodos = new DeletedTodos(null, todos.getId(), todos.getTitle());
        DeletedTodos response = deletedTodoRepository.save(deletedTodos);
        if (response != null) {
            todoRepository.deleteById(todos.getId());
        }
        return Optional.ofNullable(response);
    }

    public Optional<DeletedTodos> findById(Integer id) {
        return deletedTodoRepository.findById(id);
    }

    public Optional<Todos> RecoverDeletedTodos(Integer id) {
        if (id == 1) {
            throw new IllegalArgumentException("Id is invalid");
        }
        Optional<DeletedTodos> optionalDeletedTodos = deletedTodoRepository.findById(id);
        if(!optionalDeletedTodos.isPresent()) {
            return Optional.empty();
        }
        DeletedTodos RecoverTodos = optionalDeletedTodos.get();
        Todos recoveredTodos = new Todos(RecoverTodos.getTodoId(), RecoverTodos.getTitle());
        Todos response = todoRepository.save(recoveredTodos);

        if (response != null) {
            deletedTodoRepository.deleteById(RecoverTodos.getId());
        }
        return Optional.ofNullable(response);
    }
}