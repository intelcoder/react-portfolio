/**
 * Created by SeongjunKim on 2016-11-22.
 */
import React from 'react';
import ImageSlider from '../ImageSlider';
import images from '../../models/images';

export default class DemoPage extends React.Component {
  render() {
    const {width, height} = this.props;
    return (
      <div>
        <ImageSlider width={width} height={height/2}>
          {
            images.wallpapers.map((wallpaper, index)=> {
              return <img key={index} src={wallpaper}/>
            })
          }
        </ImageSlider>
      </div>
    )
  }

}