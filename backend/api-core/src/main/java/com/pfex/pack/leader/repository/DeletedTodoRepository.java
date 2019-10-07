package com.pfex.pack.leader.repository;

import com.pfex.pack.leader.model.todos.DeletedTodos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeletedTodoRepository extends JpaRepository<DeletedTodos,Integer>{
}
