
package org.wecancodeit.serverside.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.Model.Planet;
import org.wecancodeit.serverside.Repository.PlanetRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
@CrossOrigin
public class PlanetController {

    @Resource
    private PlanetRepository planetRepo;

    @GetMapping("/api/add-planet")

    public Collection<Planet> getPlanet() {
        return (Collection<Planet>) planetRepo.findAll();
    }
}