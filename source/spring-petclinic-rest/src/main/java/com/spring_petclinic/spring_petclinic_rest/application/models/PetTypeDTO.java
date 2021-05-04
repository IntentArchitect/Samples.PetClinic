package com.spring_petclinic.spring_petclinic_rest.application.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.spring_petclinic.spring_petclinic_rest.domain.models.PetType;
import org.modelmapper.ModelMapper;
import java.util.List;
import java.util.Collection;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PetTypeDTO {
    private int id;
    private String name;

    public static PetTypeDTO mapFromPetType(PetType petType, ModelMapper mapper) {
        return mapper.map(petType, PetTypeDTO.class);
    }

    public static List<PetTypeDTO> mapFromPetTypes(Collection<PetType> petTypes, ModelMapper mapper) {
        return petTypes
            .stream()
            .map(petType -> PetTypeDTO.mapFromPetType(petType, mapper))
            .collect(Collectors.toList());
    }
}