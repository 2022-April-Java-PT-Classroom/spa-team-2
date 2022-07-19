package org.wecancodeit.serverside.Model;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Reviews {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long reviewId;
    private String reviewName;
    private String reviewDate;
    private String reviewTitle;
    @Lob
    private String reviewText;
    private int numOfReviews;

    public Long getReviewId() {
        return reviewId;
    }

    public String getReviewName() {
        return reviewName;
    }

    public String getReviewDate() {
        return reviewDate;
    }

    public String getReviewTitle() {
        return reviewTitle;
    }

    public String getReviewText() {
        return reviewText;
    }

    public int getNumOfReviews() {
        return numOfReviews;
    }

    public Reviews(String reviewName, String reviewDate, String reviewTitle, String reviewText, int numOfReviews) {
        this.reviewName = reviewName;
        this.reviewDate = reviewDate;
        this.reviewTitle = reviewTitle;
        this.reviewText = reviewText;
        this.numOfReviews = numOfReviews;
    }

    @Override
    public String toString() {
        return "Reviews{" +
                "reviewId=" + reviewId +
                ", reviewName='" + reviewName + '\'' +
                ", reviewDate='" + reviewDate + '\'' +
                ", reviewTitle='" + reviewTitle + '\'' +
                ", reviewText='" + reviewText + '\'' +
                ", numOfReviews=" + numOfReviews +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Reviews reviews = (Reviews) o;
        return numOfReviews == reviews.numOfReviews && Objects.equals(reviewId, reviews.reviewId) && Objects.equals(reviewName, reviews.reviewName) && Objects.equals(reviewDate, reviews.reviewDate) && Objects.equals(reviewTitle, reviews.reviewTitle) && Objects.equals(reviewText, reviews.reviewText);
    }

    @Override
    public int hashCode() {
        return Objects.hash(reviewId, reviewName, reviewDate, reviewTitle, reviewText, numOfReviews);
    }
}