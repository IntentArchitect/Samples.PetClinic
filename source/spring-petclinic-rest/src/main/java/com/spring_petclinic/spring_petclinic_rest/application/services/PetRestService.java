package com.spring_petclinic.spring_petclinic_rest.application.services;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetCreateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetUpdateDTO;

import com.spring_petclinic.spring_petclinic_rest.application.models.PetDTO;


public interface PetRestService {
    PetDTO getPet(Integer petId);

    void addPet(PetCreateDTO dto);

    void updatePet(Integer petId, PetUpdateDTO dto);

    void deletePet(Integer petId);

}