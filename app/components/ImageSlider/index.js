/**
 * Created by SeongjunKim on 2016-11-22.
 */
import React from 'react';
import animate from 'gsap-promise';


export default class ImageSlider extends React.Component {
  constructor(props){
    super(props);
    this.length = this.props.children.length - 1;
    this.state = {
      currentIdx: this.length,
      isDirectionRight: true
    }
    this.autoSlideInterval = null;
    this.autoSlidePending = null;
  };

  setImageSliderInterval = () => {
    return setInterval(()=>{
        this.moveToNextImage();
     }, 300)
  };

  delayAutoSlide = () => {
    if(this.autoSlideInterval){
      console.log("pending")
      clearInterval(this.autoSlideInterval);
      clearTimeout(this.autoSlidePending);
      this.autoSlidePending = setTimeout(() => {
        this.autoSlideInterval = this.setImageSliderInterval();
      }, 2000)
    }
  }


  componentDidMount(){
    const length = Object.keys(this.refs).length -1;
    for (var key of Object.keys(this.refs)) {
      if(key < length) animate.set(this.refs[key], {transform:'scale(0.8)', autoAlpha:0});
    }
    this.autoSlideInterval = this.setImageSliderInterval();
  };

  handlePrevClick = () => {
    this.delayAutoSlide();
    let index = this.state.currentIdx;
    if(this.state.currentIdx > this.length - 1 ){
      animate.to(this.refs[index], 1, {scale:0.7,autoAlpha: 0 ,ease: Expo.easeOut});
      index = this.setCurrentIndex(0);
    }
    animate.to(this.refs[index], 1, {xPercent: 0, scale:0.7, autoAlpha: 0, ease: Expo.easeOut});
    animate.fromTo(this.refs[index + 1], 1, {xPercent: 100, scale:0.7, autoAlpha:0},  {xPercent: 0, scale:1, autoAlpha:1,  ease: Expo.easeOut});

    if(index < 5){
      this.setCurrentIndex(index + 1)
    }
  };

  handleNextClick = ()  => {
      this.delayAutoSlide();
      this.moveToNextImage();
  };
  moveToNextImage = () => {

    let index = this.state.currentIdx;
    if(this.state.currentIdx < 1){
      animate.to(this.refs[this.state.currentIdx], 1, { xPercent: 100 ,ease: Expo.easeOut});
      index = this.setCurrentIndex(this.length + 1);
    }else {
      animate.to(this.refs[index], 1, {xPercent: 100, scale :1, ease: Expo.easeOut});
    }
    animate.fromTo(this.refs[index - 1], 1, {xPercent: 0, scale:0.7, autoAlpha: 0}, {xPercent: 0, scale:1, autoAlpha: 1, ease: Expo.easeOut});
    if(index > 0){
      this.setCurrentIndex(index - 1);
    }
  }

  setCurrentIndex = (index) => {
    this.setState({
      currentIdx: index
    });
    return index;
  };

  render(){
    const { width, height } = this.props;
  //  console.log(this.state.currentIdx)
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
