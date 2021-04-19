import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DatePicker from "react-datepicker";
import '../../assets/css/dashboardatepicker.css'

import "react-datepicker/dist/react-datepicker.css";
import { Box, Icon, InputAdornment, TextField } from "@material-ui/core";
import { DateRange } from '@material-ui/icons';

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
    width: 200,
    varient: 'outlined',

  },
}));

export default function DateAndTimePickers() {
  const classes = useStyles();
  const [startDate, setStartDate] = React.useState(new Date());
  return (
    <form className={classes.container} noValidate>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)}
        customInput={
          <TextField
            fullWidth
            className={classes.textField}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Icon style={{cursor: 'pointer', color: '#7F48F7'}}>
                    <DateRange />
                  </Icon>
                </InputAdornment>
              ),
              disableUnderline: true
            }}
          />
        } />
    </form>
  );
}
