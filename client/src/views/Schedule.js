import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlayerSchedule from '../components/PlayerSchedule';
import TabPanel from '../components/Tab'
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { navigate } from '@reach/router';


const Schedule = () => {
  const [playerList, setPlayerList] = useState([]);
  const [gameDay, setGameDay] = useState(1);

  useEffect(() => {
    axios.get("http://localhost:8000/api/players")
      .then(res => {
        setPlayerList(res.data.thePlayers);
        console.log("all players:", res.data.thePlayers)
      })
      .catch(err => console.log(err));
  }, []);

  //TAB VARIABLES / FUNCTIONS:

  const [value, setValue] = useState(2);
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
    <div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="List" {...a11yProps(0)} onClick={(e) => setTimeout(() => navigate('/players'), 300)} />
            <Tab label="Add Player" {...a11yProps(1)} onClick={(e) => setTimeout(() => navigate('/players/add'), 300)} />
            <Tab label="Schedule" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={2} >
          <div>
            <Button
              variant={
                gameDay === 1 ? 'contained' : 'outlined'
              }
              style={
                {
                  margin: '5px'
                }
              }
              onClick={(e) => {
                setGameDay(1);
                navigate(`/players/schedule/1`)
              }
              }> Game 1</Button>

            <Button
              variant={
                gameDay === 2 ? 'contained' : 'outlined'
              }
              style={
                {
                  margin: '5px'
                }
              }
              onClick={(e) => {
                setGameDay(2);
                navigate(`/players/schedule/2`)
              }
              }> Game 2</Button>

            <Button
              variant={
                gameDay === 3 ? 'contained' : 'outlined'
              }
              style={
                {
                  margin: '5px'
                }
              }
              onClick={(e) => {
                setGameDay(3);
                navigate(`/players/schedule/3`)
              }
              }> Game 3</Button>
          </div>
          <PlayerSchedule playerList={playerList} gameDay={gameDay} />
        </TabPanel>
      </Box >
    </div>
  )
}

export default Schedule;