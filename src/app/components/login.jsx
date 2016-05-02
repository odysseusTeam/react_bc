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
import {flexStyle}from '../styles/styles';
let parentoptions = {
    flexDirection: ["row", "row-reverse", "column", "column-reverse"],
    justifyContent: ["flex-start", "flex-end", "center", "space-between", "space-around"],
    alignItems: ["flex-start", "flex-end", "center", "stretch", "baseline"],
    flexWrap: ["nowrap", "wrap", "wrap-reverse"],
    alignContent: ["flex-start", "flex-end", "center", "stretch", "space-between", "space-around"],
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

     // constructor(props) {
     //     super(props);
     //     this.state = {
     //         toast: false,
     //     };
     // }
     // handleRequestClose = () => {
     //     this.setState({
     //         open: false,
     //     });
     // };

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
                    <Link to="register">
                    <FlatButton
                        style={style.Raised}
                        label="立即注册？"
                        labelPosition="after"
                    />
                        </Link>
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
                
                    autoHideDuration={3000}
                    //autoHideDuration={this.state.autoHideDuration}
                    //onActionTouchTap={this.handleActionTouchTap}
                 // onRequestClose={this.handleRequestClose}
                />
            </FullWidthSection>


        );

    }
     _userLogin(){
         let name=this.refs.getName.getValue();
         let pw =this.refs.getPw.getValue();
         this.props.dispatch(userLogin(name,pw));
     }
     _onRequestClose(){
       
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


