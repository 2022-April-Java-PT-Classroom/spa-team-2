
package org.wecancodeit.serverside.Controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.Model.Planet;
import org.wecancodeit.serverside.Repository.PlanetRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
@CrossOrigin
public class PlanetController {

    @Resource
    private PlanetRepository planetRepo;

    @GetMapping("/api/planet")

    public Collection<Planet> getPlanet() {

        return (Collection<Planet>) planetRepo.findAll();
    }

    @PostMapping("/api/planets")

    public Collection<Planet> addPlanet(@RequestBody String body) throws JSONException{
        JSONObject newPlanet = new JSONObject(body);
        String addPlanetName = newPlanet.getString("name");
        return (Collection<Planet>) planetRepo.findAll();
    }
}