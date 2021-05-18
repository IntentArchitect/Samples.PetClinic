package com.spring_petclinic.spring_petclinic_rest.application.services.impl;

import lombok.AllArgsConstructor;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.spring_petclinic.spring_petclinic_rest.application.models.PetVisitDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.VisitCreateDTO;
import com.spring_petclinic.spring_petclinic_rest.application.models.VisitUpdateDTO;
import com.spring_petclinic.spring_petclinic_rest.intent.IntentMerge;
import com.spring_petclinic.spring_petclinic_rest.application.services.VisitRestService;
import com.spring_petclinic.spring_petclinic_rest.data.PetRepository;
import com.spring_petclinic.spring_petclinic_rest.data.VisitRepository;
import com.spring_petclinic.spring_petclinic_rest.domain.models.Visit;
import com.spring_petclinic.spring_petclinic_rest.intent.IntentIgnoreBody;
import com.spring_petclinic.spring_petclinic_rest.application.models.VisitDTO;

@Service
@AllArgsConstructor
@IntentMerge
public class VisitRestServiceImpl implements VisitRestService {

    private VisitRepository visitRepository;
    private PetRepository petRepository;
    private ModelMapper mapper;

    @Override
    @Transactional(readOnly = true)
    @IntentIgnoreBody
    public VisitDTO getVisit(int visitId) {
        var visit = this.visitRepository.findById(visitId);
        return visit.isPresent() ? VisitDTO.mapFromVisit(visit.get(), mapper) : null;
    }

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public void addVisit(VisitCreateDTO dto) {
        var pet = this.petRepository.findById(dto.getPetId()).get();
        var visit = new Visit();
        visit.setVisitDate(dto.getVisitDate());
        visit.setDescription(dto.getDescription());
        visit.setPet(pet);
        this.visitRepository.save(visit);
    }

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public void updateVisit(int visitId, VisitUpdateDTO dto) {
        var visit = this.visitRepository.findById(visitId).get();
        visit.setVisitDate(dto.getVisitDate());
        visit.setDescription(dto.getDescription());
        this.visitRepository.save(visit);
    }

    @Override
    @Transactional(readOnly = false)
    @IntentIgnoreBody
    public void deleteVisit(int visitId) {
        var visit = this.visitRepository.findById(visitId).get();
        this.visitRepository.delete(visit);
    }
}