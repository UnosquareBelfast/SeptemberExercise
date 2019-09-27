package com.pfex.pack.leader.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;

import com.pfex.pack.leader.model.DeletedTodos;
import com.pfex.pack.leader.repository.DeletedTodoRepository;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@RunWith(MockitoJUnitRunner.class)
public class DeleteControllerTest {

    @Mock
    DeletedTodoRepository repository;

    List<DeletedTodos> listOfDeletedTodos = new ArrayList<>();

    @InjectMocks
    private DeleteController controller;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(controller);
    }


}
