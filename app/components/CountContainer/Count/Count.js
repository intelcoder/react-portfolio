/**
 * Created by fiddlest on 2016-10-02.
 */
import React from 'react';

export default ({increaseClick,decreaseClick, count}) => {
    return (
        <div>
            <div className="count-button-container">
                <div className="count-button increase" onClick={increaseClick}>UP</div>
                <div className="count-button decrease" onClick={decreaseClick}>DOWN</div>
            </div>
            <div>Current Count: {count}</div>
        </div>
    );
}