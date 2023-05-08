import React, { useEffect, useState } from "react";

// components
import Room from "./components/Room/Room";
import Inventory from "./components/Inventory/Inventory";

// helpers
import { generateRooms } from "./helpers/setup";

const App = () => {
  const [map, setMap] = useState(null);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [playerStats, setPlayerStats] = useState({ health: 100, strength: 10, agility: 5, attackPower: 5 });
  const [playerInventory, setPlayerInventory] = useState([]);
  const [equippedItems, setEquippedItems] = useState([]);

  // used for debugging.
  const whereAmI = () => {
    console.log('You Are =>', { size: map.length, room: map[currentRoom.id].id });
  };

  // used to determine item drops and combat.
  const randomChance = probability => {
    return Math.random() < probability;
  };

  // on mount we want to trigger the setup of the game.
  useEffect(() => {
    const gen = generateRooms(randomChance);
    setMap(gen);
    setCurrentRoom(gen[0]);
  }, []);

  const handleNavigate = () => {
    setCurrentRoom(map[currentRoom.id + 1]);
    whereAmI();
  }

  // used to proceed through the next room.
  const handleInteract = item => {
    setPlayerInventory([...playerInventory, item]);
  };

  // used for when the player interacts with the item.
  const handleUse = item => {
    console.log('used item', item);
  };

  return (
    <>
      {currentRoom &&
        <>
          <Room
            room={map[currentRoom]}
            description={map[currentRoom.id].description}
            items={map[currentRoom.id].items}
            inventory={playerInventory}
            onInteract={handleInteract}
            onNavigate={handleNavigate}
          />
          <Inventory items={playerInventory} onUse={handleUse} />
        </>
      }
    </>
  );
};

export default App;