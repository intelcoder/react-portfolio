/**
 * Created by fiddlest on 2016-10-02.
 */
import React from 'react';


export default class App extends React.Component {
    state = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    handleResize = () => {
      this.setState({
          width: window.innerWidth,
          height: window.innerHeight
      })
    };
    componentWillMount(){
        window.addEventListener('resize', this.handleResize)
    }

    render() {
        return (
            <div>
                {React.cloneElement(this.props.children, {
                    width: this.state.width,
                    height: this.state.height
                })}

            </div>
        );
    }
}