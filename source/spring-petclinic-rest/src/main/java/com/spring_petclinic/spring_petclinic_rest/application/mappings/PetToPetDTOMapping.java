package com.spring_petclinic.spring_petclinic_rest.application.mappings;

import org.modelmapper.PropertyMap;
import com.spring_petclinic.spring_petclinic_rest.domain.models.Pet;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetVisitDTO;

public class PetToPetDTOMapping extends PropertyMap<Pet, PetDTO> {
    protected void configure() {
        map().setPetTypeId(source.getPetType().getId());
        map().setPetTypeName(source.getPetType().getName());
        map().setOwnerId(source.getOwner().getId());
        map().setOwnerFirstName(source.getOwner().getFirstName());
        map().setOwnerLastName(source.getOwner().getLastName());
    }
}