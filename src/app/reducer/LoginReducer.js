/**
 * Created by CHEN on 2016/2/1.
 */
import {USER_LOGIN} from '../constants/ActionType'

export default function loginReducer(state,action){
    switch (action.type) {
     case USER_LOGIN:
         let ms="请输入用户名"
         if (action.text==='liang'){
             ms='输入正确'
         }

            return{

                text:ms,
            };
        default:
            return("");

    }
}