import React, { useEffect, useState, useRef } from "react";
import "./App.css";

// pages
import Start from "./components/Start/Start";
import GameOver from "./components/GameOver/GameOver";

// components
import Room from "./components/Room/Room";
import Inventory from "./components/Inventory/Inventory";
import Character from "./components/Character/Character";

// images
import Stats from "./resources/images/histogram.png";

// helpers
import { generateRooms } from "./helpers/setup";

const App = () => {
  const inputRef = useRef();
  const [panelActive, setPanelActive] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [map, setMap] = useState(null);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [playerStats, setPlayerStats] = useState([{ health: 100, strength: 5, defence: 5, agility: 3 }]);
  const [playerInventory, setPlayerInventory] = useState([]);
  const [equippedItems, setEquippedItems] = useState([{ helmet: null, cape: null, shoulders: null, weapon: null, chest: null, gloves: null, boots: null, legs: null, ring: null }]);
  const [flash, setFlash] = useState({ slot: '', value: false });
  const [takeDamage, setTakeDamage] = useState(false);
  const [isLoot, setIsLoot] = useState(false);
  const [onOpenLoot, setOnOpenLoot] = useState(false);
  const [lootedRoom, setLootedRoom] = useState(false);
  const [escapeAttempt, setEscapeAttempt] = useState(false);
  const [dead, setDead] = useState(false);

  // used for debugging.
  const whereAmI = () => {
    console.log('You Are =>', { size: map.length, room: map[currentRoom.id].id });
  };


  // used to determine damage in combat
  const calculateDamage = (strength, defensePower) => {
    const damage = 2 * (strength / defensePower); // Calculate damage
    return Math.floor(damage); // Round down the damage value
  }

  // used to determine item drops and combat.
  const randomChance = probability => {
    return Math.random() < probability;
  };

  // on mount we want to trigger the setup of the game.
  useEffect(() => {
    const gen = generateRooms(randomChance);
    setMap(gen);
    setCurrentRoom(gen[0]);
  }, [dead]);

  const handleStartGame = () => {
    if (!inputRef.current.value) {
      setPlayerName('Mystery Person');
    } else {
      setPlayerName(inputRef.current.value)
    }
    handleNavigate();
  }

  const handleRestartGame = () => {
    setMap(null);
    setCurrentRoom(null);
    setPlayerStats([{ health: 100, strength: 5, defence: 5, agility: 3 }]);
    setPlayerInventory([]);
    setEquippedItems([{ helmet: null, cape: null, shoulders: null, weapon: null, chest: null, gloves: null, boots: null, legs: null, ring: null }]);
    setDead(false);
  }

  const handleNavigate = () => {
    map[currentRoom.id].explored = true;
    setCurrentRoom(map[currentRoom.id + 1]);
    setOnOpenLoot(false);
    setIsLoot(false);
    setLootedRoom(false);
    setEscapeAttempt(false);
    whereAmI();
  }

  // the player has a chance to evade any enemies
  // but will be punished if unsuccessful
  // chance to escape and dmg dependant on enemy
  const handleEscape = () => {
    if (!escapeAttempt) {
      const escapeChance = map[currentRoom.id].enemies[0].stats.agility;
      const damage = map[currentRoom.id].enemies[0].stats.strength;
      if (playerStats[0].agility > escapeChance) {
        handleNavigate();
      } else {
        const copyPlayerStats = playerStats;
        copyPlayerStats[0].health = copyPlayerStats[0].health - damage;
        setPlayerStats(copyPlayerStats);
        setTakeDamage(true);
        setTimeout(() => {
          setTakeDamage(false);
        }, 500);
      }
      setEscapeAttempt(true);
    }
  }

  // the player will take damage if there are no items.
  // prevent player from spamming this more than once.
  const handleLootTheRoom = () => {
    if (!lootedRoom) {
      if (map[currentRoom.id].items.length === 0) {
        const copyPlayerStats = playerStats;
        copyPlayerStats[0].health = copyPlayerStats[0].health - 10;
        setPlayerStats(copyPlayerStats);
        setTakeDamage(true);
        setTimeout(() => {
          setTakeDamage(false);
        }, 500);
      }
      setIsLoot(true);
      setLootedRoom(true);
    }
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

  // handle combat
  const handleAttack = () => {
    const escapeChance = map[currentRoom.id].enemies.reduce((accumulator, currentValue) => {
      return currentValue.stats.agility + accumulator;
    }, 0);
    const enemyDamage = map[currentRoom.id].enemies.reduce((accumulator, currentValue) => {
      return currentValue.stats.strength + accumulator;
    }, 0);
    const enemyDefence = map[currentRoom.id].enemies.reduce((accumulator, currentValue) => {
      return currentValue.stats.strength + accumulator;
    }, 0);
    console.log(escapeChance);
    let isPlayerTurn = playerStats[0].agility > escapeChance;
    if (isPlayerTurn) {
      let damage = calculateDamage(playerStats[0].strength, enemyDefence);
      const copyEnemyStats = map[currentRoom.id].enemies[0].stats;
      copyEnemyStats[0].health = copyEnemyStats[0].health - damage;

      damage = calculateDamage(enemyDamage, playerStats[0].defence);
      const copyPlayerStats = playerStats;
      copyPlayerStats[0].health = copyPlayerStats[0].health - damage;
      setPlayerStats(copyPlayerStats);
      setTakeDamage(true);
      setTimeout(() => {
        setTakeDamage(false);
      }, 500);

    } else {
      let damage = calculateDamage(enemyDamage, playerStats[0].defence);
      const copyPlayerStats = playerStats;
      copyPlayerStats[0].health = copyPlayerStats[0].health - damage;
      setPlayerStats(copyPlayerStats);
      setTakeDamage(true);
      setTimeout(() => {
        setTakeDamage(false);
      }, 500);

      damage = calculateDamage(playerStats[0].strength, enemyDefence);

      map[currentRoom.id].enemies.forEach((enemy, i) => {
        console.log(currentRoom);
        const copyCurrentRoom = currentRoom;
        const hp = enemy.stats.health - damage;
        copyCurrentRoom.enemies[i].stats.health = hp;
        setCurrentRoom(copyCurrentRoom);
        console.log(currentRoom);
      });
      console.log('map', map);
    }

    // check to see if the play has beaten the enemy
    const allEnemiesDead = map[currentRoom.id].enemies.every(enemy => enemy.stats.health <= 0);

    if (allEnemiesDead) {
      handleNavigate();
    }

    // did the player die??
    if (playerStats[0].health <= 0) {
      setDead(true);
    }

  };

  const onToggleLoot = () => {
    setOnOpenLoot(!onOpenLoot);
  }

  const togglePanel = () => {
    setPanelActive(!panelActive);
  };

  return (
    <>
      {!dead && currentRoom && currentRoom.name === 'Start' ?
        <Start inputRef={inputRef} handleStartGame={handleStartGame} />
        : null
      }
      {!dead && currentRoom && currentRoom.name !== 'Start' &&
        <div className={`main-container ${takeDamage ? 'takeDamage' : ''}`}>
          <Room
            map={map}
            room={map[currentRoom.id]}
            description={map[currentRoom.id].description}
            items={map[currentRoom.id].items}
            enemies={map[currentRoom.id].enemies}
            inventory={playerInventory}
            onInteract={handleInteract}
            onNavigate={handleNavigate}
            onEscape={handleEscape}
            onLootRoom={handleLootTheRoom}
            onAttack={handleAttack}
            onToggleLoot={onToggleLoot}
            onOpenLoot={onOpenLoot}
            isLoot={isLoot}
            lootedRoom={lootedRoom}
            escapeAttempt={escapeAttempt}
          />
          <button className="toggle-button-inventory" onClick={togglePanel}>
            <img alt='inventory' className='inventory-icon' src={Stats} />
          </button>
          <div className={`panel ${panelActive ? 'active' : ''}`}>
            <Character playerName={playerName} playerStats={playerStats} equippedItems={equippedItems} flash={flash} />
            <Inventory items={playerInventory} equippedItems={equippedItems} onUse={handleUse} />
          </div>
        </div>
      }
      {!dead && currentRoom && currentRoom.name === 'End' ?
        ''
        : null
      }
      {dead &&
        <GameOver handleRestartGame={handleRestartGame} />
      }
    </>
  );
};

export default App;