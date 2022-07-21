package org.wecancodeit.serverside.Controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.Model.Fish;
import org.wecancodeit.serverside.Repository.FishRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
@CrossOrigin
public class FishController {

    @Resource

    private FishRepository fishRepo;

    @GetMapping("/api/fish")
    public Collection<Fish>getFish(){
        return (Collection<Fish>) fishRepo.findAll();

    }

    @PostMapping("/api/fishes")

    public Collection<Fish>addFish(@RequestBody String body) throws JSONException {
        JSONObject newFish = new JSONObject(body);
        String addFishName = newFish.getString("name");

        return (Collection<Fish>) fishRepo.findAll();
    }

}