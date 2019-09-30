package com.pfex.pack.leader.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

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
    private String title;
    private LocalDateTime date_added;
}
