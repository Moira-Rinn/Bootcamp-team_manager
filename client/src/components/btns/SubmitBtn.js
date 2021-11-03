import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const SubmitBtn = (props) => {

  const useStyles = makeStyles((theme) => ({

    btn: {
      margin: '0 2px',
      color: '#000',
      background: '#97f09d',
      border: '2px solid black',
      borderRadius: '500px'
    }
  }));

  const classes = useStyles();
  const { btn } = classes;

  return (
    <Button variant='outlined' size='small' type="submit" value='Submit' className={btn}>
      <TaskAltIcon />
    </Button>
  )
}

export default SubmitBtn;