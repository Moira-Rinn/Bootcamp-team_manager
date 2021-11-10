import { useEffect, useState } from 'react';
import axios from 'axios';

const GetPlayers = () => {
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/players")
      .then(res => {
        setPlayerList(res.data.thePlayers);
        console.log("all players:", res.data.thePlayers)
      })
      .catch(err => console.log(err));
  }, []);

  return (
    playerList
  )
}

export default GetPlayers;