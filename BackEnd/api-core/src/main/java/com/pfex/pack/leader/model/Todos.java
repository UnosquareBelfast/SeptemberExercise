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
public class Todos {
    @Id
    @SequenceGenerator(name="seq", sequenceName="todos_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq")

    private Integer id;

    //checks it isnt null and length must be greater than 0
    @NotEmpty(message ="To do item must have a title")
    @Size(min=2, max=30, message="To do item must be between 2 and 30 characters")
    private String title;

}
