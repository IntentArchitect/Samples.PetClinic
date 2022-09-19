package com.spring_petclinic.spring_petclinic_rest.application.services.impl;

import lombok.AllArgsConstructor;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetCreateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetUpdateDTO;
import com.spring_petclinic.spring_petclinic_rest.intent.IntentMerge;
import com.spring_petclinic.spring_petclinic_rest.application.services.PetRestService;
import com.spring_petclinic.spring_petclinic_rest.data.OwnerRepository;
import com.spring_petclinic.spring_petclinic_rest.data.PetRepository;
import com.spring_petclinic.spring_petclinic_rest.data.PetTypeRepository;
import com.spring_petclinic.spring_petclinic_rest.domain.models.Pet;
import com.spring_petclinic.spring_petclinic_rest.intent.IntentIgnoreBody;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetDTO;

@Service
@AllArgsConstructor
@IntentMerge
public class PetRestServiceImpl implements PetRestService {
    private PetRepository petRepository;
    private PetTypeRepository petTypeRepository;
    private OwnerRepository ownerRepository;

    private ModelMapper mapper;

    @Override
    @Transactional(readOnly = true)
    @IntentIgnoreBody
    public PetDTO getPet(int petId) {
        var pet = this.petRepository.findById(petId);
        return pet.isPresent() ? PetDTO.mapFromPet(pet.get(), mapper) : null;
    }

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public void addPet(PetCreateDTO dto) {
        var petType = this.petTypeRepository.findById(dto.getPetTypeId()).get();
        var owner = this.ownerRepository.findById(dto.getOwnerId()).get();
        var pet = new Pet();
        pet.setName(dto.getName());
        pet.setBirthDate(dto.getBirthDate());
        pet.setPetType(petType);
        pet.setOwner(owner);
        this.petRepository.save(pet);
        //ownerRepository.save(owner);
    }

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public void updatePet(int petId, PetUpdateDTO dto) {
        var petType = this.petTypeRepository.findById(dto.getPetTypeId()).get();
        var pet = this.petRepository.findById(petId).get();
        pet.setName(dto.getName());
        pet.setBirthDate(dto.getBirthDate());
        pet.setPetType(petType);
        this.petRepository.save(pet);
    }

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public void deletePet(int petId) {
        var pet = this.petRepository.findById(petId).get();
        this.petRepository.delete(pet);
    }
}