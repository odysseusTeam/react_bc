//定义一个change方法，将来把它绑定到props上
export function change(value){
    return (dispatch,getState)=>{
        dispatch({
            type:"change",
                value:value,
        });

    }
}