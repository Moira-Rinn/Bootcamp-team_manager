import React from 'react';
import { navigate } from '@reach/router';
import NavBtns from './btns/NavBtns';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PlayerList = (props) => {
  const { playerList, removeFromDom } = props;

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
    card: {
      width: '75%',
      backgroundColor: '#d7a8e6',
      margin: '.25%',
      padding: '.25%',
    },
    orangeCard: {
      width: '99%',
      maxHeight: '3vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: '3px solid #29002e',
      borderRadius: '5px',
      backgroundColor: '#e38d68',
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
  const { container, wrapper } = classes;

  return (
    <div className={container}>
      <div className={wrapper}>
        <h2>Players:</h2>
      </div >

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell>Player</TableCell>
              <TableCell align="right">Position</TableCell>
              <TableCell align="right">Height&nbsp;(in)</TableCell>
              <TableCell align="right">Weight&nbsp;(lbs)</TableCell>
              <TableCell align="right">Throws</TableCell>
              <TableCell align="right">Bats</TableCell>
              <TableCell align="right">Date of Birth</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {playerList.map((player, idx) => {
              return (
                <TableRow
                  key={player._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {player.number}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <h3 onClick={() => navigate(`/players/${player._id}`, { state: { playerList } })}>{player.firstName} {player.lastName} </h3>
                  </TableCell>
                  <TableCell align="right">{player.position}</TableCell>
                  <TableCell align="right">{player.height}</TableCell>
                  <TableCell align="right">{player.weight}</TableCell>
                  <TableCell align="right">{player.throws}</TableCell>
                  <TableCell align="right">{player.bats}</TableCell>
                  <TableCell align="right">{player.dob}</TableCell>
                  <TableCell align="right"> <NavBtns id={player._id} successCallback={() => removeFromDom(player._id)} /></TableCell>
                </TableRow>
              )
            })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div >
  )
}

export default PlayerList;