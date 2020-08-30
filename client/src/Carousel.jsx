import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import useStyles from './styles.jsx'




export default function Example(props){



    var items = [
        {
            name: "Third Eye",
            description: "Content Monitoring System for product on e-commerce websites",
            image: "https://propertyimagesvesta.s3.amazonaws.com/images/third_eye.png",
            url: ""
        },
        {
            name: "DeliverIO",
            description: "Fleet Route Management System (Optimal Routes)",
            image: "https://propertyimagesvesta.s3.amazonaws.com/images/deliverio.jpeg",
            url: ""
        },
        {
            name: "AES",
            description: "Automated Essay Scoring using NLP",
            image: "https://propertyimagesvesta.s3.amazonaws.com/images/aes1.jpeg",
            url: "https://drive.google.com/file/d/1cfYL-8xAUGy9QF6nheLAsoyQ1cjHaWVS/view?usp=sharing"
        }

    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props) {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <Button className="CheckButton" href={props.item.url}>
                Check it out!
            </Button>
          <br></br>
          <img className={classes.projectThumbnail} src={props.item.image}/>
        </Paper>
    )
}
