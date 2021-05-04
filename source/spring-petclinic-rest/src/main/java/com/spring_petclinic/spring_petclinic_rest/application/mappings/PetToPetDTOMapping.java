package com.spring_petclinic.spring_petclinic_rest.application.mappings;

import org.modelmapper.PropertyMap;
import com.spring_petclinic.spring_petclinic_rest.domain.models.Pet;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetDTO;

public class PetToPetDTOMapping extends PropertyMap<Pet, PetDTO> {
    protected void configure() {
        map().setPetType(source.getPetType().getName());
    }
}