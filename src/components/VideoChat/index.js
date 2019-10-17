import React, { useState, useCallback} from 'react';

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

  return <div></div>
};

export default VideoChat;
