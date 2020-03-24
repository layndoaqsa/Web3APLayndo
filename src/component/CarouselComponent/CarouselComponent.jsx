import React from 'react';
import './CarouselComponent.css';
import { Carousel } from 'antd';

const carouselData = [
    {
      url : require('../../images/42745.jpg'),
    },
    {
      url : require('../../images/1375.jpg'),
    },
    {
      url : require('../../images/6576138.jpg'),
    }
  ]
const CarouselComponent = (props) => {
    return (
        <Carousel autoplay>
            {carouselData.map(data =>
            <div>
                <img src={data.url} style={{width:'100%'}}></img>
            </div>
            )} 
        </Carousel>
    )
}
    
        

export default CarouselComponent;
