import React, { Component } from 'react';
import './App.css';
import VideoChat from './components/VideoChat';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Video Chat with React Hooks</h1>
        </header>
        <main>
          <VideoChat />
        </main>
        <footer>
          <p>
            Made with{' '}
            <span role="img" aria-label="React">
              ⚛
            </span>{' '}
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
