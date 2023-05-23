import React, { useEffect, useState, useRef } from "react";
import "./App.css";

// pages
import Start from "./components/Start/Start";

// components
import Room from "./components/Room/Room";
import Inventory from "./components/Inventory/Inventory";
import Character from "./components/Character/Character";
import Map from './components/Map/Map';

// images
import Stats from "./resources/images/histogram.png";
import Position from "./resources/images/position-marker.png";

// helpers
import { generateRooms } from "./helpers/setup";

const App = () => {
  const inputRef = useRef();
  const [panelActive, setPanelActive] = useState(false);
  const [mapActive, setMapActive] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [map, setMap] = useState(null);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [playerStats, setPlayerStats] = useState([{ health: 100, strength: 2, agility: 3, attackPower: 5 }]);
  const [playerInventory, setPlayerInventory] = useState([]);
  const [equippedItems, setEquippedItems] = useState([{ helmet: null, cape: null, shoulders: null, weapon: null, chest: null, gloves: null, boots: null, legs: null, ring: null }]);
  const [flash, setFlash] = useState({ slot: '', value: false });
  const [takeDamage, setTakeDamage] = useState(false);

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
    map[currentRoom.id].explored = true;
    setCurrentRoom(map[currentRoom.id + 1]);
    whereAmI();
  }

  // the player will have a random chance of taking damage.
  const handleLootTheRoom = () => {
    const unlucky = randomChance(0.2);
    if (unlucky) {
      const copyPlayerStats = playerStats;
      copyPlayerStats[0].health = copyPlayerStats[0].health - 10;
      setPlayerStats(copyPlayerStats);
      setTakeDamage(true);
      setTimeout(() => {
        setTakeDamage(false);
      }, 500);
    }
    handleNavigate();
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
    const isEquipped = equippedItems.some(i => i[item.slot]?.image === item.image);

    if (!isEquipped) {
      let swappedOutItem;
      const equippedItemsCopy = equippedItems;
      switch (item.slot) {
        case 'helmet':
          swappedOutItem = equippedItemsCopy[0].helmet;
          equippedItemsCopy[0].helmet = item;
          break;
        case 'cape':
          swappedOutItem = equippedItemsCopy[0].cape;
          equippedItemsCopy[0].cape = item;
          break;
        case 'shoulders':
          swappedOutItem = equippedItemsCopy[0].shoulders;
          equippedItemsCopy[0].shoulders = item;
          break;
        case 'weapon':
          swappedOutItem = equippedItemsCopy[0].weapon;
          equippedItemsCopy[0].weapon = item;
          break;
        case 'chest':
          swappedOutItem = equippedItemsCopy[0].chest;
          equippedItemsCopy[0].chest = item;
          break;
        case 'gloves':
          swappedOutItem = equippedItemsCopy[0].gloves;
          equippedItemsCopy[0].gloves = item;
          break;
        case 'boots':
          swappedOutItem = equippedItemsCopy[0].boots;
          equippedItemsCopy[0].boots = item;
          break;
        case 'legs':
          swappedOutItem = equippedItemsCopy[0].legs;
          equippedItemsCopy[0].legs = item;
          break;
        case 'ring':
          swappedOutItem = equippedItemsCopy[0].ring;
          equippedItemsCopy[0].ring = item;
          break;
        default: ;
      }

      setEquippedItems([...equippedItems], equippedItemsCopy);
      console.log('playerStats', playerStats);

      if (swappedOutItem) {
        // remove stats from previous equipped item
        let prevItem;
        map.find(i => {
          return i.items.forEach(item => {
            if (item.image === swappedOutItem.image) {
              prevItem = item;
            }
          });
        });

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

  const toggleMap = () => {
    setMapActive(!mapActive);
  };

  return (
    <>
      {currentRoom && currentRoom.name === 'Start' ?
        <Start inputRef={inputRef} handleStartGame={handleStartGame} />
        : null
      }
      {currentRoom && currentRoom.name !== 'Start' &&
        <div className={`main-container ${takeDamage ? 'flash' : ''}`}>
          <Room
            room={map[currentRoom.id]}
            description={map[currentRoom.id].description}
            items={map[currentRoom.id].items}
            enemies={map[currentRoom.id].enemies}
            inventory={playerInventory}
            onInteract={handleInteract}
            onNavigate={handleNavigate}
            onLootRoom={handleLootTheRoom}
          />
          <button className="toggle-button-inventory" onClick={togglePanel}>
            <img alt='inventory' className='inventory-icon' src={Stats} />
          </button>
          <button className="toggle-button-map" onClick={toggleMap}>
            <img alt='map' className='map-icon' src={Position} />
          </button>
          <div className={`panel ${panelActive ? 'active' : ''}`}>
            <Character playerName={playerName} playerStats={playerStats} equippedItems={equippedItems} flash={flash} />
            <Inventory items={playerInventory} equippedItems={equippedItems} onUse={handleUse} />
          </div>
          <div className={`map ${mapActive ? 'active' : ''}`}>
            <Map map={map} currentRoom={map[currentRoom.id]} />
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