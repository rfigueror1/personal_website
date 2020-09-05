import React from 'react';
import {Paper} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import * as data from './../../resumeData.jsx';
import useStyles from './styles.jsx'
import Grid from '@material-ui/core/Grid';

export default function Testimonials(props){

    const testimonials = data.default.testimonials

    const classes = useStyles();

    console.log(testimonials)

    var tests = testimonials.map( testimonial => {
      return (
        <Grid key={testimonial.user} item xs={6}>
          <Container>
            <Typography  variant="h6">{testimonial.user}</Typography>
            <br></br>
            <Typography  variant="body1">{testimonial.text}</Typography>
          </Container>
        </Grid>
      )
    })

    console.log(tests)

    return (
      <Paper>
        <Grid container spacing={1} alignContent='flex-start'>
          {
            tests
        }
        </Grid>
      </Paper>
    )
}
