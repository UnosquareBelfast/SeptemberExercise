package com.pfex.pack.leader.model;

import javax.persistence.*;

import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "deletedtodos")
public class DeletedTodo implements Serializable {
    @Id
    @SequenceGenerator(name = "seq", sequenceName = "deletedtodos_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq")
    private Integer id;
    private String title;
}
