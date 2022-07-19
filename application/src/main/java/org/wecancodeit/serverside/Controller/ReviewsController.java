//package org.wecancodeit.serverside.Controller;
//
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.wecancodeit.serverside.Repository.ReviewsRepository;
//
//import javax.annotation.Resource;
//
//@Controller
//public class ReviewsController {
//
//    @Resource
//    private ReviewsRepository reviewsRepo;
//
//    @RequestMapping("/api/reviews")
//    public String displayAllReviews(Model model) {
//        model.addAttribute("allReviews", reviewsRepo.findAll());
//        return("reviews");
//    }
//
//    @RequestMapping("/single-review/{id}")
//    public String displaySingleReview(@PathVariable Long reviewId, Model model) {
//        model.addAttribute("reviews", reviewsRepo.findById(reviewId).get());
//        return ("redirect:/reviews");
//    }
//}