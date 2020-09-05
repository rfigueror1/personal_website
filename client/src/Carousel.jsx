import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles.jsx'
import * as data from './../../resumeData.jsx';

export default function Example(props){

    const items = data.default.portfolio.projects
    return (
        <Carousel autoPlay={false}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props) {
    const classes = useStyles();
    return (
        <Container className={classes.container_carousel}>
            <Typography variant="h4" className={classes.text}>{props.item.name}</Typography>
            <Typography variant="h5" className={classes.text}>{props.item.description}</Typography>
            <Button className="CheckButton" href={props.item.url}>
                Check it out!
            </Button>
          <br></br>
          <img className={classes.projectThumbnail} src={props.item.image}/>
        </Container>
    )
}
