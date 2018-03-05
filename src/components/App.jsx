import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Locations from './Locations';

const App = () => (
  <div className="app">
    <Switch>
      <Route path="/" component={Locations} />
    </Switch>
  </div>
);

export default App;
