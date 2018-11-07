import React, { Component } from 'react';
import Header from './components/Header';
import { createMuiTheme } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import purple from '@material-ui/core/colors/purple'
import Button from '@material-ui/core/Button';
import './App.css';

const alliButtonGrid = { maxWidth: 400, margin: '0 auto 10px' };

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
});

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header />
          <CardActionArea>
            <h1>Alli Wants You To Succeed</h1>
            <div style={alliButtonGrid}>
              <Button href="https://www.messenger.com/t/AlliBotWantsYouToSucceed" bsStyle="primary" bsSize="large" block target="_blank">
                Chat With Alli Now!
                </Button>
              <Button href="https://www.facebook.com/AlliBotWantsYouToSucceed/" bsStyle="primary" bsSize="large" block target="_blank">
                Check Out Our Facebook Page
                </Button>
            </div>
          </CardActionArea>
          <div className="main-info">
            <Grid>

              <div className="events">
                <h1>Find Events Near You</h1>
                <p>Alli can help find other developers like you through meetups.</p>
              </div>
              <div className="jobs">
                <h1>Find Jobs</h1>
                <p>
                  Have a conversation with Alli so she can help you find a job. She can find jobs tailored to your language.</p>
              </div>
              <div className="mentors">
                <h1>Mentorship</h1>
                <p>
                  Alli can find opportunities for you to mentor a junior developer.
              </p>
                <p>
                  She can also find mentors for you when you need advice, or need a mentor.
              </p>
              </div>
            </Grid>
            <Grid>
              <div className="facebook-info">
                <div class="fb-page" data-href="https://www.facebook.com/AlliBotWantsYouToSucceed/" data-width="1900" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                  <blockquote cite="https://www.facebook.com/AlliBotWantsYouToSucceed/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/AlliBotWantsYouToSucceed/">Alli-Bot</a></blockquote>
                </div>
              </div>
              <div className="coming-soon">
                <Button href="https://www.messenger.com/t/AlliBotWantsYouToSucceed" bsStyle="primary" bsSize="large" block target="_blank">
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
