import { Rooms } from './rooms';
import { Items } from './items';
import { Enemies } from './enemies';

// used for generating the map and placing items randomly in rooms.
export const generateRooms = randomChance => {
  const rooms = [
    {
      id: 0,
      name: `Start`,
      description: `This is the starting room`,
      items: [],
      enemies: [],
      locked: false
    }
  ];
  const listOfPotentialRooms = Rooms;
  const items = Items;
  const enemies = Enemies;

  // let's loop through all of the rooms available
  for (let i = 0; i < listOfPotentialRooms.length; i++) {

    // we want to keep randomly selecting a room which hasn't been added yet
    let randomRoom = listOfPotentialRooms[Math.floor(Math.random() * listOfPotentialRooms.length)];

    // we don't want duplicate rooms added, so let's check to see if it's already been added
    if (!rooms.some(e => e.name === randomRoom.name)) {
      // randomRoom = Rooms[Math.floor(Math.random() * Rooms.length)];

      // make the room object we want to add
      const room = {
        id: i + 1,
        name: `${randomRoom.name}`,
        description: `${randomRoom.description}`,
        items: [],
        enemies: [],
        locked: randomRoom.locked
      };

      // Add random items to the room.
      const randomItem = items[Math.floor(Math.random() * 21)];
      const itemSpawnChance = randomChance(0.5);

      // check to see if the item has already been added to the game
      // unless it's a consumable or usable
      for (let x = 0; x < items.length; x++) {
        const itemAlreadyExists = rooms.some(r => {
          return r[x]?.items.includes(randomItem);
        });
        if (!itemAlreadyExists) {
          if (itemSpawnChance) {
            if (!room.items.includes(randomItem)) {
              room.items.push(randomItem);
            }
          }
        }
      }

      // Add enemies to the room
      const randomEnemy = enemies[Math.floor(Math.random() * 7)];
      const enemiesSpawnChance = randomChance(0.2);
      for (let x = 0; x < enemies.length; x++) {
        if (enemiesSpawnChance) {
          if (!room.enemies.includes(randomEnemy)) {
            room.enemies.push(randomEnemy);
          }
        }
      }

      rooms.push(room);
    } else {
      // find a room that doesn't exist;
      let room;

      // loop through the whole array
      for (let x = 0; x < listOfPotentialRooms.length; x++) {
        // let's try and find a room that doesn't exist in the array
        if (!rooms.some(e => e.name === listOfPotentialRooms[x].name)) {
          // we've found it!
          room = listOfPotentialRooms[x];
          // let's add an id (make sure it's not already assigned by adding it to the end of the array)
          room.id = rooms[rooms.length - 1].id + 1;
          // select a random item
          const randomItem = items[Math.floor(Math.random() * 21)];
          // add random items to the room (implement a spawn chance).
          const itemSpawnChance = randomChance(0.5);
          for (let x = 0; x < items.length; x++) {
            const itemAlreadyExists = rooms.some(r => {
              return r[x]?.items.includes(randomItem);
            });
            if (!itemAlreadyExists) {
              if (itemSpawnChance) {
                // we don't want to place duplicate items into the room
                if (!room.items.includes(randomItem)) {
                  room.items.push(randomItem);
                }
              }
            }
          }
          // Add enemies to the room
          const randomEnemy = enemies[Math.floor(Math.random() * 7)];
          const enemiesSpawnChance = randomChance(0.2);
          for (let x = 0; x < enemies.length; x++) {
            if (enemiesSpawnChance) {
              if (!room.enemies.includes(randomEnemy)) {
                room.enemies.push(randomEnemy);
              }
            }
          }
          rooms.push(room);
        }
      }
    }
  }

  // add in the end room
  const end = {
    id: rooms[rooms.length - 1].id + 1,
    name: `End`,
    description: `This is the end room`,
    items: [],
    enemies: [],
    locked: false
  }

  rooms.push(end);

  console.log(rooms);
  return rooms;
};
