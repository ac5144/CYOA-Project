import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import CreateStoryTest from './test-comps/CreateStoryTest';
import NavigationTest from './test-comps/NavigationTest';
import ListStoriesTest from './test-comps/ListStoriesTest';

function App() {
  return (
    <div className="App">
      <NavigationTest />
      <Switch>
        <Route path="/add" component={CreateStoryTest} />
        <Route path="/" component={ListStoriesTest} />
      </Switch>
    </div>
  );
}

export default App;
