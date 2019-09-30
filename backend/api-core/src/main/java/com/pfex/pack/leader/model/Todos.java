package com.pfex.pack.leader.model;

import java.io.Serializable;
import java.time.LocalDateTime;
import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Todos implements Serializable {

    @Id
    @SequenceGenerator(name="seq",sequenceName="todos_id_seq", allocationSize = 1)
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="seq")
    private Integer id;
    private String title;
    private LocalDateTime date_added;
}
