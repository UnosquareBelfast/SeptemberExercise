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
public class Todos implements Serializable {
    @Id
    @SequenceGenerator(name = "seq", sequenceName = "todos_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq")
    private Integer id;
    private String title;
}
