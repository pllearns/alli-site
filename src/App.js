import React, { Component } from 'react';
import Header from './components/Header';
import { Jumbotron, Button, ButtonToolbar, Grid, Row, Col } from 'react-bootstrap';
import './App.css';

const alliButtonGrid = { maxWidth: 400, margin: '0 auto 10px' };

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header />
          <Jumbotron bsClass="main-jumbotron">
            <h1>Alli Wants You To Succeed</h1>
            <div style={alliButtonGrid}>
              <ButtonToolbar>
                <Button href="https://www.messenger.com/t/AlliBotWantsYouToSucceed" bsStyle="primary" bsSize="large" block target="_blank">
                  Chat With Alli Now!
                </Button>
                <Button href="https://www.facebook.com/AlliBotWantsYouToSucceed/" bsStyle="primary" bsSize="large" block target="_blank">
                  Check Out Our Facebook Page
                </Button>
              </ButtonToolbar>
            </div>
          </Jumbotron>
          <div className="main-info">
            <Grid>
              <Row className="show-grid" >
                <Col xs={6} md={4}>
                  <div className="events">
                    <h1>Find Events Near You</h1>
                    <p>Alli can help find other developers like you through meetups.</p>
                  </div>

                </Col>
                <Col xs={6} md={4}>
                  <div className="jobs">
                    <h1>Find Jobs</h1>
                    <p>
                      Have a conversation with Alli so she can help you find a job. She can find jobs tailored to your language.</p>
                  </div>

                </Col>
                <Col xs={6} md={4}>
                  <div className="mentors">
                    <h1>Mentorship</h1>
                    <p>
                      Alli can find opportunities for you to mentor a junior developer.
              </p>
                    <p>
                      She can also find mentors for you when you need advice, or need a mentor.
              </p>
                  </div>
                </Col>
              </Row>
            </Grid>
            <Grid>
              <Row className="show-grid">
                <Col md={6} mdPush={6}>
                  <div className="facebook-info">
                    <div class="fb-page" data-href="https://www.facebook.com/AlliBotWantsYouToSucceed/" data-width="1900" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                      <blockquote cite="https://www.facebook.com/AlliBotWantsYouToSucceed/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/AlliBotWantsYouToSucceed/">Alli-Bot</a></blockquote>
                    </div>
                  </div>
                </Col>
                <Col md={6} mdPull={6}>
                  <div className="coming-soon">
                    <Button href="https://www.messenger.com/t/AlliBotWantsYouToSucceed" bsStyle="primary" bsSize="large" block target="_blank">
                      Chat With Alli Now!
                </Button>
                  </div>
                </Col>
              </Row>
            </Grid>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
