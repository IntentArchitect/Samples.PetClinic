package com.spring_petclinic.spring_petclinic_rest.data;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import com.spring_petclinic.spring_petclinic_rest.domain.models.Owner;
import com.spring_petclinic.spring_petclinic_rest.intent.IntentMerge;
import java.util.UUID;

/**
 * Spring Data JPA repository for the Owner entity.
 */
@IntentMerge
public interface OwnerRepository extends JpaRepository<Owner, Integer>{
    Collection<Owner> findByLastName(String lastName);
}