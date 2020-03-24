import React from 'react';
import { Card } from 'antd';
import './CardComponent.css';
import {
    InstagramOutlined,
    LikeOutlined,
    DislikeOutlined,
} from '@ant-design/icons';

class CardComponent extends React.Component{
    state = {
        like: 0
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }
    
    handleDisLike = () => {
        if(this.state.like > 0){
            this.setState({
                like: this.state.like - 1
            }, () => {
                this.handleCounterChange(this.state.like);
            })        
        }
    }
    handleLike = () => {
        this.setState({
            like: this.state.like + 1
        }, () => {
            this.handleCounterChange(this.state.like);
        })
    }
    render(){    
        return (
        // const CardComponent = (props) => {
            <Card title="" extra={<a href='https://www.instagram.com/layndo.sfr/'>Instagram <InstagramOutlined /></a>} style={{width:300, display:'inline-block', margin:'5px'}}>
                <p><b>LAYNDO SAFARA AQSA</b></p>
                <p>SOFTWARE ENGINEER</p>
                <img src='https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/78771649_508375766439785_2815170197160198144_n.jpg?_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=fu77Z72JrTAAX8ENMyu&oh=bc78076dacdffd7565afc5edfe39371d&oe=5EA13456' style={{width:150,height:150,borderRadius:'50%'}}></img>
                <br></br>
                <br></br>
                <label><b>{this.state.like}</b></label>
                <br></br>
                <button className="minus" onClick={this.handleDisLike}><DislikeOutlined /></button>
                <button className="plus" onClick={this.handleLike}><LikeOutlined /></button>
            </Card>
        // }
        )
    }
}




export default CardComponent;