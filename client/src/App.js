import './App.css';
import React, { useState } from 'react';
import { Router, navigate } from '@reach/router';
import Main from './views/Main';
import AddPlayer from './views/AddPlayer';
import Update from './views/Update';
import Details from './views/Details';
import Schedule from './views/Schedule';
import Game from './views/Game'

function App() {
  navigate(`/players`);

  // const [gameDay, setGameDay] = useState(1);
  // gameDay={gameDay} setGameDay={setGameDay}
  return (
    <div className={"App"}>
      <h1>Your Roster</h1>
      <Router>
        <Main path='/players' />
        <AddPlayer path='/players/add' />
        <Schedule path="/players/schedule/:gameDay" />
        <Update path="/players/:id/edit" />
        <Details path="/players/:id" />
        {/* <Game path="players/schedule/:gameDay" /> */}
      </Router>
    </div>
  );
}

export default App;
