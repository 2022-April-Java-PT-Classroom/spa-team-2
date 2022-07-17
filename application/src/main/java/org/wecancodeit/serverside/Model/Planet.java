package org.wecancodeit.serverside.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Planet {

    @Id
    @GeneratedValue

    private Long id;

    private String name;

    private String description;
    private String shape;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getShape() {
        return shape;
    }

    public Planet() {

    }


    public Planet(String name, String description, String shape) {
        this.name = name;
        this.description = description;
        this.shape = shape;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Planet)) return false;
        Planet planet = (Planet) o;
        return getId().equals(planet.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }
}