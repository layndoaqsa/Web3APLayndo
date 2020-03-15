import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { Menu } from 'antd';
import { Carousel } from 'antd';
import {
  ProfileOutlined,
  InstagramOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';


const { SubMenu } = Menu;
const cardData = [
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

const carouselData = [
  {
    url : require('./images/42745.jpg'),
  },
  {
    url : require('./images/1375.jpg'),
  },
  {
    url : require('./images/6576138.jpg'),
  }
]

class App extends React.Component{
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  render(){
    return(
      <div className="App">
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          
          <Menu.Item key="app" disabled>
            <AppstoreOutlined />
            Home
          </Menu.Item>
          <Menu.Item key="mail">
            <ProfileOutlined />
            Profile
          </Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <SettingOutlined />
                Setting
              </span>
            }
          >
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
        <Carousel autoplay>
          {carouselData.map(data =>
            <div>
              <img src={data.url} style={{width:'100%'}}></img>
            </div>
          )} 
        </Carousel>
        <Card title="This is Card">
          {cardData.map(data =>
            <Card title="" extra={<a href={data.instagram}>Instagram <InstagramOutlined /></a>} style={{width:300, display:'inline-block', margin:'5px'}}>
              <p><b>{data.nama}</b></p>
              <p>{data.job}</p>
              <img src={data.image} style={{width:150,height:150,borderRadius:'50%'}}></img>
            </Card>
          )} 
        </Card>

      </div>
    );
  }

}

export default App;
