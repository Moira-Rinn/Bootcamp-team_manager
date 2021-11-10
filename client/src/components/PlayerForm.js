import React, { useState } from 'react';
import { navigate } from '@reach/router';
import SubmitBtn from './btns/SubmitBtn';
import BackBtn from './btns/BackBtn';
import DeleteBtn from './btns/DeleteBtn';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Card } from '@material-ui/core';

const PlayerForm = (props) => {

  const { initialPlayer, onSubmitProp, id } = props;
  const { playerObj } = initialPlayer;

  const [player, setPlayer] = useState({
    firstName: playerObj.firstName,
    lastName: playerObj.lastName,
    height: playerObj.height,
    weight: playerObj.weight,
    throws: playerObj.throws,
    bats: playerObj.bats,
    dob: playerObj.dob,
    number: playerObj.number,
    position: playerObj.position,
    isPlaying: playerObj.isPlaying
  });

  //RADIO BTN FUNCTIONS:

  const onSubmitHandler = e => {
    e.preventDefault();
    onSubmitProp({ player });
  }

  const useStyles = makeStyles((theme) => ({
    container: {
      textAlign: 'left',
      backgroundColor: '#d7a8e6',
      padding: theme.spacing(1),
      border: '3px solid #29002e',
      borderRadius: '5px'
    },
    wrapper: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme.spacing(2),
    },
    card: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '80%',
      backgroundColor: '#d7a8e6',
      margin: '.25%',
      padding: '.25%',
      borderRadius: '5px'
    },
    orangeCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '55%',
      border: '1px solid #29002e',
      borderRadius: '5px',
      padding: '10px',
      margin: '10px',
      backgroundColor: '#e38d68',
    },
    txtColor: {
      padding: '10px',
      margin: '10px',
      display: 'flex',
      color: '#000',
      textDecoration: 'none'
    }
  }));

  const classes = useStyles();
  const { card, orangeCard, txtColor, container, wrapper } = classes;

  return (
    <div>
      <form className={container} onSubmit={onSubmitHandler}>
        <div className={wrapper}>
          <h3>Enter Player Information:</h3>

        </div>
        <div className={wrapper}>
          <Card className={card} >
            <Card className={orangeCard}>
              <TextField
                required
                id="outlined-required"
                label="First"
                name="playerFirstName"
                value={player.firstName}
                onChange={(e) => { setPlayer({ ...player, firstName: e.target.value }) }}
                className={txtColor}
              />
              <TextField
                required
                id="outlined-required"
                label="Last"
                name="playerLastName"
                value={player.lastName}
                onChange={(e) => { setPlayer({ ...player, lastName: e.target.value }) }}
                className={txtColor}
              />
              <TextField
                required
                id="outlined-required"
                label="Height"
                name="playerHeight"
                value={player.height}
                onChange={(e) => { setPlayer({ ...player, height: e.target.value }) }}
                className={txtColor}
              />
              <TextField
                required
                id="outlined-required"
                label="Weight"
                name="playerWeight"
                value={player.weight}
                onChange={(e) => { setPlayer({ ...player, weight: e.target.value }) }}
                className={txtColor}
              />
              <RadioGroup
                aria-label="throws"
                name="throws"
                value={player.throws}
                onChange={(e) => { setPlayer({ ...player, throws: e.target.value }) }}
              >
                <h4>Throws</h4>
                <div style={{ display: 'flex' }}>
                  <FormControlLabel value="Right" control={<Radio />} label="Right" />
                  <FormControlLabel value="Left" control={<Radio />} label="Left" />
                  <FormControlLabel value="Both" control={<Radio />} label="Both" />
                </div>
              </RadioGroup>
              <RadioGroup
                aria-label="bats"
                name="bats"
                value={player.bats}

                onChange={(e) => { setPlayer({ ...player, bats: e.target.value }) }}
              >
                <h4>Bats</h4>
                <div style={{ display: 'flex' }}>
                  <FormControlLabel value="Right" control={<Radio />} label="Right" />
                  <FormControlLabel value="Left" control={<Radio />} label="Left" />
                  <FormControlLabel value="Both" control={<Radio />} label="Both" />
                </div>
              </RadioGroup>

              <TextField
                required
                id="outlined-required"
                label="Date of Birth"
                name="playerDob"
                value={player.dob}
                onChange={(e) => { setPlayer({ ...player, dob: e.target.value }) }}
                className={txtColor}
              />
              <TextField
                required
                id="outlined-required"
                label="Number"
                name="playerNumber"
                value={player.number}
                onChange={(e) => { setPlayer({ ...player, number: e.target.value }) }}
                className={txtColor}
              />
              <TextField
                required
                id="outlined-required"
                label="Position"
                name="playerPosition"
                value={player.position}
                onChange={(e) => { setPlayer({ ...player, position: e.target.value }) }}
                className={txtColor}
              />
            </Card>
          </Card>
        </div>
        <div>
          {player.firstName.length > 2 && player.lastName.length > 2 ? <SubmitBtn /> : null}
          <BackBtn />
          {id ? <DeleteBtn id={id} successCallback={() => navigate(`/players`)} /> : null}
        </div>
      </form>
    </div>
  )
}

export default PlayerForm;