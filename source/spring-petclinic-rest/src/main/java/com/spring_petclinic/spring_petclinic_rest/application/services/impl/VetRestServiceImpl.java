package com.spring_petclinic.spring_petclinic_rest.application.services.impl;

import lombok.AllArgsConstructor;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.spring_petclinic.spring_petclinic_rest.application.models.VetDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.VetCreateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.VetUpdateDTO;
import com.spring_petclinic.spring_petclinic_rest.intent.IntentMerge;
import com.spring_petclinic.spring_petclinic_rest.application.services.VetRestService;
import com.spring_petclinic.spring_petclinic_rest.data.SpecialtyRepository;
import com.spring_petclinic.spring_petclinic_rest.data.VetRepository;
import com.spring_petclinic.spring_petclinic_rest.domain.models.Vet;
import com.spring_petclinic.spring_petclinic_rest.intent.IntentIgnoreBody;
import java.util.List;

@Service
@AllArgsConstructor
@IntentMerge
public class VetRestServiceImpl implements VetRestService {
    private VetRepository vetRepository;
    private SpecialtyRepository specialtyRepository;
    private ModelMapper mapper;

    @Override
    @Transactional(readOnly = true)
    @IntentIgnoreBody
    public List<VetDTO> getAllVets() {
        var vets = this.vetRepository.findAll();
        return VetDTO.mapFromVets(vets, mapper);
    }

    @Override
    @Transactional(readOnly = true)
    @IntentIgnoreBody
    public VetDTO getVet(int vetId) {
        var vet = this.vetRepository.findById(vetId);
        return vet.isPresent() ? VetDTO.mapFromVet(vet.get(), mapper) : null;
    }

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public void addVet(VetCreateDTO dto) {
        var specialties = this.specialtyRepository.findAllById(dto.getSpecialties());
        var vet = new Vet();
        vet.setFirstName(dto.getFirstName());
        vet.setLastName(dto.getLastName());
        vet.setSpecialties(specialties);
        this.vetRepository.save(vet);
    }

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public void updateVet(int vetId, VetUpdateDTO dto) {
        var specialties = this.specialtyRepository.findAllById(dto.getSpecialties());
        var vet = this.vetRepository.findById(vetId).get();
        vet.setFirstName(dto.getFirstName());
        vet.setLastName(dto.getLastName());
        vet.setSpecialties(specialties);
        this.vetRepository.save(vet);
    }

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public void deleteVet(int vetId) {
        var vet = this.vetRepository.findById(vetId).get();
        this.vetRepository.delete(vet);
    }
}