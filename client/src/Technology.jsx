import React from 'react';
import {Paper} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import * as data from './../../resumeData.jsx';
import useStyles from './styles.jsx'


export default function Technology(props){

    const classes = useStyles();
    return (
      <Grid container spacing={3} alignItems='center' alignContent='flex-start'>
        <Grid item xs={6}>
          <Typography variant="h6">{props.name}</Typography>
        </Grid>
        <Grid item xs={6}>
          <LinearProgress variant="determinate"   value={props.level} />
        </Grid>
      </Grid>
    )
}
