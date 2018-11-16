//OBJECTS!!!

let netflix = {
    id: 9,
    name: "Super Store",
    season1: {
      seasonInfo: {
        episodeInfo: [
          { episode: 1, episodeName: "Pilot" },
          { episode: 2, episodeName: "Magazine Profile" },
          { episode: 3, episodeName: "Shots and Salsa" },
          { episode: 4, episodeName: "Mannequin" },
          { episode: 5, episodeName: "Shoplifter" },
          { episode: 6, episodeName: "Secret Shopper" },
          { episode: 7, episodeName: "Color Wars" },
          { episode: 8, episodeName: "Wedding Day Sale" },
          { episode: 9, episodeName: "All-Nighter" },
          { episode: 10, episodeName: "Demotion" },
          { episode: 11, episodeName: "Labor" }
        ]
      }
    },
    season2: {},
    season3: {}
  };

// 
let spaceJam = {
    toonSquad: {
      human: 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      tDevil: 'Tasmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
  }

//   console.log(Object.keys(spaceJam));
//   console.log(Object.keys(spaceJam.monstars));


//   console.log(spaceJam.nbaPlayers.phoenixSuns);

//   console.log(Object.values(spaceJam.nbaPlayers));


//square bracket notation
let garden = {
    vegetable: 'zucchini',
    fleur: 'sunflower',
    fruit: 'nanner',
    water: true,
    sun: true,
    size: 45,
}

// let valU = 'vegetable';
// console.log(garden.valU, garden[valU]);
// console.log(garden.valU, garden['vegetable']);

// let baking = {};  //empty object
// baking['zucchini'] = 'bake bread';
// console.log(Object.values(baking));

// baking.caulifleur = "fry 'em up!';

// console.log(Object.values(baking));

// let baking = {};
// baking['zucchini'] = 'better bake bread';

// console.log(baking[garden['vegetable']]);
// console.log(baking['zucchini']);

let key = "water"

Object.keys(garden).forEach(g => {
    if (key === g) {
        console.log(garden[key]);
    }
})