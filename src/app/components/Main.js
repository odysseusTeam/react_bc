/**
 * Created by CHEN on 2016/1/30.
 */
import React from 'react';
import ReactDOM  from 'react-dom';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Avatar from 'material-ui/lib/avatar';
import FileFolder from 'material-ui/lib/svg-icons/file/folder';
import styles from 'material-ui/lib/styles';
import FontIcon from 'material-ui/lib/font-icon';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import { connect } from 'react-redux';
import {open,close}from '../actions/MainAction'
import RaisedButton from 'material-ui/lib/raised-button';
import Badge from 'material-ui/lib/badge';
import Paper from 'material-ui/lib/paper';
import { Router, Route, Link, browserHistory,IndexRoute } from 'react-router'

import NotificationsIcon from 'material-ui/lib/svg-icons/social/notifications';
import LinearProgress from 'material-ui/lib/linear-progress';



const customContentStyle = {
    width: '100%',
    maxWidth: 'none',
    display: 'flex',

};

class Main extends React.Component {
 

    render() {

        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose.bind(this)}

            />,


        ];
        return (
   <div>
     <AppBar
                    style={customContentStyle}
                    title={"APP首页"}
                    zDepth={0}
                    iconElementRight={
                                  <Badge
                                      onClick={this._changeHandle.bind(this)}
                                      badgeContent={4}
                                      primary={true}

                                    >
                                      <NotificationsIcon />
                                    </Badge>
                                        }
                />


                <Dialog
        title="用户登录"
        actions={actions}
        modal={true}
        open={this.props.propsValue}
        onClick={this.handleClose.bind(this)}
    >

    <Link to="login">
            <FlatButton label="登录" primary={true}
                        onClick={this.handleClose.bind(this)}
            
            />
            </Link>

            <FlatButton label="注册" primary={true}/>
            </Dialog>
            {this.props.children}
    </div>

        )
    }

    handleClose() {
        this.props.dispatch(close());
    }

    _changeHandle() {


        this.props.dispatch(open());

    }
}

function mapStateToProps(state) {
    return {
        propsValue: state.mainReducer.do,
    }
}
export default connect(mapStateToProps)(Main);

