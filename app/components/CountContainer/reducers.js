/**
 * Created by fiddlest on 2016-10-02.
 */
import keys from './keys';

const initCount = {
  count: 0
};
export const countReducer = (state = initCount, action) => {
    switch(action.type){
        case keys.INCREASE:
            return Object.assign({},state,{
                count: state.count+1
            });
        case keys.DECREASE:
            return Object.assign({},state,{
                count: state.count-1
            });
    }
    return state;


};