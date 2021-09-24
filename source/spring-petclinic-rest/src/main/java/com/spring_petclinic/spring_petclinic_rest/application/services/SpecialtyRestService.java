package com.spring_petclinic.spring_petclinic_rest.application.services;

import com.spring_petclinic.spring_petclinic_rest.application.models.SpecialtyDTO;
import java.util.List;


public interface SpecialtyRestService {
    List<SpecialtyDTO> getAllSpecialties();

    SpecialtyDTO getSpecialty(Integer specialtyId);

    Integer addSpecialty(SpecialtyDTO dto);

    void updateSpecialty(Integer specialtyId, SpecialtyDTO dto);

    void deleteSpecialty(Integer specialtyId);

}