package com.spring_petclinic.spring_petclinic_rest.application.models;
import java.util.List;
import lombok.AllArgsConstructor;

import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class VetCreateDTO {
    private String firstName;
    private String lastName;
    private List<Integer> specialties;

}