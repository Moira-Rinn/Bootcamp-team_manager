import './App.css';
import React from 'react';
import { Router, navigate } from '@reach/router';
import Main from './views/Main';
import AddPlayer from './views/AddPlayer';
import Update from './views/Update';
import Details from './views/Details';
import Schedule from './views/Schedule';

function App() {
  navigate(`/players`);

  return (
    <div className={"App"}>
      <h1>Your Roster</h1>
      <Router>
        <Main path='/players' />
        <AddPlayer path='/players/add' />
        <Schedule path="/players/schedule/:gameDay" />
        <Update path="/players/:id/edit" />
        <Details path="/players/:id" />
      </Router>
    </div>
  );
}

export default App;
