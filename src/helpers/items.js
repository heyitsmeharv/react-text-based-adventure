// images -- https://game-icons.net/
import Boots from "../resources/images/boots.png";
import Breastplate from "../resources/images/breastplate.png";
import BroadSword from "../resources/images/broadsword.png";
import Cape from "../resources/images/cape.png";
import CapeArmour from "../resources/images/cape-armor.png";
import ChestArmour from "../resources/images/chest-armor.png";
import CowboyBoots from "../resources/images/cowboy-boot.png";
import DorsalScale from "../resources/images/dorsal-scales.png";
import DwarfHelmet from "../resources/images/dwarf-helmet.png";
import Fedora from "../resources/images/fedora.png";
import FireAxe from "../resources/images/fire-axe.png";
import FlowerHat from "../resources/images/flower-hat.png";
import Gloves from "../resources/images/gloves.png";
import HealthPotion from "../resources/images/health-potion.png";
import Key from "../resources/images/skeleton-key.png";
import LegArmour from "../resources/images/leg-armor.png";
import LockPick from "../resources/images/lockpicks.png";
import MailedFist from "../resources/images/mailed-fist.png";
import SpikedShoulderArmour from "../resources/images/spiked-shoulder-armor.png";
import TrenchSpade from "../resources/images/trench-spade.png";
import WarlordHelmet from "../resources/images/warlord-helmet.png";

export const Items = [
  {
    name: `Sword`,
    image: BroadSword,
    slot: 'weapon',
    description: `Increases your strength by +2`,
    statUpgrade: { strength: 2, agility: 0 },
    taken: false
  },
  {
    name: `Boots`,
    image: Boots,
    slot: 'boots',
    description: `Increases your agility by +2`,
    statUpgrade: { strength: 0, agility: 2 },
    taken: false
  },
  {
    name: `Breastplate`,
    image: Breastplate,
    slot: 'chest',
    description: `Increases your strength by +4`,
    statUpgrade: { strength: 0, agility: 4 },
    taken: false
  },
  {
    name: `Cape`,
    image: Cape,
    slot: 'cape',
    description: `Increases your agility by +2`,
    statUpgrade: { strength: 0, agility: 2 },
    taken: false
  },
  {
    name: `Cape Armour`,
    image: CapeArmour,
    slot: 'cape',
    description: `Increases your agility by +5`,
    statUpgrade: { strength: 0, agility: 5 },
    taken: false
  },
  {
    name: `Chest Armour`,
    image: ChestArmour,
    slot: 'chest',
    description: `Increases your strength by +2`,
    statUpgrade: { strength: 2, agility: 0 },
    taken: false
  },
  {
    name: `Cowboy Boots`,
    image: CowboyBoots,
    slot: 'boots',
    description: `Increases your agility by +1`,
    statUpgrade: { strength: 0, agility: 1 },
    taken: false
  },
  {
    name: `Dorsal Scale Shoulders`,
    image: DorsalScale,
    slot: 'shoulders',
    description: `Increases your strength by +5`,
    statUpgrade: { strength: 5, agility: 0 },
    taken: false
  },
  {
    name: `Dwarf Helmet`,
    image: DwarfHelmet,
    slot: 'helmet',
    description: `Increases your strength by +3`,
    statUpgrade: { strength: 3, agility: 0 },
    taken: false
  },
  {
    name: `Fedora`,
    image: Fedora,
    slot: 'helmet',
    description: `Increases your strength by +1`,
    statUpgrade: { strength: 1, agility: 0 },
    taken: false
  },
  {
    name: `Fire Axe`,
    image: FireAxe,
    description: `Increases your strength by +2`,
    slot: 'weapon',
    statUpgrade: { strength: 2, agility: 0 },
    taken: false
  },
  {
    name: `Flower Hat`,
    image: FlowerHat,
    description: `Increases your strength by +1`,
    slot: 'helmet',
    statUpgrade: { strength: 1, agility: 0 },
    taken: false
  },
  {
    name: `Gloves`,
    image: Gloves,
    slot: 'gloves',
    description: `Increases your agility by +1`,
    statUpgrade: { strength: 0, agility: 1 },
    taken: false
  },
  {
    name: `Health Potion`,
    image: HealthPotion,
    description: `Consume for 25hp`,
    slot: 'consumable',
    heal: 25,
    taken: false
  },
  {
    name: `Key`,
    image: Key,
    slot: 'usable',
    description: `Will unlock a locked door`,
    unlockDoor: true,
    taken: false
  },
  {
    name: `Leg Armour`,
    image: LegArmour,
    slot: 'legs',
    statUpgrade: { strength: 3, agility: 0 },
    description: `Increases your strength by +3`,
    unlockDoor: true,
    taken: false
  },
  {
    name: `LockPick`,
    image: LockPick,
    slot: 'usable',
    description: `Can have a chance of unlocking a door`,
    unlockDoor: true,
    taken: false
  },
  {
    name: `Mailed Fist`,
    image: MailedFist,
    slot: 'gloves',
    statUpgrade: { strength: 3, agility: 0 },
    description: `Increases your strength by +3`,
    unlockDoor: true,
    taken: false
  },
  {
    name: `Spiked Shoulder Armour`,
    image: SpikedShoulderArmour,
    slot: 'shoulders',
    statUpgrade: { strength: 5, agility: 0 },
    description: `Increases your strength by +5`,
    unlockDoor: true,
    taken: false
  },
  {
    name: `Trench Spade`,
    image: TrenchSpade,
    slot: 'weapon',
    statUpgrade: { strength: 2, agility: 0 },
    description: `Increases your strength by +2`,
    unlockDoor: true,
    taken: false
  },
  {
    name: `Warlord Helmet`,
    image: WarlordHelmet,
    slot: 'helmet',
    statUpgrade: { strength: 5, agility: 0 },
    description: `Increases your strength by +5`,
    unlockDoor: true,
    taken: false
  },
];