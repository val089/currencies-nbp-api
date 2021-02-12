import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.scss';

import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          {/* <Currencies /> */}
        </Route>
        <Route path="/basket">
          {/* <Favourites /> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
