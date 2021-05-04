package com.spring_petclinic.spring_petclinic_rest.configuration;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.spring_petclinic.spring_petclinic_rest.application.mappings.OwnerToOwnerDTOMapping;
import com.spring_petclinic.spring_petclinic_rest.application.mappings.PetToOwnerPetDTOMapping;
import com.spring_petclinic.spring_petclinic_rest.application.mappings.PetTypeToPetTypeDTOMapping;
import com.spring_petclinic.spring_petclinic_rest.application.mappings.PetToPetDTOMapping;
import com.spring_petclinic.spring_petclinic_rest.application.mappings.VisitToPetVisitDTOMapping;

@Configuration
public class ModelMapperBean {
    @Bean
    public ModelMapper modelMapper() {
        var modelMapper = new ModelMapper();

        InitializeMappings(modelMapper);

        return modelMapper;
    }

    private void InitializeMappings(ModelMapper modelMapper) {
        modelMapper.addMappings(new OwnerToOwnerDTOMapping());
        modelMapper.addMappings(new PetToOwnerPetDTOMapping());
        modelMapper.addMappings(new PetToPetDTOMapping());
        modelMapper.addMappings(new PetTypeToPetTypeDTOMapping());
        modelMapper.addMappings(new VisitToPetVisitDTOMapping());
    }
}