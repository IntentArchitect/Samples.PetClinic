package com.spring_petclinic.spring_petclinic_rest.application.services;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetCreateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetUpdateDTO;

import com.spring_petclinic.spring_petclinic_rest.application.models.PetDTO;


public interface PetRestService {
    PetDTO getPet(int petId);

    void addPet(PetCreateDTO dto);

    void updatePet(int petId, PetUpdateDTO dto);

    void deletePet(int petId);

}