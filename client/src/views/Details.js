import React from 'react'
import DeleteBtn from '../components/btns/DeleteBtn';
import BackBtn from '../components/btns/BackBtn';
import EditBtn from '../components/btns/EditBtn';

const Details = (props) => {
  const { id } = props;

  return (
    props.location.state.playerList.map((player, idx) => {
      if (player._id === id) {
        return (
          <div key={idx}>
            <p>Name: {player.firstName} {player.lastName}</p>
            <p>Number: {player.number}</p>
            <p>Position: {player.position}</p>
            <p>Height: {player.height}</p>
            <p>Weight: {player.weight}</p>
            <p>Throws: {player.throws}</p>
            <p>Bats: {player.bats}</p>
            <p>Date of Birth: {player.dob}</p>
            <p>Playing Status: {player.isPlaying[1]}</p>
            <p>Playing Status: {player.isPlaying[2]}</p>
            <p>Playing Status: {player.isPlaying[3]}</p>
            <BackBtn />
            <EditBtn id={player._id} />
            <DeleteBtn id={player._id} />
          </div>
        )
      }
    })

  );
}

export default Details;
