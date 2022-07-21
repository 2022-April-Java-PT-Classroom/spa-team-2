package org.wecancodeit.serverside.Model;

import javax.persistence.*;

@Entity
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long reviewId;
    private String name;
    @Lob
    private String text;

    public Long getReviewId() {
        return reviewId;
    }

    public String getName() {
        return name;
    }



    public String getText() {
        return text;
    }


    public Review(){}

    public Review(String name, String text) {
        this.name = name;
        this.text = text;

    }

}