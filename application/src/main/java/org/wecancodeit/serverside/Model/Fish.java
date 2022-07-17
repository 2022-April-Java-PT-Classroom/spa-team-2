package org.wecancodeit.serverside.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Fish {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String location;
    private String biology;
    private String physicalDescription;


    public Fish(){

    }

    public Long   getId() {return id;}
    public String getName() {return name;}
    public String getLocation() {return location;}
    public String getBiology() {return biology;}
    public String getPhysicalDescription() {return physicalDescription;}




    public Fish(String name, String location, String biology, String physicalDescription) {
        this.name = name;
        this.location = location;
        this.biology = biology;
        this.physicalDescription = physicalDescription;
    }
}
