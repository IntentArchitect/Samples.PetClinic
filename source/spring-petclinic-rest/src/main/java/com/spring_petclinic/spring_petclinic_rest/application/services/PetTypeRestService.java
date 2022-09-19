package com.spring_petclinic.spring_petclinic_rest.application.services;

import com.spring_petclinic.spring_petclinic_rest.application.models.PetTypeDTO;
import java.util.List;


public interface PetTypeRestService {
    List<PetTypeDTO> getAllPetTypes();

    PetTypeDTO getPetType(int petTypeId);

    int addPetType(PetTypeDTO dto);

    void updatePetType(int petTypeId, PetTypeDTO dto);

    void deletePetType(int petTypeId);

}