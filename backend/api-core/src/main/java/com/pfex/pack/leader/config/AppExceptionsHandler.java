package com.pfex.pack.leader.config;

        import com.pfex.pack.leader.config.ExceptionObjects.TodoException;
        import com.pfex.pack.leader.model.response.ErrorMessage;
        import org.springframework.http.HttpHeaders;
        import org.springframework.http.HttpStatus;
        import org.springframework.http.ResponseEntity;
        import org.springframework.web.bind.annotation.ControllerAdvice;

        import org.springframework.web.bind.annotation.ExceptionHandler;
        import org.springframework.web.context.request.WebRequest;
        import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

        import java.time.LocalDateTime;

@ControllerAdvice
public class AppExceptionsHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = {Exception.class})
    public ResponseEntity<Object> handleAnyException(Exception ex, WebRequest request) {

        String errorMessageDescription = ex.getLocalizedMessage();
        if (errorMessageDescription ==null) errorMessageDescription = ex.toString();

        ErrorMessage errorMessage = new ErrorMessage(LocalDateTime.now(), errorMessageDescription);
        return new ResponseEntity<>(errorMessage, new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(TodoException.class)
    public ResponseEntity<Object> handleTodoException(TodoException ex, WebRequest request) {

        String errorMessageDescription = ex.getLocalizedMessage();
        if (errorMessageDescription == null) {
            errorMessageDescription = ex.getMessage();
        }

        ErrorMessage errorMessage = new ErrorMessage(LocalDateTime.now(), errorMessageDescription);
        return ResponseEntity.badRequest().body(errorMessage);
    }

}
