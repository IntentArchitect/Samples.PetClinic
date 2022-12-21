package com.spring_petclinic.spring_petclinic_rest.application.mappings;

import org.modelmapper.PropertyMap;
import com.spring_petclinic.spring_petclinic_rest.domain.models.Specialty;
import com.spring_petclinic.spring_petclinic_rest.application.models.SpecialtyDTO;

public class SpecialtyToSpecialtyDTOMapping extends PropertyMap<Specialty, SpecialtyDTO> {
    protected void configure() {
    }
}