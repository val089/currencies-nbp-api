import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import { Currencies, Favourites } from './components/containers';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/home" exact>
          <Currencies />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
