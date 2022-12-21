package com.spring_petclinic.spring_petclinic_rest.domain.models;
import com.spring_petclinic.spring_petclinic_rest.intent.IntentManageClass;
import com.spring_petclinic.spring_petclinic_rest.intent.Mode;
import java.util.List;
import java.time.LocalDate;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.CascadeType;
import lombok.AllArgsConstructor;
import lombok.Data;

import lombok.NoArgsConstructor;
import javax.persistence.FetchType;
import java.io.Serializable;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity
@Table(name = "pets")
@Data
@AllArgsConstructor
@NoArgsConstructor
@IntentManageClass(privateMethods = Mode.Ignore)
public class Pet implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name", length = 30, nullable = false)
    private String name;

    @Column(name = "birth_date", nullable = false)
    private LocalDate birthDate;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "pet_type_id", nullable = false)
    private PetType petType;

    @OneToMany(cascade = { CascadeType.ALL }, mappedBy="pet", orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Visit> visits;

    @ManyToOne(optional = true, fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id", nullable = true)
    private Owner owner;

    public boolean isNew() {
        return this.id == null;
    }
}