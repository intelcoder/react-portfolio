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
      if(key < length) animate.set(this.refs[key], {transform:'scale(0.8)'});
    }
  };

  handlePrevClick = () => {
    if(this.state.currentIdx > 1){
      animate.to(this.refs[this.state.currentIdx], 1, {transform:`translateX(${-100}vw) scale(1)`});
      animate.fromTo(this.refs[this.state.currentIdx-1], 1, {transform:`translateX(${0}vw) scale(0.8)`}, {transform:`translateX(${0}vw) scale(1)`});

      this.setCurrentIndex(this.state.currentIdx -1);
    }
  };

  handleNextClick = () => {
    if(this.state.currentIdx < this.props.children.length - 1){
      animate.fromTo(this.refs[this.state.currentIdx + 1], 1,{transform:`translateX(${-100}vw) scale(0.8)`}, {transform:`translateX(${0}vw) scale(1)`});
      animate.to(this.refs[this.state.currentIdx], 1, {transform:`translateX(${0}vw) scale(0.8)`});
      this.setCurrentIndex(this.state.currentIdx + 1)
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