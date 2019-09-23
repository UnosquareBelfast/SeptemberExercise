package com.pfex.pack.leader.model;

import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "deletedtodos")
public class DeletedTodos {

    @Id
    @SequenceGenerator(name="seq",sequenceName="deletedtodos_id_seq", allocationSize = 1)
    @GeneratedValue(strategy=GenerationType.AUTO,generator="seq")
    private Integer id;
    private String title;

}
