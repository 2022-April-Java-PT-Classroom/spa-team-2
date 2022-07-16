package org.wecancodeit.serverside;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface FishRepository extends CrudRepository<Fish, Long> {
    Fish findByName(String name);
}
