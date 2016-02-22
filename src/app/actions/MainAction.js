/**
 * Created by liang on 2016/2/21.
 */
import {CLOSE,OPEN} from '../constants/ActionType'

export function open(){
    return {

        type: OPEN,

    };


}
export function close(){
    return {

            type:CLOSE,

        };


}
