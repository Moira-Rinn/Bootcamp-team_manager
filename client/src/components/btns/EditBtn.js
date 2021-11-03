import { Link } from "@reach/router";
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@mui/icons-material/Edit';

const EditBtn = (props) => {

  const { id } = props;

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
    <Link to={`/players/${id}/edit`}>
      <Button variant='outlined' size='small' className={btn}> <EditIcon /> </Button>
    </Link>
  )
}

export default EditBtn;