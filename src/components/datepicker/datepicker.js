import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  underline: {
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    }
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
 
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    varient:'outlined',
    
  },
}));

export default function DateAndTimePickers() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
      
      InputProps={{disableUnderline: true} }
        id="datetime-local"
        label=""
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={`${classes.textField} ${classes.icon}`}
        varient="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
