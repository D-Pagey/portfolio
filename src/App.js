import React, { Component } from 'react';

import './App.css';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Modal />
        <Navbar />
        <Header />
        <p>Chicken</p>
      </div>
    );
  }
}

export default App;
