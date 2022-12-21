package com.spring_petclinic.spring_petclinic_rest.application.mappings;

import org.modelmapper.PropertyMap;
import com.spring_petclinic.spring_petclinic_rest.domain.models.PetType;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetTypeDTO;

public class PetTypeToPetTypeDTOMapping extends PropertyMap<PetType, PetTypeDTO> {
    protected void configure() {
    }
}