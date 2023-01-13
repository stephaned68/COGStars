import { roller, rollTable } from "./functions/randomizer.js";
import { createElement, setValue } from "./functions/dom.js";

import { getStars, renderPlanet } from "./functions/stargen.js";
import { numberOfStars, starNames } from "./data/stargen.js";
import { getJovian } from "./functions/planetgen.js";

const version = "1.3.1";

function generateSystem() {
  const starSys = rollTable(numberOfStars);
  const systems = parseInt(starSys.systems) || 1;
  const types = parseInt(starSys.starTypes) || 0;
  const stars = parseInt(starSys.stars) || 0;
  const jovians = starSys.range.min == 100;
  return { systems, types, stars, jovians };
}

function generate() {

  const starName = starNames[roller({ dice: 1, faces: starNames.length }).total - 1];

  const names = [ "a", "b", "c", "d", "e", "f" ];

  const starSys = generateSystem();
  
  let result = "";
  if (starSys.systems == 2) {
    numberOfStars.roll.faces = 95;
    result += createElement("h3", "Deux systèmes en interaction gravitationnelle").outerHTML;
    result += createElement("h4", `${starName} A`).outerHTML;
    const starSysA = generateSystem();
    result += getStars(names, starSysA.types, starSysA.stars);
    result += createElement("h4", `${starName} B`).outerHTML;
    const starSysB = generateSystem();
    result += getStars(names, starSysB.types, starSysB.stars);
  } else {
    result += createElement("h4", starName).outerHTML;
    result += getStars(names, starSys.types, starSys.stars);
  }
  
  if (starSys.jovians) {
    const jovians = roller( { dice: 1, faces: 4, mod: -2 } ).total;
    let jResult = "";
    for (let jp = 1; jp <= jovians; jp++) {
      const p = getJovian(planetOddities);
      p.type = "Jovienne";
      jResult += renderPlanet(p);
    }
    if (jovians > 0) {
      result += createElement("h4", `Joviennes (${jovians})`).outerHTML;
      result += createElement("ul", " " + jResult, { class: "list-group" }).outerHTML;
    }
  }
  document.querySelector("#system").innerHTML = result;

}

document.querySelector("h1").title = `Version ${version}`;

const starOddities = localStorage.getItem("starOddities") || 1;
setValue("#starOddities", starOddities);

const planetOddities = localStorage.getItem("planetOddities") || 1;
setValue("#planetOddities", planetOddities);

document.querySelector("#generateButton").addEventListener("click", generate);
