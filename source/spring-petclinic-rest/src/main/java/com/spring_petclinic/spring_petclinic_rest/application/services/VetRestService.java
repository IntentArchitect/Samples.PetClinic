package com.spring_petclinic.spring_petclinic_rest.application.services;

import com.spring_petclinic.spring_petclinic_rest.application.models.VetDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.VetCreateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.VetUpdateDTO;
import java.util.List;


public interface VetRestService {
    List<VetDTO> getAllVets();

    VetDTO getVet(Integer vetId);

    void addVet(VetCreateDTO dto);

    void updateVet(Integer vetId, VetUpdateDTO dto);

    void deleteVet(Integer vetId);

}