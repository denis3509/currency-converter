import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '19px 26px 16px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#3f51b5',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    marginTop: theme.spacing(1),
    padding : theme.spacing(1),
  },
}));

export default function CodeSelect(props) {
  const {codes, handleOnChange, value} = props;

  const classes = useStyles();


  return (
    <form className={classes.root} autoComplete="off">

      <FormControl className={classes.margin}>

        <Select
          value={value}
          onChange={handleOnChange}
          input={<BootstrapInput name="code" id="code-select" />}
        >
          {codes.map(code=>{
            return(
              <MenuItem key={code} value={code}>{code}</MenuItem>
            )
          })}

        </Select>
      </FormControl>

    </form>
  );
}