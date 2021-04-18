import React, { useState } from "react";
import DatePicker from "react-datepicker";
import '../../assets/css/dashboardatepicker.css'

import "react-datepicker/dist/react-datepicker.css";
import { Box, InputAdornment, TextField } from "@material-ui/core";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function Datepickers() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker selected={startDate} onChange={date => setStartDate(date)}
      customInput={
        <TextField
          className="custom-date-picker"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Box className="sorting-btn">
                  <Box component="div" className="up-arrow"></Box>
                  <Box component="div" className="down-arrow" ></Box>
                </Box>
              </InputAdornment>
            ),
            disableUnderline: true 
          }}
        />
      } />
  );
};