import React, { useState, useCallback} from 'react';
import Lobby from './Lobby';

const VideoChat = () => {
  const [username, setUsername] = useState('');
  const [roomName, setRoomName] = useState('');
  const [token, setToken] = useState(null);

  const handleUsernameChange = useCallback(e => {
    setUsername(e.target.value);
  }, []);

  const handleRoomNameChange = useCallback(e => {
    setRoomName(e.target.value);
  }, []);

  const handleSubmit = useCallback(async e => {
    e.preventDefault();
    const res = await fetch('/video/token', {
      method: 'POST',
      body: JSON.stringify({
        identity: username,
        room: roomName
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json();
    setToken(data.token);
  }, [username, roomName]);

  const handleLogout = useCallback(event => {
    setToken(null);
  }, []);

  let render;
  if (token) {
    render = (
      <div>
        <p>Username: {username}</p>
        <p>Room Name: {roomName}</p>
        <p>Token: {token}</p>
      </div>
    );
  } else {
    render = (
      <Lobby
        username={username}
        roomName={roomName}
        handleUsernameChange={handleUsernameChange}
        handleRoomNameChange={handleRoomNameChange}
        handleSubmit={handleSubmit}
      />
    );
  }

  return render;
};

export default VideoChat;
