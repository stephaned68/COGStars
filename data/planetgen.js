export const planetTypes = {
  "T": "Tellurique",
  "N": "Neptunienne",
  "J": "Jovienne",
  "A": "Astéroïdes"
};

export const numberOfPlanets = {

  "bd": {
    max: 4,
    types: [
      {
        type: "T",
        roll: { dice:1, faces: 4, mod: -1 }
      },
      {
        type: "N",
        roll: { dice:1, faces: 4, mod: -3 }
      },
      {
        type: "A",
        roll: { dice:1, faces: 4, mod: -1 }
      }
    ]
  },

  "M" : {
    max: 8,
    types: [
      {
        type: "T",
        roll: { dice:1, faces: 8, mod: -1 }
      },
      {
        type: "N",
        roll: { dice:1, faces: 4, mod: -2 }
      },
      {
        type: "J",
        roll: { dice:1, faces: 4, mod: -3 }
      },
      {
        type: "A",
        roll: { dice:1, faces: 4, mod: -2 }
      }
    ]
  },

  "K" : {
    max: 10,
    types: [
      {
        type: "T",
        roll: { dice:1, faces: 8, mod: -1 }
      },
      {
        type: "N",
        roll: { dice:1, faces: 4, mod: -2 }
      },
      {
        type: "J",
        roll: { dice:1, faces: 4, mod: -3 }
      },
      {
        type: "A",
        roll: { dice:1, faces: 4, mod: -2 }
      }
    ]
  },
  
  "G" : {
    max: 12,
    types: [
      {
        type: "T",
        roll: { dice:1, faces: 6, mod: -1 }
      },
      {
        type: "N",
        roll: { dice:1, faces: 4, mod: -1 }
      },
      {
        type: "J",
        roll: { dice:1, faces: 4, mod: -2 }
      },
      {
        type: "A",
        roll: { dice:1, faces: 4, mod: -1 }
      }
    ]
  },
  
  "F" : {
    max: 10,
    types: [
      {
        type: "T",
        roll: { dice:1, faces: 6, mod: -1 }
      },
      {
        type: "N",
        roll: { dice:1, faces: 6, mod: -1 }
      },
      {
        type: "J",
        roll: { dice:1, faces: 4, mod: -2 }
      },
      {
        type: "A",
        roll: { dice:1, faces: 4, mod: -2 }
      }
    ]
  },
    
  "A" : {
    max: 8,
    types: [
      {
        type: "T",
        roll: { dice:1, faces: 4, mod: -1 }
      },
      {
        type: "N",
        roll: { dice:1, faces: 6, mod: -1 }
      },
      {
        type: "J",
        roll: { dice:1, faces: 4, mod: -1 }
      },
      {
        type: "A",
        roll: { dice:1, faces: 4, mod: -3 }
      }
    ]
  },
    
  "B" : {
    max: 6,
    types: [
      {
        type: "T",
        roll: { dice:1, faces: 4, mod: -2 }
      },
      {
        type: "N",
        roll: { dice:1, faces: 4, mod: -1 }
      },
      {
        type: "J",
        roll: { dice:1, faces: 6, mod: -1 }
      },
      {
        type: "A",
        roll: { dice:1, faces: 4, mod: -3 }
      }
    ]
  },
  
  "O" : {
    max: 4,
    types: [
      {
        type: "T",
        roll: { dice:1, faces: 4, mod: -3 }
      },
      {
        type: "N",
        roll: { dice:1, faces: 4, mod: -2 }
      },
      {
        type: "J",
        roll: { dice:1, faces: 4, mod: -1 }
      },
      {
        type: "A",
        roll: { dice:1, faces: 4, mod: -3 }
      }
    ]
  },
 
  "g" : {
    max: 6,
    types: [
      {
        type: "T",
        roll: { dice:1, faces: 4, mod: -3 }
      },
      {
        type: "N",
        roll: { dice:1, faces: 4, mod: -2 }
      },
      {
        type: "J",
        roll: { dice:1, faces: 4, mod: -2 }
      },
      {
        type: "A",
        roll: { dice:1, faces: 4, mod: -3 }
      }
    ]
  },
  
  "sg" : {
    max: 4,
    types: [
      {
        type: "N",
        roll: { dice:1, faces: 4, mod: -3 }
      },
      {
        type: "J",
        roll: { dice:1, faces: 4, mod: -2 }
      },
      {
        type: "A",
        roll: { dice:1, faces: 4, mod: -3 }
      }
    ]
  },

  "wd" : {
    max: 2,
    types: [
      {
        type: "T",
        roll: { dice:1, faces: 4, mod: -3 }
      },
      {
        type: "N",
        roll: { dice:1, faces: 4, mod: -3 }
      },
      {
        type: "A",
        roll: { dice:1, faces: 4, mod: -3 }
      }
    ]
  },

  "*" : {
    max: 1,
    types: [
      {
        type: "A",
        roll: { dice:1, faces: 4, mod: -3 }
      }
    ]
  },

};

