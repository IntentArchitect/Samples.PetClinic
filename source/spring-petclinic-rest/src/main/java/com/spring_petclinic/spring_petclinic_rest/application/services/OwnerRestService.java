package com.spring_petclinic.spring_petclinic_rest.application.services;

import com.spring_petclinic.spring_petclinic_rest.application.models.OwnerDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.OwnerCreateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.OwnerUpdateDTO;
import java.util.List;


public interface OwnerRestService {
    List<OwnerDTO> getOwners();

    void addOwner(OwnerCreateDTO dto);

    OwnerDTO getOwner(Integer ownerId);

    void updateOwner(Integer ownerId, OwnerUpdateDTO dto);

    void deleteOwner(Integer ownerId);

    List<OwnerDTO> getOwnersList(String lastName);

}