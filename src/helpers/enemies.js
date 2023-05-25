// images
import Executioner from '../resources/images/executioner-hood.png';
import Queen from '../resources/images/cleopatra.png';
import Rat from '../resources/images/rat.png';
import Prisoner from '../resources/images/prisoner.png';
import Skeleton from '../resources/images/skeleton.png';
import Guards from '../resources/images/guards.png';
import Ghost from '../resources/images/ghost.png';

export const Enemies = [
  {
    name: `Guards`,
    description: `His name is Micheal and he has two kids`,
    stats: { maxHealth: 20, health: 20, strength: 10, agility: 6, defence: 15 },
    killed: false,
    image: Guards
  },
  {
    name: `Executioner`,
    description: `His face is covered with a black hood and he's wielding an axe`,
    stats: { maxHealth: 40, health: 40, strength: 15, agility: 8, defence: 20 },
    killed: false,
    image: Executioner
  },
  {
    name: `Rat`,
    description: `Smelly vermin but can bite when cornered`,
    stats: { maxHealth: 5, health: 5, strength: 5, agility: 4, defence: 5 },
    killed: false,
    image: Rat
  },
  {
    name: `Prisoner`,
    description: `Will betray you when the opportunity presents itself`,
    stats: { maxHealth: 10, health: 10, strength: 8, agility: 5, defence: 10 },
    killed: false,
    image: Prisoner
  },
  {
    name: `Queen`,
    description: `Has as much bling as 2 chainz`,
    stats: { maxHealth: 50, health: 50, strength: 20, agility: 10, defence: 20 },
    killed: false,
    image: Queen
  },
  {
    name: `Skeleton`,
    description: `Has as much bling as 2 chainz`,
    stats: { maxHealth: 10, health: 10, strength: 10, agility: 4, defence: 15 },
    killed: false,
    image: Skeleton
  },
  {
    name: `Ghost`,
    description: `Spooky Ghost`,
    stats: {
      maxHealth: 20, health: 20, strength: 12, agility: 7, defence: 20
    },
    killed: false,
    image: Ghost
  },
];