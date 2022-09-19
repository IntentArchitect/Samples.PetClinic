package com.spring_petclinic.spring_petclinic_rest.data;

import org.springframework.data.jpa.repository.JpaRepository;
import com.spring_petclinic.spring_petclinic_rest.domain.models.PetType;
import com.spring_petclinic.spring_petclinic_rest.intent.IntentMerge;
import java.util.UUID;

/**
 * Spring Data JPA repository for the PetType entity.
 */
@IntentMerge
public interface PetTypeRepository extends JpaRepository<PetType, Integer> {
}