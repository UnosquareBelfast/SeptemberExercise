package com.pfex.pack.leader.repository;

import com.pfex.pack.leader.model.Todos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todos, Integer> {

    List<Todos> findAllByTitle(String title);
}