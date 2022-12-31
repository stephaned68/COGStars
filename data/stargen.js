export const numberOfStars = {

  roll: { dice: 1, faces: 100 },

  results: [
    { 
      range: { min:1, max:60 },
      result: "Etoile simple",
      systems: 1,
      starTypes: 1,
      stars: 1
    },
    { 
      range: { min:61, max:75 },
      result: "Etoile binaire",
      systems: 1,
      starTypes: 1,
      stars: 2
    },
    { 
      range: { min:76, max:85 },
      result: "Etoile binaire",
      systems: 1,
      starTypes: 2,
      stars: 2
    },
    { 
      range: { min:86, max:95 },
      result: "Etoile ternaire",
      systems: 1,
      starTypes: 3,
      stars: 3
    },
    { 
      range: { min:96, max:99 },
      result: "Deux systèmes en interaction",
      systems: 2
    },
    { 
      range: { min:100, max:100 },
      result: "Deux systèmes en interaction",
      systems: 2
    },
  ]

};

export const starTypes = {

  roll: { dice: 1, faces: 100 },

  results: [
    {
      range:{ min:1, max:5 },
      result: "Naine brune",
      type: "bd"
    },
    {
      range:{ min:6, max:20 },
      result: "Etoile rouge",
      type: "M"
    },
    {
      range:{ min:21, max:35 },
      result: "Etoile orange",
      type: "K",
      evolved: { 
        roll: { dice: 1, faces: 100 }, 
        results: [
          {
            range: { min:100, max:100 },
            result: "Géante rouge",
            type: "M",
            giant: "g"
          }
        ]
      }
    },
    {
      range:{ min:36, max:50 },
      result: "Etoile jaune",
      type: "G",
      evolved: { 
        roll: { dice: 1, faces: 100 }, 
        results: [
          {
            range: { min:99, max:100 },
            result: "Géante rouge",
            type: "M",
            giant: "g"
          }
        ]
      }
    },
    {
      range:{ min:51, max:65 },
      result: "Etoile jaune-blanc",
      type: "F",
      evolved: { 
        roll: { dice: 1, faces: 20 }, 
        results: [
          { 
            range: { min:20, max:20 },
            result: "Géante rouge",
            type: "M",
            giant: "g"
          }
        ]
      }
    },
    {
      range:{ min:66, max:75 },
      result: "Etoile blanche",
      type: "A",
      evolved: { 
        roll: { dice: 1, faces: 20 }, 
        results: [
          { 
            range: { min:19, max:20 },
            result: "Géante rouge",
            type: "M",
            giant: "g"
          }
        ]
      }
    },
    {
      range:{ min:76, max:85 },
      result: "Etoile blanc-bleu",
      type: "B",
      evolved: { 
        roll: { dice: 1, faces: 20 }, 
        results: [
          { 
            range: { min:18, max:20 },
            result: "Supergéante rouge",
            type: "M",
            giant: "sg"
          }
        ]
      }
    },
    {
      range:{ min:86, max:95 },
      result: "Etoile bleue",
      type: "O",
      evolved: { 
        roll: { dice: 1, faces: 20 }, 
        results: [
          { 
            range: { min:15, max:19 },
            result: "Supergéante rouge",
            type: "M",
            giant: "sg"
          },
          { 
            range: { min:20, max:20 },
            result: "Supergéante bleue",
            type: "O",
            giant: "sg"
          }
        ]
      }
    },
    {
      range:{ min:91, max:94 },
      result: "Naine blanche, nébuleuse planétaire",
      type: "wd"
    },
    {
      range:{ min:95, max:97 },
      result: "Etoile à neutrons",
      type: "ns"
    },
    {
      range:{ min:98, max:100 },
      result: "Trou noir",
      type: "bh"
    }
  ]
};

export const starOddities = {

  roll: { dice: 1, faces: 100 },

  results: [
    {
      range:{ min: 1, max: 5 },
      result: "Nouvelle-née"
    },
    {
      range:{ min: 6, max: 20 },
      result: "Métallicité élevée"
    },
    {
      range:{ min: 21, max: 35 },
      result: "Métallicité faible"
    },
    {
      range:{ min: 36, max: 50 },
      result: "Hydrosphère"
    },
    {
      range:{ min: 51, max: 60 },
      result: "Phase d'accalmie"
    },
    {
      range:{ min: 61, max: 70 },
      result: "Rotation élevée"
    },
    {
      range:{ min: 71, max: 80 },
      result: "Eruptions stellaires"
    },
    {
      range:{ min: 81, max: 85 },
      result: "Naine blanche vorace"
    },
    {
      range:{ min: 86, max: 90 },
      result: "Transition de fin de vie"
    },
    {
      range:{ min: 91, max: 92 },
      result: "Etoile incohérente"
    },
    {
      range:{ min: 93, max: 94 },
      result: "Taches noires"
    },
    {
      range:{ min: 95, max: 95 },
      result: "Filaments de feu"
    },
    {
      range:{ min: 96, max: 96 },
      result: "Perturbation du champ PSI"
    },
    {
      range:{ min: 97, max: 97 },
      result: "Eléments inconnus"
    },
    {
      range:{ min: 98, max: 98 },
      result: "Singularité proche"
    },
    {
      range:{ min: 99, max: 99 },
      result: "Emission radio"
    },
    {
      range:{ min: 100, max: 100 },
      result: "Système vide"
    },
  ]
};