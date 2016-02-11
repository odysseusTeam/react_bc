/**
 * Created by CHEN on 2016/2/1.
 */
import {USER_LOGIN} from '../constants/ActionType'

export function ulogin(e){
    return{
        type:USER_LOGIN,
        text:e,

    };
}