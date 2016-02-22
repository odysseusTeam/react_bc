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
const style = {
    height:300,
    width: 400,





};
let CardExampleWithAvatar =  (
    <Paper style={style} zDepth={1}>
    <Card>
        <img src="./bg1.png" height="225" width="400"/>
        <CardHeader
            title="标题"
            subtitle="介绍"
            actAsExpander={true}
            showExpandableButton={true}
        />

        <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions expandable={true}>
            <FlatButton label="Action1"/>
            <FlatButton label="Action2"/>
        </CardActions>
    </Card>
    </Paper>
);

  class Home extends Component{
    render() {
        return (
<div>

    <div>
    {CardExampleWithAvatar}
        </div>
    <br/>
    <div>
        {CardExampleWithAvatar}
    </div>

        </div>



   )


};

};

function mapStateToProps(state) {
    return {
        propsValue: state,
    }};
export default connect(mapStateToProps)(Home);

