package com.spring_petclinic.spring_petclinic_rest.data;

import org.springframework.data.jpa.repository.JpaRepository;
import com.spring_petclinic.spring_petclinic_rest.domain.models.Specialty;
import com.spring_petclinic.spring_petclinic_rest.intent.IntentMerge;

/**
 * Spring Data JPA repository for the Specialty entity.
 */
@IntentMerge
public interface SpecialtyRepository extends JpaRepository<Specialty, Integer> {
}