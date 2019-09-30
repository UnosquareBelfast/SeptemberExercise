package com.pfex.pack.leader.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "deletedtodos")
public class DeletedTodos {

    @Id
    @SequenceGenerator(name="seq",sequenceName="deletedtodos_id_seq", allocationSize = 1)
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="seq")
    private Integer id;
    @Column(name = "todoid")
    private Integer todoId;

    @NotEmpty(message = "Deleted item must have a title")
    @Size(min=2, max=30, message="Deleted item must be between 2 and 30 characters")
    private String title;

}
