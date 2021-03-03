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
        <Route path="/currencies-nbp-api" component={Currencies} exact />
        <Route path="/currencies-nbp-api/favourites" component={Favourites} />
      </Switch>
    </Router>
  );
}

export default App;
