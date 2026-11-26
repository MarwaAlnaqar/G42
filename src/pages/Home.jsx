import React, { useState, useMemo } from 'react';
import './QuestionsPage.css';



// Data import
import meetingRooms from '../data/meetingInfo';






const Home = () => {
  // Pick first room as default
  const initialRoom = useMemo(() => meetingRooms?.[0] ?? null, []);
  const [activeRoom, setActiveRoom] = useState(initialRoom);

  return (
    <div className="home-container country-container">

      {/* Logo */}
      <div className="logo ">
        <img className="logo-image" src={`${import.meta.env.BASE_URL}assets/ENS-Logo.png`} alt="ENS logo" />

      {/* Navbar */}
      <div className="navbar">
        {meetingRooms.map((item, index) => (
          <button
            key={index}
            type="button"
            className={`nav-item ${activeRoom?.name === item.name ? 'active' : ''}`}
            onClick={() => setActiveRoom(item)}
          >
            {item.name}
          </button>
        ))}
      </div>
   </div>
      {/* Iframe display area */}
      <div className="question-box" style={{width:'100%'}}>
        {activeRoom ? (
          <div className="iframe-wrap"  style={{width:'100%'}}>
            <iframe
              src={activeRoom.src}
              width={activeRoom.width}
              height={activeRoom.height}
              style={{ borderWidth: 0 }}
              frameBorder="0"
              scrolling="no"
              title={activeRoom.name}
            />
          </div>
        ) : (
          <p>Select a meeting room to view its calendar.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
