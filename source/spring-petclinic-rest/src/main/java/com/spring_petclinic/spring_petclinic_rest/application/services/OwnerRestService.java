package com.spring_petclinic.spring_petclinic_rest.application.services;
import com.spring_petclinic.spring_petclinic_rest.application.models.OwnerDTO;

import com.spring_petclinic.spring_petclinic_rest.application.models.OwnerCreateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.OwnerUpdateDTO;
import java.util.List;


public interface OwnerRestService {
    List<OwnerDTO> getOwners();

    void addOwner(OwnerCreateDTO dto);

    OwnerDTO getOwner(int ownerId);

    void updateOwner(int ownerId, OwnerUpdateDTO dto);

    void deleteOwner(int ownerId);

    List<OwnerDTO> getOwnersList(String lastName);

}