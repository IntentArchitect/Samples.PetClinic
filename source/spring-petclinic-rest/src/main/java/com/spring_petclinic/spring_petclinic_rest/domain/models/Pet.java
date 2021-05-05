package com.spring_petclinic.spring_petclinic_rest.domain.models;

import com.spring_petclinic.spring_petclinic_rest.intent.IntentManageClass;
import com.spring_petclinic.spring_petclinic_rest.intent.Mode;
import java.util.List;
import javax.persistence.*;



@Entity
@Table(name = "pet")
@IntentManageClass(privateMethods = Mode.Ignore)
public class Pet extends AbstractEntity {
    private static final long serialVersionUID = 1L;

    @Column(name = "name", length = 30, nullable = false)
    private String name;

    @Column(name = "birth_date", nullable = false)
    private java.time.LocalDate birthDate;

    @ManyToOne(optional = false)
    @JoinColumn(name="pet_type_id", nullable = false)
    private PetType petType;

    @OneToMany(mappedBy="pet", orphanRemoval = true)
    private List<Visit> visits;

    @ManyToOne(optional = false)
    @JoinColumn(name="owner_id", nullable = false)
    private Owner owner;

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public java.time.LocalDate getBirthDate() {
        return this.birthDate;
    }

    public void setBirthDate(java.time.LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public PetType getPetType() {
        return this.petType;
    }

    public void setPetType(PetType petType) {
        this.petType = petType;
    }

    public List<Visit> getVisits() {
        return this.visits;
    }

    public void setVisits(List<Visit> visits) {
        this.visits = visits;
    }

    public Owner getOwner() {
        return this.owner;
    }

    public void setOwner(Owner owner) {
        this.owner = owner;
    }
}