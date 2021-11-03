import './App.css';
import React from 'react';
import { Router, navigate } from '@reach/router';
import Main from './views/Main';
import AddPlayer from './views/AddPlayer';
import Update from './views/Update';

function App() {
  navigate(`/players`);

  return (
    <div className={"App"}>
      <h1>Your Team</h1>
      <Router>
        <Main path='/players' />
        <AddPlayer path='/players/add' />
        <Update path="/players/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
