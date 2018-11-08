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

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 450,
  },
  media: {
    height: 140,
  },
});


const services = [
  {
    id: 1,
    title: 'events',
    heading: 'Find events near you',
    description: 'Alli can help find other developers like you through meetups.',
    image: '/static/images/events_pic.png'
  },
  {
    id: 2,
    title: 'jobs',
    heading: 'Find jobs',
    description: 'Have a conversation with Alli so she can help you find a job.',
    image: '/static/images/jobs_6.png'

  },
  {
    id: 3,
    title: 'mentors',
    heading: 'Mentorship',
    description: 'Alli can find opportunities for you to mentor a junior developer.',
    image: '/static/images/mentor_1.png'
  }
]

function MediaCard(props) {
  const { classes } = props;

  return (
    <WithWidth>
      {({ width }) => <div className={classes.root}>
        <Grid container direction="row" spacing={24}>
          {services.map((service) =>
            <Grid item xs zeroMinWidth>
              <Card key={service.id}
                className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={service.image}
                    title={service.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {service.heading}
                    </Typography>
                    <Typography component="p">
                      {service.description}
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
          )}
        </Grid>
      </div>
      }
    </WithWidth>
  )
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);