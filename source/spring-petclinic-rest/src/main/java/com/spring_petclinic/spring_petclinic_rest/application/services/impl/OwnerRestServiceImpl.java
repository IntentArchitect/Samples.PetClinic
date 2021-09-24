package com.spring_petclinic.spring_petclinic_rest.application.services.impl;

import lombok.AllArgsConstructor;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.spring_petclinic.spring_petclinic_rest.intent.IntentMerge;
import com.spring_petclinic.spring_petclinic_rest.application.services.OwnerRestService;
import com.spring_petclinic.spring_petclinic_rest.data.OwnerRepository;
import com.spring_petclinic.spring_petclinic_rest.domain.models.Owner;
import com.spring_petclinic.spring_petclinic_rest.intent.IntentIgnoreBody;
import com.spring_petclinic.spring_petclinic_rest.application.models.OwnerDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.OwnerCreateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.OwnerUpdateDTO;
import java.util.List;

@Service
@AllArgsConstructor
@IntentMerge
public class OwnerRestServiceImpl implements OwnerRestService {

    private OwnerRepository ownerRepository;
    private ModelMapper mapper;

    @Override
    @Transactional(readOnly = true)
    @IntentIgnoreBody
    public List<OwnerDTO> getOwners() {
        var owners = ownerRepository.findAll();
        return OwnerDTO.mapFromOwners(owners, mapper);
    }

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public void addOwner(OwnerCreateDTO dto) {
        var owner = new Owner();
        owner.setFirstName(dto.getFirstName());
        owner.setLastName(dto.getLastName());
        owner.setAddress(dto.getAddress());
        owner.setCity(dto.getCity());
        owner.setTelephone(dto.getTelephone());
		ownerRepository.save(owner);
    }

    @Override
    @Transactional(readOnly = true)
    @IntentIgnoreBody
    public OwnerDTO getOwner(Integer ownerId) {
        var owner = ownerRepository.findById(ownerId);
        return owner.isPresent() ? OwnerDTO.mapFromOwner(owner.get(), mapper) : null;
    }

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public void updateOwner(Integer ownerId, OwnerUpdateDTO dto) {
        var owner = ownerRepository.findById(ownerId);
        if (owner.isEmpty()) {
            throw new RuntimeException("Owner could not be found for id: " + ((Integer)ownerId).toString());
        }
        owner.get().setFirstName(dto.getFirstName());
        owner.get().setLastName(dto.getLastName());
        owner.get().setAddress(dto.getAddress());
        owner.get().setCity(dto.getCity());
        owner.get().setTelephone(dto.getTelephone());
        ownerRepository.save(owner.get());
    }

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public void deleteOwner(Integer ownerId) {
        var owner = ownerRepository.findById(ownerId);
        if (owner.isEmpty()) {
            throw new RuntimeException("Owner could not be found for id: " + ((Integer)ownerId).toString());
        }
        ownerRepository.delete(owner.get());
    }

    @Override
    @Transactional(readOnly = true)
    @IntentIgnoreBody
    public List<OwnerDTO> getOwnersList(String lastName) {
        var owners = ownerRepository.findByLastName(lastName);
        return OwnerDTO.mapFromOwners(owners, mapper);
    }
}