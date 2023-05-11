import React, { useEffect, useState, useRef } from "react";
import "./App.css";

// pages
import Start from "./components/Start/Start";

// components
import Room from "./components/Room/Room";
import Inventory from "./components/Inventory/Inventory";
import Character from "./components/Character/Character";

// helpers
import { generateRooms } from "./helpers/setup";

const App = () => {
  const inputRef = useRef();
  const [playerName, setPlayerName] = useState('');
  const [map, setMap] = useState(null);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [playerStats, setPlayerStats] = useState({ health: 100, strength: 10, agility: 5, attackPower: 5 });
  const [playerInventory, setPlayerInventory] = useState([]);
  const [equippedItems, setEquippedItems] = useState([{ helmet: null, cape: null, shoulders: null, weapon: null, chest: null, gloves: null, boots: null, legs: null, ring: null }]);

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

  const handleStartGame = () => {
    if (!inputRef.current.value) {
      setPlayerName('Mystery Person');
    } else {
      setPlayerName(inputRef.current.value)
    }
    handleNavigate();
  }

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

    const equippedItemsCopy = equippedItems;

    switch (item.slot) {
      case 'helmet':
        equippedItemsCopy[0].helmet = item.image;
        break;
      case 'cape':
        equippedItemsCopy[0].cape = item.image;
        break;
      case 'shoulders':
        equippedItemsCopy[0].shoulders = item.image;
        break;
      case 'weapon':
        equippedItemsCopy[0].weapon = item.image;
        break;
      case 'chest':
        equippedItemsCopy[0].chest = item.image;
        break;
      case 'gloves':
        equippedItemsCopy[0].gloves = item.image;
        break;
      case 'boots':
        equippedItemsCopy[0].boots = item.image;
        break;
      case 'legs':
        equippedItemsCopy[0].legs = item.image;
        break;
      case 'ring':
        equippedItemsCopy[0].ring = item.image;
        break;
      default: ;
    }

    setEquippedItems([...equippedItems], equippedItemsCopy);
  };

  return (
    <>
      {currentRoom && currentRoom.name === 'Start' ?
        <Start inputRef={inputRef} handleStartGame={handleStartGame} />
        : null
      }
      {currentRoom && (currentRoom.name !== 'Start' || currentRoom.name !== 'Start') &&
        <div className="main-container">
          <div className="game">
            <Room
              room={map[currentRoom.id]}
              description={map[currentRoom.id].description}
              items={map[currentRoom.id].items}
              inventory={playerInventory}
              onInteract={handleInteract}
              onNavigate={handleNavigate}
            />
          </div>
          <div className="character">
            <Character playerName={playerName} playerStats={playerStats} equippedItems={equippedItems} />
          </div>
          <div className="inventory">
            <Inventory items={playerInventory} onUse={handleUse} />
          </div>
        </div>
      }
      {currentRoom && currentRoom.name === 'End' ?
        <h2>End</h2>
        : null
      }
    </>
  );
};

export default App;