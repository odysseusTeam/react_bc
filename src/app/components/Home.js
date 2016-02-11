/**
 * Created by CHEN on 2016/2/1.
 */
import React from 'react';
import Paper from 'material-ui/lib/paper';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
const style = {
    height:300,
    width: 300,


};
const CardExampleWithAvatar =  (
    <Card>
        <CardHeader
            title="Without Avatar"
            subtitle="Subtitle"
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
);
const Home = () => (

    <div>

        <Paper style={style} zDepth={1}>
            {CardExampleWithAvatar}
        </Paper>
    </div>


);
export default Home;