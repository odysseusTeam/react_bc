/**
 * Created by liang on 2016/4/12.
 */
import {USER_REGISTER}from '../constants/ActionType'
import Wilddog from 'wilddog/lib/wilddog-node'
const initialState = {
    toast:false,
    message:'注册失败',
};
let ref=new Wilddog('https://wild-ox-44324.wilddogio.com/user');
// let db = openDatabase('spring', '1.0', 'Test DB', 2 * 1024 * 1024);
export default function  userAdd(state=initialState,Action) {
    switch (Action.type){
        case USER_REGISTER:
            if (Action.name===""|Action.password===""|Action.again===""){
                return  Object.assign({},state,{
                    toast:true,
                    message:"请输入要注册的账号和密码",
            })}else if(Action.name!==""&&Action.password!==""&&Action.again===""){
                return  Object.assign({},state,{
                    toast:true,
                    message:"请重复输入密码",
                })
            }
            if (Action.password===Action.again&&Action.name!==""){
                // db.transaction(
                //     function (tx) {
                //         console.log('INSERT INTO USER (name,password) VALUES ("'+Action.name.toString()+'","'+Action.password.toString()+'")')
                //         tx.executeSql('CREATE TABLE IF NOT EXISTS USER (name,password)');
                //         tx.executeSql('INSERT INTO USER (name,password) VALUES ("'+Action.name.toString()+'","'+Action.password.toString()+'")');
                //
                //
                //
                //     }
                // );
                // let childref = ref.push({"+Action.name.toString()+":"Thor","planet":"Asgard"});
                //
                // let newKey = childref.key();

                ref.child(Action.name.toString().replace(/\./g, ',')).set({
                    password: Action.password,

                });
//newKey shoud look like a base64-like series eg -JmRhjbYk73IFRZ7
//th url of newKey shoud be https://<appId>.wilddogio.com/users/-JmRhjbYk73IFRZ7

               return Object.assign({},state,{
                    toast:true,
                    message:"注册成功",
                })
            }else {
                return  Object.assign({},state,{
                  toast:true,
                  message:"两次密码输入不相同，请重新输入",
              })
            }
        default:
            return state

    }
}
