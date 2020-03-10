import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class User extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    steps: PropTypes.string,
    running: PropTypes.string,
    cycling: PropTypes.string,
    collection: PropTypes.string,
    follower: PropTypes.string,
    following: PropTypes.string,
  }

  render(){
    const {name, steps, running, cycling, collection, follower, following} = this.props;
    return(
      <div class="card">
        <div class="user">
          <div>
            <i class="avatar zmdi zmdi-account"></i>
            <h3>{name}</h3>          
          </div>
          <div class="profiles">
            <div class="profile"><span>{steps}</span>Steps</div>
            <div class="profile"><span>{collection}</span>Collections</div>
            <div class="profile"><span>{running}</span>Running</div>
            <div class="profile"><span>{cycling}</span>Cycling</div>
            <div class="profile"><span>{follower}</span>Followers</div>
            <div class="profile"><span>{following}</span>Following</div>
          </div>
        </div>
      </div>
    )
  }
}
const App = () => {
  return(
    <div>
      <User name="Layndo Safara Aqsa" steps="8763" running="5.1" cycling="30" collection="7" follower="999" following="900"/>
      <User name="Jon Widodo" steps="3401" running="3.1" cycling="24" collection="0" follower="1K" following="920"/>
      <User name="Lely Kodariyati" steps="1286" running="2.3" cycling="0" collection="2" follower="1.7K" following="765"/>
    </div>
  )
}



export default App;
