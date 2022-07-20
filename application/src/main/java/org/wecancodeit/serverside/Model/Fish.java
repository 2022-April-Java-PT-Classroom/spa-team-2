package org.wecancodeit.serverside.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Fish {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @Lob
    private String location;
    @Lob
    private String biology;
    @Lob
    private String physicalDescription;
    private String image;


    public Fish(){

    }

    public Long   getId() {return id;}
    public String getName() {return name;}
    public String getLocation() {return location;}
    public String getBiology() {return biology;}
    public String getPhysicalDescription() {return physicalDescription;}
    public String getImage(){
        return image;
    }




    public Fish(String name, String location, String biology, String physicalDescription, String image) {
        this.name = name;
        this.location = location;
        this.biology = biology;
        this.physicalDescription = physicalDescription;
        this.image = image;
    }
}
