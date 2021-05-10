package com.spring_petclinic.spring_petclinic_rest.application.services;

import com.spring_petclinic.spring_petclinic_rest.application.models.SpecialtyDTO;
import java.util.List;


public interface SpecialtyRestService {
    List<SpecialtyDTO> getAllSpecialties();

    SpecialtyDTO getSpecialty(int specialtyId);

    int addSpecialty(SpecialtyDTO dto);

    void updateSpecialty(int specialtyId, SpecialtyDTO dto);

    void deleteSpecialty(int specialtyId);

}