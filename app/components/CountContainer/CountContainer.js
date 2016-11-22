/**
 * Created by fiddlest on 2016-10-02.
 */
import React from 'react';
import { connect } from 'react-redux';
import {increaseCount, decreaseCount} from './actions';
import Count from './Count/Count';

class CountContainer extends React.Component {
    render() {
        const { count, increaseClick, decreaseClick } = this.props;
        return (
            <div id="count-container">
                <Count
                    count={count}
                    decreaseClick={decreaseClick}
                    increaseClick={increaseClick}
                />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const {countReducer} = state;
    return {
        count: countReducer.count
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increaseClick: () => {
            dispatch(increaseCount())
        },
        decreaseClick: () => {
            dispatch(decreaseCount())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountContainer)




