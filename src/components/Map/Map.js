import React from 'react';
import "./styles.css";

// images
import Explored from "../../resources/images/conqueror.png";
import Unexplored from "../../resources/images/plain-padlock.png";
import Location from "../../resources/images/position-marker.png";

const Map = ({ map, currentRoom }) => {
  return (
    <div className='map-container'>
      {map.map((room, i) => {
        console.log('room-map', room);
        console.log('current room', currentRoom);
        return <div key={i} className="room" style={{ border: room.name === currentRoom.name ? '4px solid #FFF' : '', boxShadow: room.name === currentRoom.name ? '0 0 12px 4px #FFF' : '', borderRadius: room.name === currentRoom.name ? '13px' : '' }}>{room.explored === true ? <img alt='explored' className='map-room-icon' src={Explored} /> :
          room.name === currentRoom.name ? <img alt='location' className='map-room-icon' src={Location} /> :
            <img alt='unexplored' className='map-room-icon' src={Unexplored} />}
        </div>
      })}
    </div >
  );
};

export default Map;