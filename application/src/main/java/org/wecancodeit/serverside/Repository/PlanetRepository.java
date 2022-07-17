package org.wecancodeit.serverside.Repository;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.Model.Planet;

public interface PlanetRepository extends CrudRepository<Planet, Long> {


}