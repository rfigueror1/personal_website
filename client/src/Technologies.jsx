import React from 'react';
import {Paper} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import * as data from './../../resumeData.jsx';
import useStyles from './styles.jsx'
import Technology from './Technology.jsx'

export default function Technologies(props){

  var sk = [{'name': 'Python', 'level': 100}]

  var skills = props.skills.map(function(skills){
      return <li key={skills.name}><Technology name={skills.name} level={skills.level}/></li>
    })

    const classes = useStyles();
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" className={classes.text}>About me</Typography>
        <Typography variant="body1" className={classes.text}>{data.default.main.techdesc}</Typography>
        <ul className="skills">
					  {skills}
					</ul>
      </Paper>
    )
}
