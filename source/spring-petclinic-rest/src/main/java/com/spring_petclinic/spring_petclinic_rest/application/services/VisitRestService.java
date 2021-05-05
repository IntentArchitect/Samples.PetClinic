package com.spring_petclinic.spring_petclinic_rest.application.services;

import com.spring_petclinic.spring_petclinic_rest.application.models.PetVisitDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.VisitCreateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.VisitUpdateDTO;


public interface VisitRestService {
    PetVisitDTO getVisit(int visitId);

    void addVisit(VisitCreateDTO dto);

    void updateVisit(int visitId, VisitUpdateDTO dto);

    void deleteVisit(int visitId);

}