/**
 * Created by CHEN on 2016/2/1.
 */
import {USER_LOGIN,TEST} from '../constants/ActionType'

export function test (e){
    return{
        type:TEST,
        text:e,

    };
}
export function userLogin(e,name,pw){
    return{
        type:USER_LOGIN,
        toast:e,
        name:name,
        pw:pw,


    };
}
