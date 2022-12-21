package com.spring_petclinic.spring_petclinic_rest.application.mappings;

import org.modelmapper.PropertyMap;
import com.spring_petclinic.spring_petclinic_rest.domain.models.Visit;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetVisitDTO;

public class VisitToPetVisitDTOMapping extends PropertyMap<Visit, PetVisitDTO> {
    protected void configure() {
        map().setId((int)source.getId());
    }
}