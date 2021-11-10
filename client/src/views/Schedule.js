import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlayerSchedule from '../components/PlayerSchedule';
import TabPanel from '../components/Tab'
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { navigate } from '@reach/router';


const Schedule = (props) => {
  // const { gameDay, setGameDay } = props;
  const [playerList, setPlayerList] = useState([]);
  const [gameDay, setGameDay] = useState(1);
  // const [playerObj, setPlayerObj] = useState({ 1: "Undecided", 2: "Undecided", 3: "Undecided" });


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

  const useStyles = makeStyles((theme) => ({
    card: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#d7a8e6',
      margin: theme.spacing(1),
      border: '2px solid black',
      borderRadius: '10px'
    },
    selected: {
      fontSize: '18px'
    }
  }));

  const classes = useStyles();

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="List" {...a11yProps(0)} onClick={(e) => setTimeout(() => navigate('/players'), 300)} />
            <Tab label="Add Player" {...a11yProps(1)} onClick={(e) => setTimeout(() => navigate('/players/add'), 300)} />
            <Tab className={classes.selected} label="Schedule" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={2} >
          <div>
            <button onClick={(e) => {
              setGameDay(1);
              navigate(`/players/schedule/1`)
            }
            }> Game 1</button>

            <button onClick={(e) => {

              setGameDay(2);
              navigate(`/players/schedule/2`)
            }
            }> Game 2</button>

            <button onClick={(e) => {
              setGameDay(3);
              navigate(`/players/schedule/3`)
            }
            }> Game 3</button>

            {console.log("gameDay:", gameDay)}
            {/* <PlayerSchedule playerList={playerList} gameDay={gameDay} playerObj={playerObj} setPlayerObj={setPlayerObj} /> */}
          </div>
          <PlayerSchedule playerList={playerList} gameDay={gameDay} />
        </TabPanel>
      </Box >
    </div>
  )
}
// gameDay={gameDay} setGameDay={setGameDay}
export default Schedule;