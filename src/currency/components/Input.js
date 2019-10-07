import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',

  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {

  },
}));

const Input = (props) => {
  const classes = styles();
  const {
    handleOnChange,
    value,
    label,

  } = props;


  return (
    <TextField
      InputProps={{
        readOnly: false,
      }}
      id="outlined-name"
      label={label}
      className={classes.textField}
      value={value}
      onChange={handleOnChange}
      margin="normal"
      variant="outlined"
      type='number'
    />
  )
};

export default Input