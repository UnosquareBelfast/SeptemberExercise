package com.pfex.pack.leader.repository;

import com.pfex.pack.leader.model.Todos;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends JpaRepository<Todos, Integer> {
    List<Todos> findAllByTitleContainsIgnoreCase(String title);
    List<Todos> findAllByTitle(String title);
}
