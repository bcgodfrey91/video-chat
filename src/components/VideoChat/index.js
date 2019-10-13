import React from 'react';

const VideoChat = () => {
  const [username, setUsername] = useState('');
  const [roomName, setRoomName] = useState('');
  const [token, setToken] = useState(null);

  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };

  const handleRoomNameChange = e => {
    setRoomName(e.target.value);
  };

  return <div></div>
};

export default VideoChat;
