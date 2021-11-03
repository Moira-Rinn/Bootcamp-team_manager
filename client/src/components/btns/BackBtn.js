import { Link } from "@reach/router";
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const BackBtn = (props) => {

  const useStyles = makeStyles((theme) => ({

    btn: {
      margin: '0 2px',
      color: '#000',
      background: '#d64118',
      border: '2px solid black',
      borderRadius: '500px'
    }
  }));

  const classes = useStyles();
  const { btn } = classes;

  return (
    <Link to={`/players/`}>
      <Button variant='outlined' size='small' className={btn}>
        <ArrowBackIosNewIcon />
      </Button>
    </Link>
  )
}

export default BackBtn;