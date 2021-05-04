package com.spring_petclinic.spring_petclinic_rest.application.mappings;

import org.modelmapper.PropertyMap;
import com.spring_petclinic.spring_petclinic_rest.domain.models.Owner;
import com.spring_petclinic.spring_petclinic_rest.application.models.OwnerDTO;

public class OwnerToOwnerDTOMapping extends PropertyMap<Owner, OwnerDTO> {
    protected void configure() {
    }
}