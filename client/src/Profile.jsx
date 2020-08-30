import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import * as data from './../../resumeData.jsx';
import useStyles from './styles.jsx'
import Slide from '@material-ui/core/Slide';
import Example from './Carousel.jsx'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Profile(props) {

  const classes = useStyles();



  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h2">{data.default.main.name}</Typography>
            <FacebookIcon className={classes.icon}/>
            <LinkedInIcon className={classes.icon}/>
            <TwitterIcon className={classes.icon}/>
            <GitHubIcon className={classes.icon} href={data.default.main.social[0].url}/>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container className={classes.container}>
          <CardMedia className={classes.card}>
            <img className={classes.images} src={data.default.main.image} alt="recipe thumbnail"/>
            <Typography variant="h4" className={classes.text}>{data.default.main.bio} </Typography>
          </CardMedia>
          <Example/>
      </Container>
    </React.Fragment>
  );
}
