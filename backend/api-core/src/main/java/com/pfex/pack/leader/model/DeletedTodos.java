package com.pfex.pack.leader.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

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
    private String title;

}
