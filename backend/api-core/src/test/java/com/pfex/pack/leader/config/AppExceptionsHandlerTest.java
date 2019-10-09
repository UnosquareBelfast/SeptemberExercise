package com.pfex.pack.leader.config;

import com.pfex.pack.leader.model.response.ErrorMessage;
import com.pfex.pack.leader.config.ExceptionObjects.TodoException;
import com.pfex.pack.leader.model.todos.Todos;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@RunWith(MockitoJUnitRunner.class)
public class AppExceptionsHandlerTest {

    @Mock
    private ErrorMessage errorMessage;

    @Mock
    private TodoException todoException;

    @InjectMocks
    private AppExceptionsHandler appExceptionsHandler;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(appExceptionsHandler);
    }






}
