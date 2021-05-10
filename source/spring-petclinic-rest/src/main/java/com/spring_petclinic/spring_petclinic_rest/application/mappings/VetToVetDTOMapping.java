package com.spring_petclinic.spring_petclinic_rest.application.mappings;

import org.modelmapper.PropertyMap;
import com.spring_petclinic.spring_petclinic_rest.domain.models.Vet;
import com.spring_petclinic.spring_petclinic_rest.application.models.VetDTO;

public class VetToVetDTOMapping extends PropertyMap<Vet, VetDTO> {
    protected void configure() {
    }
}