export const rockyTypes = {

  roll: { dice: 1, faces: 100 },

  results: [
    {
      range: { min: 1, max: 15 },
      result: "Planète métallique",
      gravityRoll: { dice: 1, faces: 6, mod: 2 }
    },
    {
      range: { min: 16, max: 50 },
      result: "Planète de silicates",
      gravityRoll: { dice: 1, faces: 6 }
    },
    {
      range: { min: 51, max: 65 },
      result: "Planète océan",
      gravityRoll: { dice: 1, faces: 6 }
    },
    {
      range: { min: 66, max: 80 },
      result: "Planète sans noyau",
      gravityRoll: { dice: 1, faces: 4 }
    },
    {
      range: { min: 81, max: 90 },
      result: "Planète de carbone",
      gravityRoll: { dice: 1, faces: 6 }
    },
    {
      range: { min: 91, max: 100 },
      result: "Super-Terre"
    },
  ]

};

export const neptuneTypes = {

  roll: { dice: 1, faces: 100 },

  results: [
    {
      range: { min: 1, max: 10 },
      result: "Neptune chaude",
      gravityRoll: { dice: 1, faces: 8, mod: 3 }
    },
    {
      range: { min: 11, max: 15 },
      result: "Planète chthonienne",
      gravityRoll: { dice: 1, faces: 8, mod: 2 }
    },
    {
      range: { min: 16, max: 30 },
      result: "Naine gazeuse",
      gravityRoll: { dice: 1, faces: 8, mod: 3 },
      moonTypes: [
        {
          type: "Lunes naines",
          roll: { dice: 1, faces: 6 }
        },
        {
          type: "Proto-lunes",
          roll: { dice: 1, faces: 4, mod: -1 }
        }
      ]
    },
    {
      range: { min: 31, max: 100 },
      result: "Neptune froide",
      gravityRoll: { dice: 1, faces: 8, mod: 2 },
      moonTypes: [
        {
          type: "Lunes",
          roll: { dice: 2, faces: 6 }
        },
        {
          type: "Lunes naines",
          roll: { dice: 2, faces: 6 }
        },
        {
          type: "Proto-lunes",
          roll: { dice: 1, faces: 4, mod: -1 }
        }
      ]
    },
  ]

};


export const jovianTypes = {

  roll: { dice: 1, faces: 100 },

  results: [
    {
      range: { min: 1, max: 10 },
      result: "Jupiter chaude",
      gravityRoll: { dice: 1, faces: 8, mod: 3 }
    },
    {
      range: { min: 11, max: 15 },
      result: "Planète chthonienne",
      gravityRoll: { dice: 1, faces: 8, mod: 2 }
    },
    {
      range: { min: 16, max: 20 },
      result: "Planète enflée",
      gravityRoll: { dice: 1, faces: 6, mod: 1 },
      moons: [
        {
          type: "Proto-lunes",
          number: 0,
          roll: { dice: 1, faces: 3 }
        }
      ]
    },
    {
      range: { min: 21, max: 30 },
      result: "Naine gazeuse",
      gravityRoll: { dice: 1, faces: 8, mod: 1 },
      moonTypes: [
        {
          type: "Lunes naines",
          roll: { dice: 1, faces: 3 }
        },
        {
          type: "Proto-lunes",
          roll: { dice: 1, faces: 6 }
        }
      ]
    },
    {
      range: { min: 31, max: 40 },
      result: "Planète d'hélium",
      gravityRoll: { dice: 1, faces: 8, mod: 3 },
      moonTypes: [
        {
          type: "Lunes",
          roll: { dice: 1, faces: 3 }
        },
        {
          type: "Lunes naines",
          roll: { dice: 1, faces: 6 }
        },
        {
          type: "Proto-lunes",
          roll: { dice: 2, faces: 6 }
        }
      ]
    },
    {
      range: { min: 41, max: 85 },
      result: "Jupiter froide",
      gravityRoll: { dice: 1, faces: 8, mod: 2 },
      moonTypes: [
        {
          type: "Lunes",
          roll: { dice: 2, faces: 6 }
        },
        {
          type: "Lunes naines",
          roll: { dice: 3, faces: 6 }
        },
        {
          type: "Proto-lunes",
          roll: { dice: 8, faces: 6 }
        }
      ]
    },
    {
      range: { min: 86, max: 100 },
      result: "Super-Jupiter",
      gravityRoll: { dice: 1, faces: 8, mod: 4 },
      moonTypes: [
        {
          type: "Lunes",
          roll: { dice: 3, faces: 6 }
        },
        {
          type: "Lunes naines",
          roll: { dice: 4, faces: 6 }
        },
        {
          type: "Proto-lunes",
          roll: { dice: 8, faces: 6 }
        }
      ]
    },
  ]

};

