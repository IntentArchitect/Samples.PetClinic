package com.spring_petclinic.spring_petclinic_rest.data;

import org.springframework.data.jpa.repository.JpaRepository;
import com.spring_petclinic.spring_petclinic_rest.domain.models.Pet;
import com.spring_petclinic.spring_petclinic_rest.intent.IntentMerge;
import java.util.UUID;

/**
 * Spring Data JPA repository for the Pet entity.
 */
@IntentMerge
public interface PetRepository extends JpaRepository<Pet, Integer> {
}