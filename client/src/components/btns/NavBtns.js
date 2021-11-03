import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";
import { makeStyles } from '@material-ui/core/styles';

const NavBtns = (props) => {

  const { id, successCallback } = props;

  const useStyles = makeStyles((theme) => ({
    layout: {
      marginTop: '8px',
      padding: '0'
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <DeleteBtn id={id} successCallback={successCallback} />
      <EditBtn id={id} />
    </div>
  )
}

export default NavBtns;