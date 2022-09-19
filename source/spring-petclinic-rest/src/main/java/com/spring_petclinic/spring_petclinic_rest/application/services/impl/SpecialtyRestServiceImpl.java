package com.spring_petclinic.spring_petclinic_rest.application.services.impl;

import lombok.AllArgsConstructor;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.spring_petclinic.spring_petclinic_rest.application.models.SpecialtyDTO;
import com.spring_petclinic.spring_petclinic_rest.intent.IntentMerge;
import com.spring_petclinic.spring_petclinic_rest.application.services.SpecialtyRestService;
import com.spring_petclinic.spring_petclinic_rest.data.SpecialtyRepository;
import com.spring_petclinic.spring_petclinic_rest.domain.models.Specialty;
import com.spring_petclinic.spring_petclinic_rest.intent.IntentIgnoreBody;
import java.util.List;

@Service
@AllArgsConstructor
@IntentMerge
public class SpecialtyRestServiceImpl implements SpecialtyRestService {

    private SpecialtyRepository specialtyRepository;
    private ModelMapper mapper;

    @Override
    @Transactional(readOnly = true)
    @IntentIgnoreBody
    public List<SpecialtyDTO> getAllSpecialties() {
        var specialties = this.specialtyRepository.findAll();
        return SpecialtyDTO.mapFromSpecialties(specialties, mapper);
    }

    @Override
    @Transactional(readOnly = true)
    @IntentIgnoreBody
    public SpecialtyDTO getSpecialty(int specialtyId) {
        var specialty = this.specialtyRepository.findById(specialtyId);
        return specialty.isPresent() ? SpecialtyDTO.mapFromSpecialty(specialty.get(), mapper) : null;
    }

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public int addSpecialty(SpecialtyDTO dto) {
        var specialty = new Specialty();
        specialty.setName(dto.getName());
        return this.specialtyRepository.save(specialty).getId();
    }

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public void updateSpecialty(int specialtyId, SpecialtyDTO dto) {
        var specialty = this.specialtyRepository.findById(specialtyId).get();
        specialty.setName(dto.getName());
        this.specialtyRepository.save(specialty);
    }

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public void deleteSpecialty(int specialtyId) {
        var specialty = this.specialtyRepository.findById(specialtyId).get();
        this.specialtyRepository.delete(specialty);
    }
}