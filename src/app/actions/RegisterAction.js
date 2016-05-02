
/**
 * Created by liang on 2016/4/12.
 */
import {USER_REGISTER} from '../constants/ActionType'

export function user_regiter(name,password,again) {
    return{
        type :USER_REGISTER,
        name,
        password,
        again,
    }


}