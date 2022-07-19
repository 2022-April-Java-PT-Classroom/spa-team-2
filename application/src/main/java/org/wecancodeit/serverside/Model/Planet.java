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
    private  String image;

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

    public String getImage() {
        return image;
    }

    public Planet() {

    }

    public Planet(String name, String description, String shape,String image) {
        this.name = name;
        this.description = description;
        this.shape = shape;
        this.image = image;
    }

}