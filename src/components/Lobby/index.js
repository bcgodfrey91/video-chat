import React from 'react';

const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter a Room</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="field"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="room">Room:</label>
        <input
          type="text"
          id="field"
          value={roomName}
          onChange={handleRoomNameChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Lobby;
