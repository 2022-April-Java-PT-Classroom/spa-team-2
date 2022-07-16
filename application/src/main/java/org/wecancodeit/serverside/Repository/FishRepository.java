package org.wecancodeit.serverside.Repository;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.Model.Fish;

public interface FishRepository extends CrudRepository<Fish, Long> {
    Fish findByName(String name);
}
