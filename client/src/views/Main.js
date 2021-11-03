import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlayerList from '../components/PlayerList';
import { makeStyles } from '@material-ui/core/styles';

const Main = () => {
  const [playerList, setPlayerList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/players")
      .then(res => {
        setPlayerList(res.data.thePlayers);
        console.log("all players:", res.data.thePlayers)
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  const removeFromDom = id => {
    setPlayerList(playerList.filter(player => player._id !== id));
  }

  const useStyles = makeStyles((theme) => ({
    card: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#d7a8e6',
      margin: theme.spacing(1),
      borderRadius: '10px'
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.card}>
      {
        loaded && <PlayerList
          list={playerList}
          removeFromDom={removeFromDom}
        />
      }
    </div>
  )
}

export default Main;