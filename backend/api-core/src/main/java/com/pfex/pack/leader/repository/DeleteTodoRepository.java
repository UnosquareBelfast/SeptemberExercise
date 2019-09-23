package com.pfex.pack.leader.repository;

import com.pfex.pack.leader.model.DeletedTodo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeleteTodoRepository extends JpaRepository<DeletedTodo, Integer> {

}