import React from 'react';
import {Paper} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import * as data from './../../resumeData.jsx';
import useStyles from './styles.jsx'
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

function toMatrix(arr, width) {
  return arr.reduce(function (rows, key, index) {
    return (index % width == 0 ? rows.push([key])
      : rows[rows.length-1].push(key)) && rows;
  }, []);
}

export default function Technologies(props){

    const technologies = data.default.resume.skills
    var front_end_tech = technologies.filter(tech => tech.type === "front_end");
    var back_end_tech = technologies.filter(tech => tech.type === "back_end");
    var dev_ops_tech = technologies.filter(tech => tech.type === "devOps");
    var programming_languages = technologies.filter(tech => tech.type === "programming_language");

    var organize_tech = function(technology_class){
      technology_class = technology_class.map(tech => (
        <Grid key={tech.file} item xs={3}>
          <CardMedia>
            <img width="50px" src={tech.file}/>
            <Typography  variant="body1">{tech.name}</Typography>
          </CardMedia>
        </Grid>)
      )
      return technology_class
    }

    front_end_tech = organize_tech(front_end_tech)
    back_end_tech = organize_tech(back_end_tech)
    dev_ops_tech = organize_tech(dev_ops_tech)
    programming_languages = organize_tech(programming_languages)

    const classes = useStyles();
    return (
      <Paper>
        <Grid container spacing={1} alignItems='center' alignContent='flex-start'>
          <Grid item xs={12}>
            <Typography  className={classes.tech_subtitle} variant="h6">Programming Languages</Typography>
          </Grid>
          {programming_languages}
          <Grid item xs={12}>
            <Typography  className={classes.tech_subtitle} variant="h6">Back End</Typography>
          </Grid>
          {back_end_tech}
          <Grid item xs={12}>
            <Typography  className={classes.tech_subtitle} variant="h6">Front End</Typography>
          </Grid>
          {front_end_tech}
          <Grid item xs={12}>
            <Typography  className={classes.tech_subtitle} variant="h6">DevOps</Typography>
          </Grid>
          {dev_ops_tech}
        </Grid>
      </Paper>
    )
}
