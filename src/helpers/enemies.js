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
    stats: { health: 20, strength: 2, agility: 2, attackPower: 1 },
    image: Guards
  },
  {
    name: `Executioner`,
    description: `His face is covered with a black hood and he's wielding an axe`,
    stats: { health: 20, strength: 2, agility: 2, attackPower: 1 },
    image: Executioner
  },
  {
    name: `Rat`,
    description: `Smelly vermin but can bite when cornered`,
    stats: { health: 20, strength: 2, agility: 2, attackPower: 1 },
    image: Rat
  },
  {
    name: `Prisoner`,
    description: `Will betray you when the opportunity presents itself`,
    stats: { health: 20, strength: 2, agility: 2, attackPower: 1 },
    image: Prisoner
  },
  {
    name: `Queen`,
    description: `Has as much bling as 2 chainz`,
    stats: { health: 200, strength: 20, agility: 50, attackPower: 10 },
    image: Queen
  },
  {
    name: `Skeleton`,
    description: `Has as much bling as 2 chainz`,
    stats: { health: 200, strength: 20, agility: 50, attackPower: 10 },
    image: Skeleton
  },
  {
    name: `Ghost`,
    description: `Spooky Ghost`,
    stats: { health: 200, strength: 20, agility: 50, attackPower: 10 },
    image: Ghost
  },
];