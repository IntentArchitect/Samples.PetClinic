package com.spring_petclinic.spring_petclinic_rest.data;

import org.springframework.data.jpa.repository.JpaRepository;
import com.spring_petclinic.spring_petclinic_rest.domain.models.Visit;
import com.spring_petclinic.spring_petclinic_rest.intent.IntentMerge;

/**
 * Spring Data JPA repository for the Visit entity.
 */
@IntentMerge
public interface VisitRepository extends JpaRepository<Visit, Integer> {
}