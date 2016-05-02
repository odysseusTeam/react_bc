/**
 * Created by CHEN on 2016/2/1.
 */
import {USER_LOGIN,USER_ERR} from '../constants/ActionType'
import Wilddog from 'wilddog/lib/wilddog-node'
let ref=new Wilddog('https://wild-ox-44324.wilddogio.com/user');
const initialState = {

        "snackbar":{
            message:'请您登陆',
            toast:true,

        },
        session:"登录",
    };

export default function loginReducer(state=initialState,action){
    switch (action.type) {

        case USER_LOGIN:
                return Object.assign({},state,{
                    "snackbar":{
                        message:'登陆成功',
                        toast:true,

                    },


                })
    

            break;
        case USER_ERR:
            return Object.assign({},state,{
                "snackbar": {
                    message: '登录失败',
                    toast: true,

                },

            });
            break;
        default:
            return state;

    }
}
