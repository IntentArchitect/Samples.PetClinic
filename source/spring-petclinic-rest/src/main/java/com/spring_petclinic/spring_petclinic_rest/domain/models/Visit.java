package com.spring_petclinic.spring_petclinic_rest.domain.models;

import com.spring_petclinic.spring_petclinic_rest.intent.IntentManageClass;
import com.spring_petclinic.spring_petclinic_rest.intent.Mode;
import java.time.LocalDate;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;



@Entity
@Table(name = "visits")
@IntentManageClass(privateMethods = Mode.Ignore)
public class Visit extends AbstractEntity {
    private static final long serialVersionUID = 1L;

    @Column(name = "visit_date", nullable = false)
    private LocalDate visitDate;

    @Column(name = "description", nullable = false)
    private String description;

    @ManyToOne(optional = false)
    @JoinColumn(name="pet_id", nullable = false)
    private Pet pet;

    public LocalDate getVisitDate() {
        return this.visitDate;
    }

    public void setVisitDate(LocalDate visitDate) {
        this.visitDate = visitDate;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Pet getPet() {
        return this.pet;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }
}