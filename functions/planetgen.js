import { roller, rollTable } from "./randomizer.js";
import { getValue } from "./dom.js";
import * as pgdata from "../data/planetgen.js";

function rollMoons(planet) {
  let moons = [];
  planet.moonTypes.forEach(function (moonType) {
    let number = roller(moonType.roll).total;
    if (number > 0) moons.push(`${number} ${moonType.type}`);
  });
  return moons;
}

function getRocky(oddities = 1) {

  let planet = rollTable(pgdata.rockyTypes);

  if (planet.range.min === 91) {
    let superEarth = { ...planet };
    while (superEarth.range.min === 91) {
      superEarth = rollTable(pgdata.rockyTypes);
    }
    planet = { ...superEarth };
    planet.result = `Super-Terre (${ planet.result })`;
    planet.gravityRoll.mod = planet.gravityRoll.mod || 0;
    planet.gravityRoll.mod += 4;
  }

  let gravityType = pgdata.gravityTypes;
  gravityType.roll = planet.gravityRoll;
  planet.gravity = rollTable(gravityType);
  
  planet.hydrosphere = rollTable(pgdata.hydrosphere, planet.gravity.adjust);

  planet.atmosphere = rollTable(pgdata.atmosphere, planet.gravity.adjust);

  planet.oddities = getOddities(oddities, pgdata.rockyOddities);

  return planet;

}

function getNeptunian(oddities = 1) {

  let planet = rollTable(pgdata.neptuneTypes);

  let gravityType = pgdata.gravityTypes;
  gravityType.roll = planet.gravityRoll;
  planet.gravity = rollTable(gravityType);

  if (planet.range.min == 11) {
    let hydro = rollTable(pgdata.hydrosphere);
    if (hydro.range.min > 50) planet.hydrosphere = hydro;
    planet.oddities = getOddities(oddities, pgdata.rockyOddities);
  } else {
    planet.oddities = getOddities(oddities, pgdata.gasGiantOddities);
  }

  if (planet.moonTypes) {
    planet.moons = [];
    planet.moons = rollMoons(planet);
  }

  return planet;
  
}

function getJovian(oddities = 1) {

  let planet = rollTable(pgdata.jovianTypes);

  let gravityType = pgdata.gravityTypes;
  gravityType.roll = planet.gravityRoll;
  planet.gravity = rollTable(gravityType);

  planet.oddities = getOddities(oddities, pgdata.gasGiantOddities);

  if (planet.moonTypes) {
    planet.moons = [];
    planet.moons = rollMoons(planet);
  }

  return planet;

}

export { getJovian };

function getAsteroids() {

  return rollTable(pgdata.asteroidTypes);

}

function getPlanets(star) {

  let type = "*";
  if (star.evolved) {
    if (star.evolved.giant) type = star.evolved.giant;
  } else {
    type = star.type;
  }

  const oddities = getValue("#planetOddities");
  localStorage.setItem("planetOddities", oddities);

  star.planets.length = 0;

  let planets = pgdata.numberOfPlanets[type];
  if (!planets) return star;
  
  let maxNumber = planets.max;

  planets.types.forEach(function (planetType) {
    if (maxNumber == 0) return;

    let number = roller(planetType.roll).total;
    if (number <= 0) return;
    if (number > maxNumber) {
      number = maxNumber;
    }
    maxNumber -= number;

    for (let p = 1; p <= number; p++) {
      
      let planet = null;
      switch (planetType.type) {
        case "T":
          planet = getRocky(oddities);
          break;
        case "N":
          planet = getNeptunian(oddities);
          break;
        case "J":
          planet = getJovian(oddities);
          break;
        case "A":
          planet = getAsteroids();
          break;
      }
      planet.type = pgdata.planetTypes[planetType.type];
      star.planets.push( { ...planet });
    }
    
  });

  return star;
}

export { getPlanets };

function getOddities(oddityCount, oddityTable) {

  const oddities = [];
  for (let o = 1; o <= oddityCount; o++) {
    let oddity = "";
    while (true) {
      oddity = rollTable(oddityTable).result;
      if (!oddities.includes(oddity)) break;
    }
    oddities.push(oddity);
  }
  return oddities.join(", ");

}

export { getOddities };