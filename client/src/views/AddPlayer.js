import React, { useState } from 'react';
import axios from 'axios';
import PlayerForm from '../components/PlayerForm';
import TabPanel from '../components/Tab';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { navigate } from '@reach/router';

const AddPlayer = () => {
  const [playerList, setPlayerList] = useState([]);
  const [errors, setErrors] = useState([]);

  const addPlayer = (playerObj) => {
    const { player } = playerObj

    axios.post('http://localhost:8000/api/players', player)
      .then(res => {
        setPlayerList([...playerList, res.data])
        navigate(`/players`);
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

  //TAB VARIABLES / FUNCTIONS:

  const [value, setValue] = useState(1);
  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Box sx={{ width: '100%' }} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="List" {...a11yProps(0)} onClick={(e) => setTimeout(() => navigate('/players/'), 300)} />
          <Tab label="Add Player" {...a11yProps(1)} />
          <Tab label="Schedule" {...a11yProps(2)} onClick={(e) =>
            setTimeout(() => navigate('/players/schedule'), 300)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={1} >
        {errors.map((err, index) => <p key={index}>{err}</p>)}
        <PlayerForm
          onSubmitProp={addPlayer}
          initialPlayer={{
            playerObj: {
              firstName: "",
              lastName: "",
              height: 0,
              weight: 0,
              throws: "",
              bats: "",
              dob: "mm/dd/yyyy",
              number: 0,
              position: "",
              isPlaying: { 1: 'Undecided', 2: 'Undecided', 3: 'Undecided' }
            }
          }}
        />
      </TabPanel>
    </Box >
  )
}

export default AddPlayer;