import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import * as data from './../../resumeData.jsx';
import useStyles from './styles.jsx'
import Slide from '@material-ui/core/Slide';
import Example from './Carousel.jsx'
import Testimonials from './Testimonials.jsx'
import Technologies from './Technologies.jsx'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InfoCard from './InfoCard.jsx'


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
            <Typography variant="h4">{data.default.main.name}</Typography>
            <a href={data.default.main.social[0].url}>
              <FacebookIcon className={classes.icon}/>
            </a>
            <a href={data.default.main.social[2].url}>
              <LinkedInIcon className={classes.icon}/>
            </a>
            <a href={data.default.main.social[1].url}>
              <TwitterIcon className={classes.icon}/>
            </a>
            <a href={data.default.main.social[3].url}>
              <GitHubIcon className={classes.icon} href={data.default.main.social[0].url}/>
            </a>
            <a href='ricardofigueroaresume_2020.pdf' target="_blank" rel="noopener noreferrer" download>
               <Button ariant="contained" className={classes.button}>
                  <i className="fas fa-download"/>
                  Download Resume
               </Button>
            </a>
          <Typography variant="body1">{data.default.main.phone}</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container className={classes.container}>
          <CardMedia className={classes.card}>
            <Typography variant="h1" className={classes.text}>{data.default.main.bio} </Typography>
          </CardMedia>
          <InfoCard title="Technologies" description={data.default.main.techdesc} content=<Technologies skills={data.default.resume.skills}/>/>
          <InfoCard title="Projects" content={<Example/>}/>
          <InfoCard title="Testimonials" content={<Testimonials/>}/>
      </Container>
    </React.Fragment>
  );
}
