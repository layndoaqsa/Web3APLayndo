import React from 'react';
import './App.css';
import { Menu } from 'antd';
import {
  ProfileOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Routing from './router/Router';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const { SubMenu } = Menu;
class Navbar extends React.Component{
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
      <div className="Navbar">
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          
          <Menu.Item key="app">
            <AppstoreOutlined />
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key="mail">
            <ProfileOutlined />
            <Link to='/profile-page'>Profile</Link>
          </Menu.Item>
          {/* <SubMenu
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
          </SubMenu> */}
        </Menu>
        <div>
            <Routing/>
        </div>
      </div>
    );
  }

}

export default Navbar;
