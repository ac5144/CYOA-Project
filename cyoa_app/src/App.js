import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import CreateStoryTest from './test-comps/CreateStoryTest';
import NavigationTest from './test-comps/NavigationTest';
import ListStoriesTest from './test-comps/ListStoriesTest';

class App extends Component {
    render() {

        return (
            <div className="App">
                <NavigationTest />
                <div className="container">
                    <Switch>
                        <Route path="/add" component={CreateStoryTest} />
                        <Route path="/" component={ListStoriesTest} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
