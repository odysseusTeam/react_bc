/**
 * Created by CHEN on 2016/2/1.
 */
import {USER_LOGIN,USER_ERR} from '../constants/ActionType'
import Wilddog from 'wilddog/lib/wilddog-node'
let ref=new Wilddog('https://wild-ox-44324.wilddogio.com/user');

export function userLogin(name,pw){
    return (dispatch,getState)=>{

        ref.child(name.replace(/\./g, ',')).once('value',(snapshot)=>{
            let obj=snapshot.val();
            // let array=[];
            // for(let key in obj){
            //     array.push({key:key,text:obj[key].text})
            // }
            var exists = (snapshot.val() !== null);
            if(exists &&pw===obj.password){
                dispatch({
                    type: USER_LOGIN,
                })
                sessionStorage.username=name;
            }else {
                dispatch({
                    type: USER_ERR,
                })
            }

        },(err)=>{

                dispatch({
                    type: USER_ERR,
                })


        });


    }
}
