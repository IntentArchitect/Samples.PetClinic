package com.spring_petclinic.spring_petclinic_rest.application.models;
import lombok.AllArgsConstructor;

import lombok.Data;
import lombok.NoArgsConstructor;
import com.spring_petclinic.spring_petclinic_rest.domain.models.Specialty;
import org.modelmapper.ModelMapper;
import java.util.List;
import java.util.Collection;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class SpecialtyDTO {
    private Integer id;
    private String name;

    public static SpecialtyDTO mapFromSpecialty(Specialty specialty, ModelMapper mapper) {
        return mapper.map(specialty, SpecialtyDTO.class);
    }

    public static List<SpecialtyDTO> mapFromSpecialties(Collection<Specialty> specialties, ModelMapper mapper) {
        return specialties
            .stream()
            .map(specialty -> SpecialtyDTO.mapFromSpecialty(specialty, mapper))
            .collect(Collectors.toList());
    }
}