import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import PlayerForm from '../components/PlayerForm';

const Update = (props) => {
  const { id } = props;
  const [player, setPlayer] = useState();
  const [errors, setErrors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/players/${id}`)
      .then(res => {
        setPlayer(res.data);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, [id]);

  const updatePlayer = playerObj => {
    const { player } = playerObj;
    axios.put(`http://localhost:8000/api/players/${id}`, player)
      .then(res => {
        console.log(res);
        navigate(`/players/`);
      })
      .catch(err => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr);
      })
  }
  console.log("this is Update:", player)
  return (
    <div>
      <h1>Update Player:</h1>
      {errors.map((err, index) => <p key={index}>{err}</p>)}
      {loaded && (
        <PlayerForm
          onSubmitProp={updatePlayer}
          initialPlayer={{
            playerObj: {
              firstName: player.firstName,
              lastName: player.lastName,
              height: player.height,
              weight: player.weight,
              throws: player.throws,
              bats: player.bats,
              dob: player.dob,
              number: player.number,
              position: player.position
            }
          }}
          id={id}
        />
      )}
    </div>
  )
}

export default Update;