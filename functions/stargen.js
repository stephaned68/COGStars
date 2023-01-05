import { roller, rollTable } from "../functions/randomizer.js";
import { starTypes, starOddities } from "../data/stargen.js";
import { getPlanets, getOddities } from "../functions/planetgen.js";
import { createElement, getValue } from "../functions/dom.js";

function habZone(options) {
  let interior = 0;
  let exterior = 0;

  switch (options.type) {
    case "nb":
      interior = 0.01;
      exterior = 0.075;
      break;
    case "M":
      interior = 0.1 - options.luminosity * 0.01;
      exterior = 0.3 - options.luminosity * 0.025;
      break;
    case "K":
      interior = 0.5 - options.luminosity * 0.05;
      exterior = 1 - options.luminosity * 0.05;
      break;
    case "G":
      interior = 1.1 - options.luminosity * 0.1;
      exterior = 1.7 - options.luminosity * 0.1;
      break;
    case "F":
      interior = 3 - options.luminosity * 0.2;
      exterior = 5 - options.luminosity * 0.2;
      break;
    case "A":
      interior = 10 - options.luminosity * 0.5;
      exterior = 20 - options.luminosity * 0.5;
      break;
    case "B":
      interior = 50 - options.luminosity;
      exterior = 150 - options.luminosity;
      break;
    case "O":
      interior = 500 - options.luminosity * 10;
      exterior = 1000 - options.luminosity * 10;
      break;
  }

  if (options.evolved) {
    if (options.evolved.type === "M") {
      interior = 1 - options.luminosity * 0.1;
      exterior = 3 - options.luminosity * 0.25;
    } else if (options.evolved.type === "O") {
      interior = 5000 - options.luminosity * 100;
      exterior = 10000 - options.luminosity * 100;
    }
  }

  const habZone = {
    interior: interior.toPrecision(3),
    exterior: exterior.toPrecision(3),
  };

  return habZone;
}

function renderPlanet(planet) {
  let output = "";

  if (planet.gravity) {
    output += createElement(
      "li",
      `Gravité : ${planet.gravity.result}`,
      { class: "list-group-item" }
    ).outerHTML;
  }
  if (planet.hydrosphere) {
    output += createElement(
      "li",
      `Hydrosphère : ${planet.hydrosphere.result}`,
      { class: "list-group-item" }
    ).outerHTML;
  }
  if (planet.atmosphere) {
    output += createElement(
      "li",
      `Atmosphère : ${planet.atmosphere.result}`,
      { class: "list-group-item" }
    ).outerHTML;
  }
  if (planet.oddities) {
    output += createElement(
      "li",
      `Particularités : ${planet.oddities}`,
      { class: "list-group-item" }
    ).outerHTML;
  }

  if (planet.moons && planet.moons.length > 0) {
    output += createElement(
      "li",
      `Satellites : ${planet.moons.join(", ")}`,
      { class: "list-group-item" }
    ).outerHTML;
  }

  if (output !== "")
    output = " :" + createElement("ul", " " + output).outerHTML;

  const imgSrc =
    "./img/" +
    planet.type.substring(0, 1).toLowerCase() +
    roller({ dice: 1, faces: 4 }).total.toString() +
    ".jpg";
  const img = createElement("img", "", {
    src: imgSrc,
    width: "30px",
  }).outerHTML;

  output = createElement(
    "li",
    ` ${img} ${planet.type} - ${planet.result}${output}`,
    { class: "list-group-item" }
  ).outerHTML;

  return output;
}

export { renderPlanet };

function renderStar(star) {
  let output = "";

  if (["O", "B", "A", "F", "G", "K", "M"].includes(star.type)) {
    output += createElement("li", `Type : ${star.type}${star.luminosity}`, {
      class: "list-group-item",
    }).outerHTML;
  }

  if (star.evolved) {
    output += createElement("li", `Fin de vie : ${star.evolved.result}`, {
      class: "list-group-item",
    }).outerHTML;
  }

  output += createElement(
    "li",
    `Zone habitable : ${star.habZone.interior}-${star.habZone.exterior} au`,
    { class: "list-group-item" }
  ).outerHTML;

  if (star.oddities && star.oddities !== "") {
    output += createElement("li", `Particularités : ${star.oddities}`, {
      class: "list-group-item",
    }).outerHTML;
  }

  if (star.planets.length > 0) {
    let planets = "";
    star.planets.forEach(function (p) {
      planets += renderPlanet(p);
    });
    planets = createElement("ul", " " + planets, { class: "list-group" }).outerHTML;
    output += createElement(
      "li",
      `Planètes (${star.planets.length}) : ${planets}`,
      { class: "list-group-item" }
    ).outerHTML;
  }

  const imgSrc = `./img/${star.type.toLowerCase()}.jpg`;
  const img = createElement("img", "", {
    src: imgSrc,
    width: "50px",
  }).outerHTML;
  output = createElement(
    "ul",
    ` ${img}&nbsp;${star.name}. ${star.result} : ${output}`,
    { class: "list-group" }
  ).outerHTML;

  return output;
}

function getStars(names, types, stars) {
  let output = "";

  const oddities = getValue("#starOddities");
  localStorage.setItem("starOddities", oddities);

  for (let type = 1; type <= types; type++) {
    let star = rollTable(starTypes);
    if (["O", "B", "A", "F", "G", "K", "M"].includes(star.type)) {
      star.luminosity = roller({ dice: 1, faces: 10, mod: -1 }).total;
    }
    if (star.evolved) {
      star.evolved = rollTable(star.evolved);
    }
    star.habZone = habZone({
      type: star.type,
      luminosity: star.luminosity,
      evolved: star.evolved,
    });
    star.oddities = getOddities(oddities, starOddities);
    star.planets = [];
    star = getPlanets(star);
    star.name = names.shift();
    output += renderStar(star) + "<br>";
    if (types == 1 && stars == 2) {
      star.planets = [];
      star = getPlanets(star);
      star.name = names.shift();
      output += renderStar(star) + "<br>";
    }
  }

  return output;
}

export { getStars };