export const asteroidTypes = {
  roll: { dice: 1, faces: 100 },

  results: [
    {
      range: { min: 1, max: 15 },
      result: "Disque protoplanétaire"
    },
    {
      range: { min: 16, max: 40 },
      result: "Ceinture d'astéroïdes"
    },
    {
      range: { min: 41, max: 55 },
      result: "Astéroïdes troyens"
    },
    {
      range: { min: 56, max: 65 },
      result: "Nuage de poussières"
    },
    {
      range: { min: 66, max: 75 },
      result: "Astéroïdes massifs"
    },
    {
      range: { min: 76, max: 80 },
      result: "Evénement cataclysmique"
    },
    {
      range: { min: 81, max: 95 },
      result: "Champ d'astéroïdes dense"
    },
    {
      range: { min: 96, max: 100 },
      result: "Mégastructure d'astéroïdes"
    },
  ]
};

export const gravityTypes = {
  
  roll: {},

  results: [
    {
      range: { min: -9, max: 1 },
      result: "Minimale",
      adjust: -20
    },
    {
      range: { min: 2, max: 3 },
      result: "Légère",
      adjust: -10
    },
    {
      range: { min: 4, max: 4 },
      result: "Moyenne",
      adjust: 0
    },
    {
      range: { min: 5, max: 6 },
      result: "Forte",
      adjust: 10
    },
    {
      range: { min: 7, max: 7 },
      result: "Supérieure",
      adjust: 20
    },
    {
      range: { min: 8, max: 19 },
      result: "Extrême",
      adjust: 30
    },
  ]

};

export const hydrosphere = {

  roll: { dice: 1, faces: 100 },

  results: [
    {
      range: { min: 1, max: 50 },
      result: "Aucune"
    },
    {
      range: { min: 51, max: 60 },
      result: "Diffuse"
    },
    {
      range: { min: 61, max: 70 },
      result: "Vapeur d'eau"
    },
    {
      range: { min: 71, max: 85 },
      result: "Liquide"
    },
    {
      range: { min: 86, max: 100 },
      result: "Solide"
    },
  ]

};

export const atmosphere = {

  roll: { dice: 1, faces: 100 },

  results: [
    {
      range: { min: 1, max: 30 },
      result: "Ténue"
    },
    {
      range: { min: 31, max: 50 },
      result: "Diffuse"
    },
    {
      range: { min: 51, max: 60 },
      result: "Effet de serre"
    },
    {
      range: { min: 61, max: 70 },
      result: "Stable"
    },
    {
      range: { min: 71, max: 80 },
      result: "Corrosive"
    },
    {
      range: { min: 81, max: 90 },
      result: "Empoisonnée"
    },
    {
      range: { min: 91, max: 100 },
      result: "Explosive"
    }
  ]

};

