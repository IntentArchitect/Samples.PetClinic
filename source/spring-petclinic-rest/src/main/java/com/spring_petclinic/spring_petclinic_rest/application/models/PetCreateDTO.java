package com.spring_petclinic.spring_petclinic_rest.application.models;
import lombok.AllArgsConstructor;

import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PetCreateDTO {
    private int ownerId;
    private String name;
    private LocalDate birthDate;
    private int petTypeId;

}