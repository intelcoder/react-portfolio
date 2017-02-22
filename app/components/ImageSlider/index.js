/**
 * Created by SeongjunKim on 2016-11-22.
 */
import React from 'react';
import animate from 'gsap-promise';


export default class ImageSlider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentIdx: 5
    }
  };

  componentDidMount(){
    const length = Object.keys(this.refs).length -1;
    for (var key of Object.keys(this.refs)) {
      if(key < length) animate.set(this.refs[key], {scale:0.8, xPercent: -100});
    }
  };
  handlePrevClick = () => {
    if(this.state.currentIdx < this.props.children.length - 1){
      const nextIndex = this.state.currentIdx + 1;
      animate.to(this.refs[this.state.currentIdx], 1, {scale:0.8, xPercent: 0});
      animate.fromTo(this.refs[nextIndex], 1, {scale:0.8, xPercent: -100}, {scale: 1, xPercent: 0});
      this.setCurrentIndex(nextIndex);
    }
  };

  handleNextClick = () => {
    if(this.state.currentIdx > 0){
      animate.to(this.refs[this.state.currentIdx], 1, {scale:0.8, xPercent: -100});
      animate.fromTo(this.refs[this.state.currentIdx - 1],1 ,{scale:0.8, xPercent: 0}, {scale: 1, xPercent: 0});
      this.setCurrentIndex(this.state.currentIdx - 1)
    }
  };


  setCurrentIndex = (index) => {
    this.setState({
      currentIdx: index
    });
  };

  render(){
    const { width, height } = this.props;
    return (
      <div id="image-slider" style={{width: width, height: height}}>
        <div className="image-container">
          {
            this.props.children.map((child, index)=> {
              return React.cloneElement(child, {
                  id: index,
                  ref: index
                }
              )
            })
          }
        </div>
        <div className="slider-btn-container">
          <div onClick={this.handlePrevClick} className="btn">Prev</div>
          <div onClick={this.handleNextClick} className="btn">Next</div>
        </div>
      </div>
    )
  }
}