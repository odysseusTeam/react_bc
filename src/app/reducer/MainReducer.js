/**
 * Created by liang on 2016/2/21.
 */
import {OPEN,CLOSE} from '../constants/ActionType'
const initialState = [
    {
      do:false,
    },
]
export default function change(state= initialState,action){

    switch (action.type) {
        case OPEN :

               return{
                   do:true,
               };
        case CLOSE:
            return{
                do:false,
            };


        default:
            return{
                do:false,
            };

    }
}