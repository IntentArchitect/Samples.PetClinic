package com.spring_petclinic.spring_petclinic_rest.application.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class OwnerUpdateDTO {
    private String firstName;
    private String lastName;
    private String address;
    private String city;
    private String telephone;

}