/**
 * Created by CHEN on 2016/2/1.
 */
import {USER_LOGIN,TEST} from '../constants/ActionType'

export default function loginReducer(state,action){
    switch (action.type) {
        case USER_LOGIN:
         if (action.toast===""){
             return{
                 toast:true,
                 message:'请您登陆，测试账号为spring 密码为123456',
             }
         }
           if(action.name==="spring"&action.pw==="123456"){
               return{
                   "snackbar":{
                       message:'登陆成功',
                       toast:action.toast,
                   },

               };


           }else {

               return{
                   "snackbar":{
                       message:'登录失败',
                       toast:action.toast,
                   },

               };
           }

            break;
        default:
            return{

                "snackbar":{
                    message:'请您登陆，测试账号为spring 密码为123456',
                    toast:true,

                },
            }

    }
}