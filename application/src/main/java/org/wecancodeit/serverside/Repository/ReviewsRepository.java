package org.wecancodeit.serverside.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.wecancodeit.serverside.Model.Review;

    @Repository
    public interface ReviewsRepository extends CrudRepository<Review, Long> {
        Review findByName(String name);
    }
