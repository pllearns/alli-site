import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Header extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar color='secondary' position='sticky'>
        </AppBar>
      </MuiThemeProvider>
    )
  }
}