import React, { useEffect, useState, useRef } from "react";
import "./App.css";

// pages
import Start from "./components/Start/Start";

// components
import Room from "./components/Room/Room";
import Inventory from "./components/Inventory/Inventory";
import Character from "./components/Character/Character";

// images
import Person from "./resources/images/person.png";

// helpers
import { generateRooms } from "./helpers/setup";

const App = () => {
  const inputRef = useRef();
  const [panelActive, setPanelActive] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [map, setMap] = useState(null);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [playerStats, setPlayerStats] = useState([{ health: 100, strength: 10, agility: 5, attackPower: 5 }]);
  const [playerInventory, setPlayerInventory] = useState([]);
  const [equippedItems, setEquippedItems] = useState([{ helmet: null, cape: null, shoulders: null, weapon: null, chest: null, gloves: null, boots: null, legs: null, ring: null }]);
  const [flash, setFlash] = useState({ slot: '', value: false });

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
    map[currentRoom.id].items.taken = true;
    setPlayerInventory([...playerInventory, item]);
  };

  // used for when the player interacts with the item.
  const handleUse = item => {
    // TODO: MAKE SURE STATS DECREASE WHEN SWAPPING ITEMS
    console.log('used item', item);
    // check if item isn't already equipped
    const isEquipped = equippedItems.some(i => i[item.slot] === item.image);

    if (!isEquipped) {
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
      console.log('playerStats', playerStats);
      // upgrade stats from item
      if (item.statUpgrade) {
        const playerStatsCopy = playerStats;
        playerStatsCopy[0].strength += item.statUpgrade.strength;
        playerStatsCopy[0].agility += item.statUpgrade.agility;
        setPlayerStats([...playerStats], playerStatsCopy)
      }
      console.log('new playerStats', playerStats);
    } else {
      console.log(`you already have that item equipped`);
      setFlash({ slot: item.slot, value: true });

      setTimeout(() => {
        setFlash({ slot: '', value: false });
      }, 500);
    }
  };

  const togglePanel = () => {
    setPanelActive(!panelActive);
  };

  return (
    <>
      {currentRoom && currentRoom.name === 'Start' ?
        <Start inputRef={inputRef} handleStartGame={handleStartGame} />
        : null
      }
      {currentRoom && (currentRoom.name !== 'Start' || currentRoom.name !== 'Start') &&
        <div className="main-container">
          <div className="game-container">
            <Room
              room={map[currentRoom.id]}
              description={map[currentRoom.id].description}
              items={map[currentRoom.id].items}
              inventory={playerInventory}
              onInteract={handleInteract}
              onNavigate={handleNavigate}
            />
          </div>
          <div className={`panel ${panelActive ? 'active' : ''}`}>
            <button className="toggle-button" onClick={togglePanel}>
              <img alt='player' className='character-stat-icon' src={Person} />
            </button>
            <div className="character-container">
              <Character playerName={playerName} playerStats={playerStats} equippedItems={equippedItems} flash={flash} />
            </div>
            <div className="inventory-container">
              <Inventory items={playerInventory} equippedItems={equippedItems} onUse={handleUse} />
            </div>
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