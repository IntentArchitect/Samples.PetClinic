package com.spring_petclinic.spring_petclinic_rest.application.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.spring_petclinic.spring_petclinic_rest.domain.models.Vet;
import java.util.List;
import org.modelmapper.ModelMapper;
import java.util.Collection;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class VetDTO {
    private int id;
    private String firstName;
    private String lastName;
    private List<SpecialtyDTO> specialties;

    public static VetDTO mapFromVet(Vet vet, ModelMapper mapper) {
        return mapper.map(vet, VetDTO.class);
    }

    public static List<VetDTO> mapFromVets(Collection<Vet> vets, ModelMapper mapper) {
        return vets
            .stream()
            .map(vet -> VetDTO.mapFromVet(vet, mapper))
            .collect(Collectors.toList());
    }
}