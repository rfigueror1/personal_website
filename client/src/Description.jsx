import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styles.jsx'

export default function Description(props){
    const classes = useStyles();
    return (
      <Container maxWidth="sm">
        <Typography variant="h4" className={classes.description}>
          {props.text_description}
        </Typography>
      </Container>
    )
}
