package com.spring_petclinic.spring_petclinic_rest.domain.models;
import com.spring_petclinic.spring_petclinic_rest.intent.IntentManageClass;
import com.spring_petclinic.spring_petclinic_rest.intent.Mode;
import java.time.LocalDate;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;
import javax.persistence.CascadeType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.FetchType;



@Entity
@Table(name = "visits")
@Data
@AllArgsConstructor
@NoArgsConstructor
@IntentManageClass(privateMethods = Mode.Ignore)
public class Visit extends AbstractEntity {
    private static final long serialVersionUID = 1L;

    @Column(name = "visit_date", nullable = false)
    private LocalDate visitDate;

    @Column(name = "description", nullable = false)
    private String description;

    @ManyToOne(optional = false, cascade = { CascadeType.ALL }, fetch = FetchType.LAZY)
    @JoinColumn(name="pet_id", nullable = false)
    private Pet pet;
}