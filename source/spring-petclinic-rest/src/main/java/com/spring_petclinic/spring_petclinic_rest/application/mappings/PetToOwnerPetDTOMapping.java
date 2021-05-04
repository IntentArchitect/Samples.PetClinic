package com.spring_petclinic.spring_petclinic_rest.application.mappings;

import org.modelmapper.PropertyMap;
import com.spring_petclinic.spring_petclinic_rest.domain.models.Pet;
import com.spring_petclinic.spring_petclinic_rest.application.models.OwnerPetDTO;

public class PetToOwnerPetDTOMapping extends PropertyMap<Pet, OwnerPetDTO> {
    protected void configure() {
    }
}