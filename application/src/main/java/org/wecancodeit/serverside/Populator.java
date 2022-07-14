package org.wecancodeit.serverside;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner{

    @Resource
    private FishRepository fishRepo;

    @Resource
    private SolarSystemRepository solarRepo;


    @Override
    public void run(String... args) throws Exception {

        Fish atlanticSalmon = new Fish("Atlantic Salmon", "description");
        fishRepo.save(atlanticSalmon);
        Fish bluefish = new Fish("Bluefish", "description");
        fishRepo.save(bluefish);
        Fish cobia = new Fish("Cobia", "description");
        fishRepo.save(cobia);
        Fish haddock = new Fish("haddock", "description");
        fishRepo.save(haddock);
        fish opah = new Fish("Opah", "description");

    }
}
