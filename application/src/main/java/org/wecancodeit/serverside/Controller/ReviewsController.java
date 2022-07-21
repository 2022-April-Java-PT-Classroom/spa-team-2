package org.wecancodeit.serverside.Controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.Model.Review;
import org.wecancodeit.serverside.Repository.ReviewsRepository;

import javax.annotation.Resource;
import java.util.Collection;


@RestController
public class ReviewsController {

    @Resource
    private ReviewsRepository reviewsRepo;

    @GetMapping("/api/reviews")
    public Collection<Review> getReviews() { return (Collection<Review>) reviewsRepo.findAll();}


    @PostMapping("/api/reviews")
    public Collection<Review> addReview(@RequestBody Review review) throws JSONException {
//        JSONObject newReview = new JSONObject(review);
//        String name = newReview.getString("name");
//        String text = newReview.getString("text");
//        Review reviewsToAdd = new Review(name, text);
        reviewsRepo.save(review);

        return (Collection<Review>) reviewsRepo.findAll();
    }
}