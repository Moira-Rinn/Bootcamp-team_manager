import React, { useState } from 'react'
import PlayerSchedule from '../components/PlayerSchedule';
import { navigate } from '@reach/router';

const Game = (props) => {
  const { playerList, gameDay, setGameDay } = props;
  const [playerObj, setPlayerObj] = useState({});

  return (
    <div>
      <button onClick={(e) => {
        setGameDay(1);
        navigate(`/players/schedule/1`)
      }
      }> Game 2</button>

      <button onClick={(e) => {

        setGameDay(2);
        navigate(`/players/schedule/2`)
      }
      }> Game 2</button>

      <button onClick={(e) => {
        setGameDay(3);
        navigate(`/players/schedule/3`)
      }
      }> Game 2</button>

      {console.log("gameDay:", gameDay)}
      {/* <PlayerSchedule playerList={playerList} gameDay={gameDay} playerObj={playerObj} setPlayerObj={setPlayerObj} /> */}
    </div>

  );
}

export default Game;