/**
 * Created by CHEN on 2016/1/28.
 */
import React, { findDOMNode, Component } from 'react';
import ReactDOM  from 'react-dom';
import TextField from 'material-ui/lib/text-field';
import { connect } from 'react-redux';
import {userLogin ,test} from '../actions/LoginAction'
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import Colors from 'material-ui/lib/styles/colors';
import SvgIcon from 'material-ui/lib/svg-icon';
import IconButton from 'material-ui/lib/icon-button';
import Snackbar from 'material-ui/lib/snackbar';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
import { Router, Route, Link, browserHistory,IndexRoute } from 'react-router'
import FullWidthSection from './full-width-section';

let parentoptions = {
    flexDirection: ["row", "row-reverse", "column", "column-reverse"],
    justifyContent: ["flex-start", "flex-end", "center", "space-between", "space-around"],
    alignItems: ["flex-start", "flex-end", "center", "stretch", "baseline"],
    flexWrap: ["nowrap", "wrap", "wrap-reverse"],
    alignContent: ["flex-start", "flex-end", "center", "stretch", "space-between", "space-around"],
};

let flexStyle = {

    flexContainer: {
        // 容器需要添加direction才能变成让子元素flex

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    flexRow: {

        // 容器需要添加direction才能变成让子元素flex
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'space-around',
        justifyContent: 'center',

    },
};
let style={
    root: {
        overflow: 'hidden',
    },
    Raised:{
        margin: '1rem',
    },
    svgLogo: {

        width: 150,
        height: 150,
        marginBottom:20,
    },
}

 class login extends Component {
     render() {
        return (

            <FullWidthSection style={flexStyle.flexContainer}>
                <Link to="/">
                    <img style={style.svgLogo} src="images/logo.png" />
                </Link>
             
                <TextField
                    floatingLabelText="请输入用户名 或 邮箱"

                    ref="getName"
                />
                <TextField
                    hintText="请输入用户密码"
                    floatingLabelText="请输入用户密码"
                    type="password"
                    ref="getPw"
                />
                <br/>
                <div style={flexStyle.flexRow}>
                    <RaisedButton

                        label="登 录"
                        labelPosition="after"
                        primary={true}
                        style={style.Raised}
                        onClick={
                         this._userLogin.bind(this)
                        }

                    />

                    <FlatButton
                        style={style.Raised}
                        label="立即注册？"
                        labelPosition="after"


                    />
                </div>
                <p>第三方账号登陆</p>
                <div style={flexStyle.flexRow}>
                    <FlatButton
                        style={style.Raised}
                        label="腾讯qq"
                        labelPosition="after"


                    />
                    <FlatButton label="新浪微博" secondary={true} style={style.Raised}/>
                </div>
                <Snackbar
                    open={this.props.sn.toast}
                    message={this.props.sn.message}
                    action="关闭"
                    autoHideDuration={5000}
                    //autoHideDuration={this.state.autoHideDuration}
                    //onActionTouchTap={this.handleActionTouchTap}
                 onRequestClose={this._onRequestClose.bind(this)}
                />
            </FullWidthSection>


        );

    }
     _userLogin(){
         let name=this.refs.getName.getValue();
         let pw =this.refs.getPw.getValue();
         this.props.dispatch(userLogin(true,name,pw));
     }
     _onRequestClose(){
         this.props.dispatch(userLogin(false));
     }


};
function mapStateToProps(state) {
    return {
        propsValue: state.loginReducer,
        sn:state.loginReducer.snackbar,

    }
}

//将state的指定值映射在props上，将action的所有方法映射在props上
export default connect(mapStateToProps)(login);


