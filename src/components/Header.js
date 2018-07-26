import React, { Component } from 'react';
import AlliBot from '../AlliBot.png';

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={AlliBot} className="App-logo" alt="alli-bot-logo" />
      </header>
    )
  }
}