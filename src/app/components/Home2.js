/**
 * Created by CHEN on 2016/2/1.
 */
import React, { findDOMNode, Component } from 'react';
import Paper from 'material-ui/lib/paper';
import Main from './Main'
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import { connect } from 'react-redux';
import  Slider from 'react-slicker';
const style = {



};




let CardExampleWithAvatar =  (
    <Paper style={style} zDepth={1}>

    <Card>
        <img src="./bg1.png" height="225"/>
        <CardHeader
            title="title"
            subtitle="介绍"
            actAsExpander={true}


        />

        <CardActions expandable={true}>
            <FlatButton label="Action1"/>
            <FlatButton label="Action2"/>
        </CardActions>
    </Card>
    </Paper>
);

  class Home extends Component{
    render() {

        let circle = {
            height: 50,
            width: 50,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
        };
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
<div style={style}>
    <Paper>
      <Paper >
        <Card  >
            <CardMedia
                overlay={<CardTitle title=" title" subtitle="Overlay subtitle"  />}
            >
                <Slider {...settings} >
                    <div>   <img src="http://lorempixel.com/600/337/nature/" /></div>
                    <div> <img src="http://lorempixel.com/600/337/nature/" /></div>
                    <div>  <img src="http://lorempixel.com/600/337/nature/" /></div>
                    <div>   <img src="http://lorempixel.com/600/337/nature/" /></div>
                    <div>  <img src="http://lorempixel.com/600/337/nature/" /></div>
                    <div>   <img src="http://lorempixel.com/600/337/nature/" /></div>
                </Slider>
            </CardMedia>
        </Card>
    </Paper>
        <Paper>
            <div>
                <Paper style={circle} zDepth={1} circle={true}/>
                <Paper style={circle} zDepth={1} circle={true}/>
                <Paper style={circle} zDepth={1} circle={true}/>
                <Paper style={circle} zDepth={1} circle={true}/>

            </div>
        </Paper>
        <Paper>
            {CardExampleWithAvatar}
            {CardExampleWithAvatar}
            {CardExampleWithAvatar}
        </Paper>
    </Paper>



</div>
   )


};

};

function mapStateToProps(state) {
    return {
        propsValue: state,
    }};
export default connect(mapStateToProps)(Home);

