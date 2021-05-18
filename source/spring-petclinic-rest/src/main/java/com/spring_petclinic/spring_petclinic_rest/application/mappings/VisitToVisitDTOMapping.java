package com.spring_petclinic.spring_petclinic_rest.application.mappings;

import org.modelmapper.PropertyMap;
import com.spring_petclinic.spring_petclinic_rest.domain.models.Visit;
import com.spring_petclinic.spring_petclinic_rest.application.models.VisitDTO;

public class VisitToVisitDTOMapping extends PropertyMap<Visit, VisitDTO> {
    protected void configure() {
        map().setPetId(source.getPet().getId());
        map().setOwnerId(source.getPet().getOwner().getId());
    }
}