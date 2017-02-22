/**
 * Created by fiddlest on 2/21/2017.
 */

import React, {Component} from 'react';
import animate from 'gsap-promise';

export default class LineButton extends Component {
  tl ;

  componentDidMount(){
    this.animateIn();
  }

  animateIn = () => {
    animate.set( this.refs.bottomLine, { xPercent:-100});
    animate.set( this.refs.text, {scale:0.9});
    animate.fromTo( this.refs.lineButton, 0.5,  {opacity: 0}, { delay:0.5, opacity:1})
  };

  handleMouseEnter = () => {
    this.tl = new TimelineMax();
    this.tl
      .set(this.refs.bottomLine, {xPercent:-100})
      .to(this.refs.bottomLine, 0.4, {xPercent:100})
      .set(this.refs.bottomLine, {xPercent: -100})
      .to(this.refs.bottomLine, 0.2, {xPercent: 0});

    animate.to(this.refs.text, 0.3, {scale: 1});
  };

  handleMouseLeave = () => {
    if(this.tl){
      this.tl.kill()
    }
    animate.to(this.refs.bottomLine, {xPercent: -100});
    animate.to(this.refs.bottomLine, 0.35, {xPercent: -100, ease: Expo.easeIn});
    animate.to(this.refs.text, 0.35, {scale: 0.9})
  };


  render() {
    const { buttonText } = this.props;
    return (
      <div
        id="line-button-container"
        ref="lineButton"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="btn-body">
          <div className="text" ref="text">
            {buttonText}
          </div>
        </div>

        <div className="btn-line-container">
          <div className="btn-bottom-line" ref="bottomLine"/>
        </div>
      </div>

    )
  }

}

