package com.pfex.pack.leader.repository;

import com.pfex.pack.leader.model.users.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<user,Integer> {

    List<user> findByUsername(String username);
}
