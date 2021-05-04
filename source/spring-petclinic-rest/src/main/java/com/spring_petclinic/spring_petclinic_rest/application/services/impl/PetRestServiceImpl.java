package com.spring_petclinic.spring_petclinic_rest.application.services.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetCreateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetUpdateDTO;
import com.spring_petclinic.spring_petclinic_rest.intent.IntentMerge;
import com.spring_petclinic.spring_petclinic_rest.application.services.PetRestService;
import com.spring_petclinic.spring_petclinic_rest.intent.IntentIgnoreBody;

@Service
@AllArgsConstructor
@IntentMerge
public class PetRestServiceImpl implements PetRestService {

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public void getPet(int petId) {
        throw new UnsupportedOperationException("Your implementation here...");
    }

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public void addPet(PetCreateDTO dto) {
        throw new UnsupportedOperationException("Your implementation here...");
    }

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public void updatePet(int petId, PetUpdateDTO dto) {
        throw new UnsupportedOperationException("Your implementation here...");
    }

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public void deletePet(int petId) {
        throw new UnsupportedOperationException("Your implementation here...");
    }
}