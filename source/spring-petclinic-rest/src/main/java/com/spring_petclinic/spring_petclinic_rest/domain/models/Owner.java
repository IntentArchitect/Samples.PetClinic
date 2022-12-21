package com.spring_petclinic.spring_petclinic_rest.domain.models;
import com.spring_petclinic.spring_petclinic_rest.intent.IntentManageClass;
import com.spring_petclinic.spring_petclinic_rest.intent.Mode;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;
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
@Table(name = "owners")
@Data
@AllArgsConstructor
@NoArgsConstructor
@IntentManageClass(privateMethods = Mode.Ignore)
public class Owner implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "first_name", length = 30, nullable = false)
    private String firstName;

    @Column(name = "last_name", length = 30, nullable = false)
    private String lastName;

    @Column(name = "address", length = 255, nullable = false)
    private String address;

    @Column(name = "city", length = 80, nullable = false)
    private String city;

    @Column(name = "telephone", length = 20, nullable = false)
    private String telephone;

    @OneToMany(mappedBy="owner", fetch = FetchType.LAZY)
    private List<Pet> pets;

    public boolean isNew() {
        return this.id == null;
    }
}