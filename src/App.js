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
        <Route path="/currencies-nbp-api" exact>
          <Currencies />
        </Route>
        <Route path="/currencies-nbp-api/favourites">
          <Favourites />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
