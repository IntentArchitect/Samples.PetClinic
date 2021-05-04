package com.spring_petclinic.spring_petclinic_rest.domain.models;

import com.spring_petclinic.spring_petclinic_rest.intent.IntentManageClass;
import com.spring_petclinic.spring_petclinic_rest.intent.Mode;
import javax.persistence.*;



@Entity
@Table(name = "specialty")
@IntentManageClass(privateMethods = Mode.Ignore)
public class Specialty extends AbstractEntity {
    private static final long serialVersionUID = 1L;

    @Column(name = "name", length = 80, nullable = false)
    private String name;

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
