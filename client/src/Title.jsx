import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styles.jsx'

export default function Title(props){
    const classes = useStyles();
    return (
      <Container maxWidth="sm" className={classes.title}>
        <Typography variant="h2">
          {props.text_title}
        </Typography>
      </Container>
    )
}
