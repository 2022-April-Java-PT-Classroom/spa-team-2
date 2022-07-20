package org.wecancodeit.serverside;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.Model.Fish;
import org.wecancodeit.serverside.Model.Planet;
import org.wecancodeit.serverside.Repository.FishRepository;
import org.wecancodeit.serverside.Repository.PlanetRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner{

    @Resource
    private FishRepository fishRepo;
     @Resource
    private PlanetRepository planetRepo;

    @Override
    public void run(String... args) throws Exception {
        Fish atlanticSalmon = new Fish("Atlantic Salmon", "There are three groups of wild Atlantic salmon: North American, European, and Baltic. The North American group, including the Canadian and U.S. populations, was historically found from northern Quebec southeast to Newfoundland and southwest to Long Island Sound. In the United States, Atlantic salmon were once native to almost every river north of the Hudson River. Due to the effects of industrial and agricultural development (including habitat destruction, dams, and historic overfishing), most populations native to New England were eradicated. Now, the only native populations of Atlantic salmon in the United States are found in Maine.", "Spawning females lay an average of 7,500 eggs. Juvenile “smolts” grow much faster in saltwater than in freshwater. Growth rates vary, depending on season, age, sex and population density. After two years at sea, adult salmon have an average length of 28 to 30 inches and a weight of 8 to 12 pounds. Atlantic salmon do not die after spawning.", "Spindle-like body shape – rounded, broad in the middle, and tapered at each end. Typical of salmon species, shape is flattened toward the sides. Head is relatively small, about 1/5 of body length. Ventral paired fins are prominent, especially on juveniles.", "fish-images/salmon.png");
        fishRepo.save(atlanticSalmon);
        Fish bluefish = new Fish("Bluefish", "Along the East Coast from Maine to eastern Florida", "Bluefish live up to 12 years. They grow fast, up to 31 pounds and 39 inches. They are able to reproduce at age 2, when they’re 15 to 20 inches in length. They exhibit feeding behavior called the “bluefish blitz,” where large schools of big fish attack bait fish near the surface, churning the water like a washing machine. They feed voraciously on their prey, eating almost anything they can catch and swallow.", "Bluefish are blue-green on the back and silvery on the sides and belly. They have a prominent jaw, with sharp, compressed teeth.", "fish-images/bluefish.png");
        fishRepo.save(bluefish);
        Fish cobia = new Fish("Cobia", "In U.S. waters, cobia are most abundant from Virginia south through the Gulf of Mexico.", "Cobia are the only member of the family Rachycentridae in North America. They grow up to 6 feet and 100 pounds and live up to 12 years.", "Cobia are dark brown with a single dorsal fin. Young cobia have distinct coloring, with alternating black and white horizontal stripes and splotches of bronze, orange, and green.", "fish-images/cobia.png");
        fishRepo.save(cobia);
        Fish haddock = new Fish("Haddock", "Haddock are found on both sides of the North Atlantic. In the western North Atlantic, they’re found from Newfoundland to Cape May, New Jersey, and are most abundant on Georges Bank and in the Gulf of Maine.", "Haddock are a fast-growing species that typically range between 1 and 3 feet long at maturity. They generally weigh between 2 and 7 pounds. Haddock begin to reproduce between the ages of 1 and 4 years old and at 10.5 to 11.7 inches long.", "Haddock are a member of the cod family, but they are smaller than Atlantic cod. They can be distinguished by a black “thumbprint” found on each side of their body.", "fish-images/haddock.png");
        fishRepo.save(haddock);
        Fish opah = new Fish("Opah", "Opah are found in tropical and temperate waters all around the world", "Because opah are not a major commercial seafood species and they live in the deep ocean, scientists know very little about their biology and ecology.", "Opah are an unusual looking fish—they have a round, flat body that’s silvery gray in color. Toward the belly, the silver shades to a rose red, dotted with white spots.", "fish-images/opah.png");
        fishRepo.save(opah);
        

        Planet mars = new Planet("Mars", "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System," +
                " being larger than only Mercury. In English, Mars carries the name of the Roman god of war.", "oblate spheroid","planet-image/mars.jpg");
        planetRepo.save(mars);
        Planet jupiter = new Planet("Jupiter", " Jupiter is the fifth planet from the Sun and the largest in the Solar System. " +
                "It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined," +
                " but slightly less than one-thousandth the mass of the Sun.", "Oblate spheroid", "planet-image/jupiter.jpg");
        planetRepo.save(jupiter);
        Planet mercury = new Planet("Mercury", "Mercury-the smallest planet in our solar system and closest to the sun- is only slightly larger than Earth's Moon." +
                "Mercury is the fastest planet, zipping around the Sun every 88 Earth days. ", "Sphere","planet-image/mercury.jpg");
        planetRepo.save(mercury);
        Planet earth = new Planet("Earth", "Earth is the third planet from the Sun and the only astronomical object known to harbor life." +
                " While large volumes of water can be found throughout the Solar System, only Earth sustains liquid surface water. " +
                "About 71% of Earth's surface is made up of the ocean, dwarfing Earth's polar ice, lakes, and rivers.","Spherical","planet-image/earth.jpg");
        planetRepo.save(earth);
        Planet saturn = new Planet("Saturn", "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter." +
                " It is a gas giant with an average radius of about nine and a half times that of Earth. It has only one-eighth the average density of Earth; " +
                "however, with its larger volume, Saturn is over 95 times more massive.", " Oblate spheroid","planet-image/saturn.jpg");
        planetRepo.save(saturn);

    }
}
