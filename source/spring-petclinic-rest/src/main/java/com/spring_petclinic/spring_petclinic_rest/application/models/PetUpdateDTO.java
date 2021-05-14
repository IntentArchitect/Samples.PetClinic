package com.spring_petclinic.spring_petclinic_rest.application.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PetUpdateDTO {
    private String name;
    private java.time.LocalDate birthDate;
    private int petTypeId;

}