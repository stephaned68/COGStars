import { rollTable } from "./functions/randomizer.js";
import { createElement, setValue } from "./functions/dom.js";

import { getStars } from "./functions/stargen.js";
import { numberOfStars } from "./data/stargen.js";

const version = "1.1.0";

function generateSystem() {
  const starSys = rollTable(numberOfStars);
  const systems = parseInt(starSys.systems) || 1;
  const types = parseInt(starSys.starTypes) || 0;
  const stars = parseInt(starSys.stars) || 0;
  return { systems, types, stars };
}

function generate() {

  const names = [ "a", "b", "c", "d", "e", "f" ];

  const starSys = generateSystem();
  
  let result = "";
  if (starSys.systems == 2) {
    numberOfStars.roll.faces = 95;
    result += createElement("h3", "Deux systèmes en interaction gravitationnelle").outerHTML;
    result += createElement("h4", "Système A").outerHTML;
    const starSysA = generateSystem();
    result += getStars(names, starSysA.types, starSysA.stars);
    result += createElement("h4", "Système B").outerHTML;
    const starSysB = generateSystem();
    result += getStars(names, starSysB.types, starSysB.stars);
  } else {
    result = getStars(names, starSys.types, starSys.stars);
  }

  document.querySelector("#system").innerHTML = result;

}

document.querySelector("h1").title = `Version ${version}`;

const starOddities = localStorage.getItem("starOddities") || 1;
setValue("#starOddities", starOddities);

const planetOddities = localStorage.getItem("planetOddities") || 1;
setValue("#planetOddities", planetOddities);

document.querySelector("#generateButton").addEventListener("click", generate);
