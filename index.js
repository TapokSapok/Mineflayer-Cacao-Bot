const { Worker } = require("node:worker_threads");

const bots = [
  {
    username: "Notch",
    axeChest: [29, -61, 34],
    lootChest: [41, -59, 29],
    skipAge: true,
    dig: true,
    sell: false,
    place: true,
    zones: [
      {
        main: "z",
        facing: "west",
        x: 27,
        y: [-55, -60],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 29,
        y: [-55, -60],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 31,
        y: [-55, -60],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 34,
        y: [-55, -60],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 36,
        y: [-55, -60],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 39,
        y: [-55, -60],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 41,
        y: [-55, -60],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 44,
        y: [-55, -60],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 46,
        y: [-55, -60],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 49,
        y: [-55, -60],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 51,
        y: [-55, -60],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 54,
        y: [-55, -60],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 56,
        y: [-55, -60],
        z: [33, 81],
      },
    ],
  },
  {
    username: "Notch_2",
    axeChest: [43, -25, 30],
    lootChest: [41, -25, 30],
    skipAge: true,
    dig: true,
    sell: false,
    place: true,
    zones: [
      {
        main: "z",
        facing: "east",
        x: 25,
        y: [-20, -25],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 27,
        y: [-20, -25],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 29,
        y: [-20, -25],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 31,
        y: [-20, -25],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 33,
        y: [-20, -25],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 35,
        y: [-20, -25],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 37,
        y: [-20, -25],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 39,
        y: [-20, -25],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 41,
        y: [-20, -25],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 43,
        y: [-20, -25],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 45,
        y: [-20, -25],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 47,
        y: [-20, -25],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 49,
        y: [-20, -25],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 51,
        y: [-20, -25],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 53,
        y: [-20, -25],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 55,
        y: [-20, -25],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 57,
        y: [-20, -25],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 59,
        y: [-20, -25],
        z: [33, 81],
      },
    ],
  },
  {
    username: "Notch_3",
    axeChest: [43, -32, 30],
    lootChest: [41, -32, 30],
    skipAge: true,
    dig: true,
    sell: false,
    place: true,
    zones: [
      {
        main: "z",
        facing: "east",
        x: 25,
        y: [-27, -32],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 27,
        y: [-27, -32],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 29,
        y: [-27, -32],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 31,
        y: [-27, -32],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 33,
        y: [-27, -32],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 35,
        y: [-27, -32],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 37,
        y: [-27, -32],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 39,
        y: [-27, -32],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 41,
        y: [-27, -32],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 43,
        y: [-27, -32],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 45,
        y: [-27, -32],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 47,
        y: [-27, -32],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 49,
        y: [-27, -32],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 51,
        y: [-27, -32],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 53,
        y: [-27, -32],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 55,
        y: [-27, -32],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 57,
        y: [-27, -32],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 59,
        y: [-27, -32],
        z: [33, 81],
      },
    ],
  },
  {
    username: "Notch_4",
    axeChest: [43, -39, 30],
    lootChest: [41, -39, 30],
    skipAge: true,
    dig: true,
    sell: false,
    place: true,
    zones: [
      {
        main: "z",
        facing: "east",
        x: 25,
        y: [-34, -39],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 27,
        y: [-34, -39],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 29,
        y: [-34, -39],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 31,
        y: [-34, -39],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 33,
        y: [-34, -39],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 35,
        y: [-34, -39],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 37,
        y: [-34, -39],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 39,
        y: [-34, -39],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 41,
        y: [-34, -39],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 43,
        y: [-34, -39],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 45,
        y: [-34, -39],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 47,
        y: [-34, -39],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 49,
        y: [-34, -39],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 51,
        y: [-34, -39],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 53,
        y: [-34, -39],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 55,
        y: [-34, -39],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 57,
        y: [-34, -39],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 59,
        y: [-34, -39],
        z: [33, 81],
      },
    ],
  },
  {
    username: "Notch_5",
    axeChest: [43, -46, 30],
    lootChest: [41, -46, 30],
    skipAge: true,
    dig: true,
    sell: false,
    place: true,
    zones: [
      {
        main: "z",
        facing: "east",
        x: 25,
        y: [-41, -46],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 27,
        y: [-41, -46],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 29,
        y: [-41, -46],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 31,
        y: [-41, -46],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 33,
        y: [-41, -46],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 35,
        y: [-41, -46],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 37,
        y: [-41, -46],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 39,
        y: [-41, -46],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 41,
        y: [-41, -46],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 43,
        y: [-41, -46],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 45,
        y: [-41, -46],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 47,
        y: [-41, -46],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 49,
        y: [-41, -46],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 51,
        y: [-41, -46],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 53,
        y: [-41, -46],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 55,
        y: [-41, -46],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 57,
        y: [-41, -46],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 59,
        y: [-41, -46],
        z: [33, 81],
      },
    ],
  },
  {
    username: "Notch_6",
    axeChest: [43, -53, 30],
    lootChest: [41, -53, 30],
    skipAge: true,
    dig: true,
    sell: false,
    place: true,
    zones: [
      {
        main: "z",
        facing: "east",
        x: 25,
        y: [-48, -53],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 27,
        y: [-48, -53],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 29,
        y: [-48, -53],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 31,
        y: [-48, -53],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 33,
        y: [-48, -53],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 35,
        y: [-48, -53],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 37,
        y: [-48, -53],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 39,
        y: [-48, -53],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 41,
        y: [-48, -53],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 43,
        y: [-48, -53],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 45,
        y: [-48, -53],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 47,
        y: [-48, -53],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 49,
        y: [-48, -53],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 51,
        y: [-48, -53],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 53,
        y: [-48, -53],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 55,
        y: [-48, -53],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "east",
        x: 57,
        y: [-48, -53],
        z: [33, 81],
      },
      {
        main: "z",
        facing: "west",
        x: 59,
        y: [-48, -53],
        z: [33, 81],
      },
    ],
  },
];

let count = 0;

const main = async () => {
  for (const bot of bots) {
    const worker = new Worker("./bot.js", {
      workerData: bot,
    });

    worker.on("message", ({ addCount }) => (count += addCount));
    console.log(count);
  }
};

main();
