package com.spring_petclinic.spring_petclinic_rest.application.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.spring_petclinic.spring_petclinic_rest.domain.models.Visit;
import org.modelmapper.ModelMapper;
import java.util.List;
import java.util.Collection;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class VisitDTO {
    private int id;
    private java.time.LocalDate visitDate;
    private String description;
    private PetDTO pet;
    private int ownerId;

    public static VisitDTO mapFromVisit(Visit visit, ModelMapper mapper) {
        return mapper.map(visit, VisitDTO.class);
    }

    public static List<VisitDTO> mapFromVisits(Collection<Visit> visits, ModelMapper mapper) {
        return visits
            .stream()
            .map(visit -> VisitDTO.mapFromVisit(visit, mapper))
            .collect(Collectors.toList());
    }
}