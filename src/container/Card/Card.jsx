import React, {Component} from 'react';
import CardComponent from '../../component/CardComponent/CardComponent';
import CarouselComponent from '../../component/CarouselComponent/CarouselComponent';

class Card extends React.Component{
    cardData = [
        {
          nama : "LAYNDO SAFARA AQSA",
          job : "SOFTWARE ENGINEER",
          instagram : 'https://www.instagram.com/layndo.sfr/',
          image : 'https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/78771649_508375766439785_2815170197160198144_n.jpg?_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=fu77Z72JrTAAX8ENMyu&oh=bc78076dacdffd7565afc5edfe39371d&oe=5EA13456'
        },
        {
          nama : "DWI NOVIANDARU",
          job : "SOFTWARE ENGINEER",
          instagram : 'https://www.instagram.com/dnoviandaru/',
          image : 'https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-15/e35/33111053_418041972001249_8794139787045896192_n.jpg?_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=xb9uljUNUg0AX9nlgH0&oh=ffbad2df7ece23d3daed497ed5683cdc&oe=5E9EBA3D'
        },
        {
          nama : "AFYAD KAFA",
          job : "SOFTWARE ENGINEER",
          instagram : 'https://www.instagram.com/kafyad/',
          image : 'https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-19/11373574_1599595923614704_365964469_a.jpg?_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=GTSOPXrWa5oAX8p91cr&oh=20f2c15a45f137c89ea454205c6f60ae&oe=5EA0D401'
        },
        {
          nama : "MUHAMMAD ADY PAMUNGKAS",
          job : "SOFTWARE ENGINEER",
          instagram : 'https://www.instagram.com/adypamunqkas/',
          image : 'https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/84466905_2917957751595818_9003046395027914752_n.jpg?_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=DJDF_jdDS7MAX8PqdRb&oh=be9ac2614b459c5bb613bd8d1e301a3c&oe=5EA66318'
          // image : require('./images/42745.jpg'),
        },
      ]
    state = {
        like : 0
    }

    handleCounterChange = (newValue) => {
        this.setState({
            like: newValue
        })
    }


    render(){
        return(
            <div>
                <CarouselComponent/>
                <h1>{this.state.like}</h1>
                <CardComponent onCounterChange={(value)=> this.handleCounterChange(value)}/>
            </div>
        )
    }
}

export default Card;