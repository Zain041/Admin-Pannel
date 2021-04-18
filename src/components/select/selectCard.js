import { FormControl, MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SimpleSelect = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
 
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <FormControl >
      <Select
        displayEmpty
        className="custom-select-mui"
        defaultValue={props.selected}
        inputProps={{ 'aria-label': 'Without label', disableUnderline: true }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Active'}>Active</MenuItem>
        <MenuItem value={'Draft'}>Draft</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SimpleSelect;