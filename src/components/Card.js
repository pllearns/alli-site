import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import toRenderProps from 'recompose/toRenderProps';
import withWidth from '@material-ui/core/withWidth';

const WithWidth = toRenderProps(withWidth());

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <WithWidth>
      {({ width }) => <div>
        <Grid container spacing={40} justify='center'>
          <Grid item xs={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/events_pic.png"
                  title="events"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Find Events Near You
          </Typography>
                  <Typography component="p">
                    Alli can help find other developers like you through meetups.
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
        </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/jobs_6.png"
                  title="jobs"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Find Jobs
          </Typography>
                  <Typography component="p">
                    Have a conversation with Alli so she can help you find a job.
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
        </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/mentor_1.png"
                  title="mentors"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Mentorship
          </Typography>
                  <Typography component="p">
                    Alli can find opportunities for you to mentor a junior developer.
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
        </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>}
    </WithWidth>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);