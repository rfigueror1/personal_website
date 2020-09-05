import React from 'react';
import {Paper} from '@material-ui/core'
import Title from './Title.jsx'
import Description from './Description.jsx'
import useStyles from './styles.jsx'

export default function InfoCard(props){
    const classes = useStyles();
    return (
      <Paper className={classes.paper}>
        <Title text_title={props.title}/>
        <Description text_description={props.description}/>
        {props.content}
      </Paper>
    )
}
