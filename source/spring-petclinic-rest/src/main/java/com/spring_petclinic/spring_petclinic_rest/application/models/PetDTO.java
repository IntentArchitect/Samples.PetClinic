package com.spring_petclinic.spring_petclinic_rest.application.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.spring_petclinic.spring_petclinic_rest.domain.models.Pet;
import java.util.List;
import org.modelmapper.ModelMapper;
import java.util.Collection;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PetDTO {
    private int id;
    private String name;
    private java.time.LocalDate birthDate;
    private String petType;
    private List<PetVisitDTO> Visits;

    public static PetDTO mapFromPet(Pet pet, ModelMapper mapper) {
        return mapper.map(pet, PetDTO.class);
    }

    public static List<PetDTO> mapFromPets(Collection<Pet> pets, ModelMapper mapper) {
        return pets
            .stream()
            .map(pet -> PetDTO.mapFromPet(pet, mapper))
            .collect(Collectors.toList());
    }
}