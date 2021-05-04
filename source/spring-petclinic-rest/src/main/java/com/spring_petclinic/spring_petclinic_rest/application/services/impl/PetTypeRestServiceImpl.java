package com.spring_petclinic.spring_petclinic_rest.application.services.impl;

import lombok.AllArgsConstructor;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetTypeDTO;
import com.spring_petclinic.spring_petclinic_rest.intent.IntentMerge;
import com.spring_petclinic.spring_petclinic_rest.application.services.PetTypeRestService;
import com.spring_petclinic.spring_petclinic_rest.data.PetTypeRepository;
import com.spring_petclinic.spring_petclinic_rest.domain.models.PetType;
import com.spring_petclinic.spring_petclinic_rest.intent.IntentIgnoreBody;
import java.util.List;

@Service
@AllArgsConstructor
@IntentMerge
public class PetTypeRestServiceImpl implements PetTypeRestService {

    private PetTypeRepository petTypeRepository;
    private ModelMapper mapper;

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public List<PetTypeDTO> getAllPetTypes() {
        var petTypes = petTypeRepository.findAll();
        return PetTypeDTO.mapFromPetTypes(petTypes, mapper);
    }

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public PetTypeDTO getPetType(int petTypeId) {
        var petType = petTypeRepository.findById(petTypeId);
        return petType.isPresent() ? PetTypeDTO.mapFromPetType(petType.get(), mapper) : null;
    }

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public int addPetType(PetTypeDTO dto) {
        var petType = new PetType();
        petType.setName(dto.getName());
        petType = petTypeRepository.save(petType);
        return petType.getId();
    }

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public void updatePetType(int petTypeId, PetTypeDTO dto) {
        var petType = petTypeRepository.findById(petTypeId);
        if (petType.isEmpty()) {
            throw new RuntimeException("Pet Type could not be found for id: " + ((Integer)petTypeId).toString());
        }
        petType.get().setName(dto.getName());
        petTypeRepository.save(petType.get());
    }

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public void deletePetType(int petTypeId) {
        var petType = petTypeRepository.findById(petTypeId);
        if (petType.isEmpty()) {
            throw new RuntimeException("Pet Type could not be found for id: " + ((Integer)petTypeId).toString());
        }
        petTypeRepository.delete(petType.get());
    }
}