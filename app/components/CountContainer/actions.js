/**
 * Created by fiddlest on 2016-10-02.
 */
import keys from './keys';

export const increaseCount = () => {
    return {
        type: keys.INCREASE
    }
};

export const decreaseCount = () => {
    return {
        type: keys.DECREASE
    }
};
