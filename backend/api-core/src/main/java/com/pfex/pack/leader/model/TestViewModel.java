package com.pfex.pack.leader.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TestViewModel {

    public String id;

    public String firstName;

    public String lastName;
}
