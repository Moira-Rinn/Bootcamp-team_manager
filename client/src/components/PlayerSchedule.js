import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const PlayerSchedule = (props) => {
  const { gameDay } = props;
  const [playerObj, setPlayerObj] = useState({ 1: "Undecided", 2: "Undecided", 3: "Undecided" });
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/players")
      .then(res => {
        setPlayerList(res.data.thePlayers);
        console.log("all players from schedule...:", res.data.thePlayers)
      })
      .catch(err => console.log(err));
  }, [playerObj]);


  const updatePlayer = playerObj => {
    axios.put(`http://localhost:8000/api/players/${playerObj._id}`, playerObj)
      .then(res => {
        setPlayerObj(res.data.isPlaying)
        console.log("res.data:", res.data.isPlaying);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const updateIsPlaying = (player, val) => {
    setPlayerObj(playerObj[gameDay] = val)
    player.isPlaying = playerObj;
    console.log(player);
    updatePlayer(player)
  }

  const useStyles = makeStyles((theme) => ({
    container: {
      width: '99%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: theme.spacing(2),
    },
    wrapper: {
      width: '95%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme.spacing(2),
    },
    txtColor: {
      padding: '0 10px',
      marginTop: '2px',
      display: 'flex',
      color: '#000',
      textDecoration: 'none'
    }
  }));
  const classes = useStyles();
  const { txtColor, container, wrapper } = classes;

  return (
    <div className={container}>
      <div className={wrapper}>
        <h2>Schedule:</h2>
      </div >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Player</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {playerList.map((player, idx) => {
              const { isPlaying } = player

              return (
                <TableRow
                  key={player._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Link className={txtColor} to={`/players/${player._id}`}>
                      <h3>{player.firstName} {player.lastName}</h3>
                    </Link>
                  </TableCell>
                  <TableCell component="th" scope="row">

                    <RadioGroup
                      aria-label="status"
                      name="isPlaying"
                      value={isPlaying[gameDay]}
                      onChange={(e) => { updateIsPlaying(player, e.target.value) }}
                    >
                      <h4>Status</h4>
                      <div className={wrapper}>
                        <FormControlLabel value="Active" control={<Radio />} label="Active" />
                        <FormControlLabel value="Inactive" control={<Radio />} label="Inactive" />
                        <FormControlLabel value="Undecided" control={<Radio />} label="Undecided" />
                      </div>
                    </RadioGroup>
                  </TableCell>
                </TableRow>
              )
            })
            }
          </TableBody >
        </Table >
      </TableContainer >
    </div >
  )
}

export default PlayerSchedule;