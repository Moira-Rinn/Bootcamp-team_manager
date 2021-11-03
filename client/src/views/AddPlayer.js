import React, { useState } from 'react';
import axios from 'axios';
import PlayerForm from '../components/PlayerForm';
import { navigate } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';

const AddPlayer = () => {
  const [playerList, setPlayerList] = useState([]);
  const [errors, setErrors] = useState([]);

  const addPlayer = (playerObj) => {
    const { player } = playerObj
    console.log("this is player.player:", player);

    axios.post('http://localhost:8000/api/players', player)
      .then(res => {
        console.log("This is res:", res.data);
        setPlayerList([...playerList, res.data])
        navigate(`/players`);
      })
      .catch(err => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        console.log("this is err:", err)
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr);
      })
  }

  const useStyles = makeStyles((theme) => ({
    container: {
      textAlign: 'left',
      backgroundColor: '#eadaf2',
      padding: theme.spacing(1),
      borderRadius: '5px'
    },
    txtColor: {
      padding: '10px',
      margin: '10px',
      color: '#29002e',
    }
  }));

  const classes = useStyles();
  const { txtColor, container } = classes;

  return (
    <Card className={container}>
      <h2 className={txtColor}>Add New Player:</h2>
      {errors.map((err, index) => <p key={index}>{err}</p>)}
      <PlayerForm
        onSubmitProp={addPlayer}
        initialPlayer={{
          playerObj: {
            firstName: "",
            lastName: "",
            height: "",
            weight: "",
            throws: "",
            bats: "",
            dob: "",
            number: "",
            position: ""
          }
        }}
      />
    </Card>
  )
}

export default AddPlayer;