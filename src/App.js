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
  const [playerStats, setPlayerStats] = useState([{ health: 100, strength: 2, agility: 3, attackPower: 5 }]);
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
    console.log('used item', item);
    // check if item isn't already equipped
    const isEquipped = equippedItems.some(i => i[item.slot] === item.image);

    if (!isEquipped) {
      let swappedOutItem;
      const equippedItemsCopy = equippedItems;
      switch (item.slot) {
        case 'helmet':
          swappedOutItem = equippedItemsCopy[0].helmet;
          equippedItemsCopy[0].helmet = item.image;
          break;
        case 'cape':
          swappedOutItem = equippedItemsCopy[0].cape;
          equippedItemsCopy[0].cape = item.image;
          break;
        case 'shoulders':
          swappedOutItem = equippedItemsCopy[0].shoulders;
          equippedItemsCopy[0].shoulders = item.image;
          break;
        case 'weapon':
          swappedOutItem = equippedItemsCopy[0].weapon;
          equippedItemsCopy[0].weapon = item.image;
          break;
        case 'chest':
          swappedOutItem = equippedItemsCopy[0].chest;
          equippedItemsCopy[0].chest = item.image;
          break;
        case 'gloves':
          swappedOutItem = equippedItemsCopy[0].gloves;
          equippedItemsCopy[0].gloves = item.image;
          break;
        case 'boots':
          swappedOutItem = equippedItemsCopy[0].boots;
          equippedItemsCopy[0].boots = item.image;
          break;
        case 'legs':
          swappedOutItem = equippedItemsCopy[0].legs;
          equippedItemsCopy[0].legs = item.image;
          break;
        case 'ring':
          swappedOutItem = equippedItemsCopy[0].ring;
          equippedItemsCopy[0].ring = item.image;
          break;
        default: ;
      }

      setEquippedItems([...equippedItems], equippedItemsCopy);
      console.log('playerStats', playerStats);

      if (swappedOutItem) {
        // remove stats from previous equipped item
        let prevItem;
        map.find(i => {
          i.items.forEach(item => {
            if (item.image === swappedOutItem) {
              prevItem = item;
            }
          });
        });
        console.log(prevItem);
        if (prevItem?.statUpgrade) {
          const playerStatsCopy = playerStats;
          playerStatsCopy[0].strength = playerStatsCopy[0].strength - prevItem.statUpgrade.strength;
          playerStatsCopy[0].agility = playerStatsCopy[0].agility - prevItem.statUpgrade.agility;
          setPlayerStats([...playerStats], playerStatsCopy)
        }
      }

      // upgrade stats from item
      if (item.statUpgrade) {
        const playerStatsCopy = playerStats;
        playerStatsCopy[0].strength = playerStatsCopy[0].strength + item.statUpgrade.strength;
        playerStatsCopy[0].agility = playerStatsCopy[0].agility + item.statUpgrade.agility;
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
            <Character playerName={playerName} playerStats={playerStats} equippedItems={equippedItems} flash={flash} />
            <Inventory items={playerInventory} equippedItems={equippedItems} onUse={handleUse} />
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