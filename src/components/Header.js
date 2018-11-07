import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import AlliBot from '../AlliBot.png';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Header extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar color='secondary' positionSticky='sticky'>
          <img src={AlliBot} className="App-logo" alt="alli-bot-logo" />
        </AppBar>
      </MuiThemeProvider>
    )
  }
}