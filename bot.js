const mineflayer = require("mineflayer");
const { Vec3 } = require("vec3");
const pathfinder = require("mineflayer-pathfinder").pathfinder;
const Movements = require("mineflayer-pathfinder").Movements;
const { GoalNear, GoalGetToBlock } = require("mineflayer-pathfinder").goals;
const inventoryViewer = require("mineflayer-web-inventory");
const { parentPort, workerData } = require("node:worker_threads");

const { zones, username, axeChest, lootChest, skipAge, dig, sell, place } = workerData;

class Bot {
  constructor() {
    this.bot = mineflayer.createBot({
      host: "localhost",
      port: 1111,
      username: username,
      version: "1.19.4",
    });

    this.bot.loadPlugin(pathfinder);

    // inventoryViewer(this.bot);

    this.defaultMove = new Movements(this.bot);
    this.defaultMove.canDig = false;

    this.bot.on("spawn", async () => {
      this.bot.chat("привет");
      this.farming();
    });
  }
}

Bot.prototype.farming = async function () {
  this.bot.pathfinder.setMovements(this.defaultMove);
  await this.bot.waitForChunksToLoad();
  while (true) {
    for (const zone of zones) {
      console.log("\n\n", zone);
      await this.manageAxe();
      await this.break(zone);
      await this.place(zone);
      // await this.sell();
      await this.manageLoot();
    }
    await new Promise((r) => setTimeout(r, 2000));
  }
};

Bot.prototype.break = async function (zone) {
  if (!dig) return;
  console.log("zone break", zone.facing);

  const axe = this.bot.inventory.findInventoryItem(796, null);
  if (axe && axe.slot !== 36) {
    await this.bot.moveSlotItem(axe.slot, 36);
  }

  for (let m = zone[zone.main][0]; m <= zone[zone.main][1]; m++) {
    for (let y = zone.y[0]; y >= zone.y[1]; y--) {
      const axeIsBroken = axe && axe.maxDurability - axe.nbt.value.Damage.value <= 1;
      if (!axeIsBroken) this.bot.setQuickBarSlot(0);
      else this.bot.setQuickBarSlot(1);

      const block = this.bot.blockAt(new Vec3(zone.main === "x" ? m : zone.x, y, zone.main === "z" ? m : zone.z));
      if (block?.name === "cocoa") {
        if (block?._properties?.age !== 2 && skipAge === false) continue;
        await this.bot.pathfinder.goto(new GoalNear(zone.main === "x" ? m : zone.x, zone.y[1], zone.main === "z" ? m : zone.z, 2)).catch((e) => console.log(e.message));
        // console.log("dig", zone.main === "x" ? m : zone.x, y, zone.main === "z" ? m : zone.z);
        await this.bot.dig(block, true);
      }
    }
  }
};

Bot.prototype.place = async function (zone) {
  if (!place) return;
  console.log("zone place", zone.facing);

  const beans = this.bot.inventory.items().filter((i) => i.type === 899);
  if (!beans.length) {
    console.log("В инвентаре нет какао бобов");
    // continue;
    return;
  }

  this.bot.setQuickBarSlot(2);

  for (let m = zone[zone.main][1]; m >= zone[zone.main][0]; m--) {
    for (let y = zone.y[0]; y >= zone.y[1]; y--) {
      const block = this.bot.blockAt(new Vec3(zone.main === "x" ? m : zone.x, y, zone.main === "z" ? m : zone.z));
      if (block?.name === "air") {
        let xv = zone.facing === "east" ? -1 : zone.facing === "west" ? 1 : 0;
        let zv = zone.facing === "north" ? 1 : zone.facing === "south" ? -1 : 0;

        await this.bot.pathfinder
          .goto(new GoalNear(zone.main === "x" ? m + xv : zone.x + xv, zone.y[1], zone.main === "z" ? m + zv : zone.z + zv, 0))
          .catch((e) => console.log(e.message));
        // console.log("place", zone.main === "x" ? m : zone.x, y, zone.main === "z" ? m : zone.z);

        const [sBlock, facing] = await this.findSourceBlock(block, zone.facing);
        if (!sBlock || !facing) {
          console.log("not found block");
          continue;
        }

        if (this.bot.inventory.slots[38]?.type !== 899) {
          const targetBeans = this.bot.inventory.items().find((i) => i.type === 899);
          if (!targetBeans) {
            console.log("Закончились бобы");
            continue;
          }
          await this.bot.moveSlotItem(targetBeans.slot, 38);
        }
        await this.bot.lookAt(sBlock.position, true);
        this.bot.placeBlock(block, facing).catch(() => {});
        await this.bot.waitForTicks(1);
      }
    }
  }
};

Bot.prototype.sell = async function () {
  if (!sell) return;
  console.log("zone sell");
};

Bot.prototype.findSourceBlock = async function (block, facing) {
  let xv = facing === "east" ? 1 : facing === "west" ? -1 : 0;
  let zv = facing === "north" ? -1 : facing === "south" ? 1 : 0;

  const sourceBlock = this.bot.blockAt(new Vec3(block.position.x + xv, block.position.y, block.position.z + zv));
  if (!sourceBlock || sourceBlock.name !== "jungle_log") return [null, null];

  return [sourceBlock, { x: 0 - xv, y: 0, z: 0 - zv }];
};

Bot.prototype.manageAxe = async function () {
  const axe = this.bot.inventory.findInventoryItem(796, null);
  const axeIsBroken = axe && axe.maxDurability - axe.nbt.value.Damage.value <= 100;
  if (!axe || axeIsBroken) {
    await this.bot.pathfinder.goto(new GoalGetToBlock(...axeChest)).catch((e) => console.log(e.message));
    const chestBlock = this.bot.blockAt(new Vec3(...axeChest));
    if (!chestBlock) {
      console.log("Сундука на", axeChest, "нет");
      return false;
    }

    const chest = await this.bot.openChest(chestBlock).catch((e) => console.log(e.message));

    if (axeIsBroken) {
      await chest.deposit(796, null, 1).catch((e) => console.log(e));
      console.log(`Положил топор в сундук`);
    }
    const targetAxe = chest.containerItems().find((a) => a.type === 796 && a.maxDurability - a.nbt.value.Damage.value > 100);
    if (!targetAxe) {
      console.log("В сундуке закончились топоры");
      return false;
    }
    await chest.withdraw(796, null, 1).catch((e) => console.log(e));

    // const slotItem = this.bot.inventory.slots[0];

    // if (slotItem?.type) this.bot.toss(slotItem.type, null, slotItem.count);
    // await this.bot.simpleClick(targetAxe.slot, 0, 0);
    // await this.bot.simpleClick(0, 0, 0);

    console.log("Взял топор");
    chest.close();
    return true;
  }
};

Bot.prototype.manageLoot = async function () {
  const bobsCount = this.bot.inventory.count(899);

  if (bobsCount) {
    await this.bot.pathfinder.goto(new GoalGetToBlock(...lootChest)).catch((e) => console.log(e.message));
    const chestBlock = this.bot.blockAt(new Vec3(...lootChest));
    if (!chestBlock) {
      console.log("Сундука на", axeChest, "нет");
      return false;
    }
    const chest = await this.bot.openChest(chestBlock);

    await chest.deposit(899, null, bobsCount).catch((e) => console.log(e.message));
    parentPort.emit("message", { addCount: bobsCount });
    console.log("Положил бобы");
    chest.close();
    return true;
  }
};

new Bot();
