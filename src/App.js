import React, { Component } from 'react';
import Header from './components/Header';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from './components/Card'
import './App.css';

const alliButtonGrid = { maxWidth: 400, margin: '0 auto 10px' };

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header />
          <h1>Alli Wants You To Succeed</h1>
          <div style={alliButtonGrid}>
            <Button href="https://www.messenger.com/t/AlliBotWantsYouToSucceed" color="primary">
              Chat With Alli Now!
                </Button>
            <Button href="https://www.facebook.com/AlliBotWantsYouToSucceed/" color="primary">
              Check Out Our Facebook Page
                </Button>
          </div>
          <div className="main-info">
            <Card />
            <Grid>
              <div className="facebook-info">
                <div class="fb-page" data-href="https://www.facebook.com/AlliBotWantsYouToSucceed/" data-width="1900" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                  <blockquote cite="https://www.facebook.com/AlliBotWantsYouToSucceed/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/AlliBotWantsYouToSucceed/">Alli-Bot</a></blockquote>
                </div>
              </div>
              <div className="coming-soon">
                <Button href="https://www.messenger.com/t/AlliBotWantsYouToSucceed">
                  Chat With Alli Now!
                </Button>
              </div>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
