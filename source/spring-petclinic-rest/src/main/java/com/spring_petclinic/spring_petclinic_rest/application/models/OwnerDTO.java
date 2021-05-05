package com.spring_petclinic.spring_petclinic_rest.application.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.spring_petclinic.spring_petclinic_rest.domain.models.Owner;
import org.modelmapper.ModelMapper;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class OwnerDTO {
    private int id;
    private String firstName;
    private String lastName;
    private String address;
    private String city;
    private String telephone;
    private List<PetDTO> Pets;

    public static OwnerDTO mapFromOwner(Owner owner, ModelMapper mapper) {
        return mapper.map(owner, OwnerDTO.class);
    }

    public static List<OwnerDTO> mapFromOwners(Collection<Owner> owners, ModelMapper mapper) {
        return owners
            .stream()
            .map(owner -> OwnerDTO.mapFromOwner(owner, mapper))
            .collect(Collectors.toList());
    }
}