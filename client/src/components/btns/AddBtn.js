import { Link } from "@reach/router";
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

const AddBtn = (props) => {

  const useStyles = makeStyles((theme) => ({
    btn: {
      margin: '1px',
      maxHeight: '25xp',
      fontSize: '14px',
      fontWeight: '700',
      color: '#29002e',
      border: '2px solid #29002e',
      borderRadius: '500px'
    },
  }));

  const classes = useStyles();
  const { btn } = classes;

  return (
    <Link to={`/players/add`}>
      <Fab size='medium'>
        <AddIcon className={btn} />
      </Fab>
    </Link>
  )
}
export default AddBtn;