export const rockyOddities = {
  
  roll: { dice: 1, faces: 100 },
  
  results: [
    {
      range: { min: 1, max: 1 },
      result: "En formation"
    },
    {
      range: { min: 2, max: 3 },
      result: "Pas d'inclinaison axiale"
    },
    {
      range: { min: 4, max: 5 },
      result: "Inclinaison axiale marquée"
    },
    {
      range: { min: 6, max: 7 },
      result: "Orbite synchrone"
    },
    {
      range: { min: 8, max: 9 },
      result: "Orbite rétrograde"
    },
    {
      range: { min: 10, max: 12 },
      result: "Lune"
    },
    {
      range: { min: 13, max: 15 },
      result: "Lunes naines"
    },
    {
      range: { min: 16, max: 18 },
      result: "Astéroïdes"
    },
    {
      range: { min: 19, max: 20 },
      result: "Astéroïde tueur"
    },
    {
      range: { min: 21, max: 22 },
      result: "Cratères"
    },
    {
      range: { min: 23, max: 24 },
      result: "Anneau"
    },
    {
      range: { min: 25, max: 26 },
      result: "Cataclysme"
    },
    {
      range: { min: 27, max: 30 },
      result: "Activité tectonique"
    },
    {
      range: { min: 31, max: 33 },
      result: "Activité volcanique"
    },
    {
      range: { min: 34, max: 35 },
      result: "Pauvre en ressources"
    },
    {
      range: { min: 36, max: 40 },
      result: "Riche en ressources"
    },
    {
      range: { min: 41, max: 42 },
      result: "Atmosphère opaque"
    },
    {
      range: { min: 43, max: 45 },
      result: "Couleurs inhabituelles"
    },
    {
      range: { min: 46, max: 47 },
      result: "Distorsion du champ magnétique"
    },
    {
      range: { min: 48, max: 49 },
      result: "En fin de vie"
    },
    {
      range: { min: 50, max: 55 },
      result: "Traces de vie"
    },
    {
      range: { min: 56, max: 60 },
      result: "Vie endémique"
    },
    {
      range: { min: 61, max: 65 },
      result: "Espèce sapiente"
    },
    {
      range: { min: 66, max: 66 },
      result: "Signal de détresse"
    },
    {
      range: { min: 67, max: 70 },
      result: "Colonie abandonnée"
    },
    {
      range: { min: 71, max: 72 },
      result: "Sonde spatiale"
    },
    {
      range: { min: 73, max: 74 },
      result: "Station spatiale inachevée"
    },
    {
      range: { min: 75, max: 77 },
      result: "Epave de vaisseau"
    },
    {
      range: { min: 78, max: 80 },
      result: "Avant-poste"
    },
    {
      range: { min: 81, max: 85 },
      result: "Station minière"
    },
    {
      range: { min: 86, max: 87 },
      result: "Station scientifique"
    },
    {
      range: { min: 88, max: 88 },
      result: "Station automatisée"
    },
    {
      range: { min: 89, max: 89 },
      result: "Monde prison"
    },
    {
      range: { min: 90, max: 90 },
      result: "Terraformation"
    },
    {
      range: { min: 91, max: 91 },
      result: "Xénoformation"
    },
    {
      range: { min: 92, max: 94 },
      result: "Base dissimulée"
    },
    {
      range: { min: 95, max: 96 },
      result: "Champ PSI"
    },
    {
      range: { min: 97, max: 97 },
      result: "Ruines de civilisation ancienne"
    },
    {
      range: { min: 98, max: 98 },
      result: "Mégastructure"
    },
    {
      range: { min: 99, max: 99 },
      result: "Artefact xéno"
    },
    {
      range: { min: 100, max: 100 },
      result: "Planète artificielle"
    },
  ]
};

export const gasGiantOddities = {
  
  roll: { dice: 1, faces: 100 },
  
  results: [
    {
      range: { min: 1, max: 5 },
      result: "Ejections de matière"
    },
    {
      range: { min: 6, max: 10 },
      result: "Orbite rétrograde"
    },
    {
      range: { min: 11, max: 15 },
      result: "Rotation rapide"
    },
    {
      range: { min: 16, max: 20 },
      result: "Tempêtes titanesques"
    },
    {
      range: { min: 21, max: 25 },
      result: "Atmosphère instable"
    },
    {
      range: { min: 26, max: 30 },
      result: "Atmosphère calme"
    },
    {
      range: { min: 31, max: 35 },
      result: "Courants planétaires"
    },
    {
      range: { min: 36, max: 40 },
      result: "Anneau régulier"
    },
    {
      range: { min: 41, max: 45 },
      result: "Anneau irrégulier"
    },
    {
      range: { min: 46, max: 50 },
      result: "Anneau de protolunes"
    },
    {
      range: { min: 51, max: 55 },
      result: "Anneaux multiples"
    },
    {
      range: { min: 56, max: 60 },
      result: "Effets de marée"
    },
    {
      range: { min: 61, max: 65 },
      result: "Atmosphère incandescente"
    },
    {
      range: { min: 66, max: 70 },
      result: "Atmosphère ionisée"
    },
    {
      range: { min: 71, max: 75 },
      result: "Atmosphère noire"
    },
    {
      range: { min: 76, max: 77 },
      result: "Formes de vie"
    },
    {
      range: { min: 78, max: 80 },
      result: "Ilôts de glace"
    },
    {
      range: { min: 81, max: 85 },
      result: "Station spatiale inachevée"
    },
    {
      range: { min: 86, max: 90 },
      result: "Station d'extraction gazière"
    },
    {
      range: { min: 91, max: 95 },
      result: "Station d'extraction gazière automatisée"
    },
    {
      range: { min: 96, max: 97 },
      result: "Station scientifique"
    },
    {
      range: { min: 98, max: 99 },
      result: "Base dissimulée"
    },
    {
      range: { min: 100, max: 100 },
      result: "Artefact xéno"
    },
  ]
};