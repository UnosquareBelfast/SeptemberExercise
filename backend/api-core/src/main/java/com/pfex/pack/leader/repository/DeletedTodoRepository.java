package com.pfex.pack.leader.repository;


import com.pfex.pack.leader.model.DeletedTodos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface DeletedTodoRepository extends JpaRepository<DeletedTodos, Integer> {

}
