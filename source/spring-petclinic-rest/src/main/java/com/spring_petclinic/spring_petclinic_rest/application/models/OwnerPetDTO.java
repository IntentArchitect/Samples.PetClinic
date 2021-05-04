package com.spring_petclinic.spring_petclinic_rest.application.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.spring_petclinic.spring_petclinic_rest.domain.models.Pet;
import org.modelmapper.ModelMapper;
import java.util.List;
import java.util.stream.Collectors;
import java.util.Collection;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class OwnerPetDTO {
    private String name;

    public static OwnerPetDTO mapFromPet(Pet pet, ModelMapper mapper) {
        return mapper.map(pet, OwnerPetDTO.class);
    }

    public static List<OwnerPetDTO> mapFromPets(Collection<Pet> pets, ModelMapper mapper) {
        return pets
            .stream()
            .map(pet -> OwnerPetDTO.mapFromPet(pet, mapper))
            .collect(Collectors.toList());
    }
}