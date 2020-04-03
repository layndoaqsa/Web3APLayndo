import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Card from '../container/Card/Card';
import CarouselComponent from '../component/CarouselComponent/CarouselComponent';

class Routing extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Card}/>
                <Route exact path="/profile-page" component={CarouselComponent}/>
            </Switch>
        );
    }
}

export default Routing;