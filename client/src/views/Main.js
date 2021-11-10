import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlayerList from '../components/PlayerList';
import TabPanel from '../components/Tab'
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { navigate } from '@reach/router';

const Main = () => {
  const [playerList, setPlayerList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/players")
      .then(res => {
        setPlayerList(res.data.thePlayers);
        // console.log("all players:", res.data.thePlayers)
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  // const selectDay = day => { setGameDay(day); }

  const removeFromDom = id => {
    setPlayerList(playerList.filter(player => player._id !== id));
  }

  //TAB VARIABLES / FUNCTIONS:

  const [value, setValue] = useState(0);
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
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className={classes.selected} label="List" {...a11yProps(0)} />
          <Tab label="Add Player" {...a11yProps(1)} onClick={(e) =>
            setTimeout(() => navigate('/players/add'), 300)} />
          <Tab label="Schedule" {...a11yProps(2)} onClick={(e) =>
            setTimeout(() => navigate(`/players/schedule/${1}`), 300)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {loaded && <PlayerList playerList={playerList} removeFromDom={removeFromDom} />}
      </TabPanel>
    </Box>
  )
}

export default Main;