import { FormControl, MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SimpleSelect = (props) => {
  const [selected, setSelectedItem] = useState(props.selected);
  const handleChange = (e) => {
    setSelectedItem(e.target.value);
  }
  return (
    <div>
      <i class="fas fa-circle " style={{ color: 
        selected === 'Active' ? '#00dc54' : selected === 'Draft' ? '#808080' :
        selected === 'Expired' ? '#FF3B30' :  selected === 'Pending' ? '#077E8C' : 'white'
       }}></i> 
      <FormControl >
      <Select
        displayEmpty
        className="custom-select-mui"
        defaultValue={props.selected}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'Without label', disableUnderline: true }}>

        <MenuItem value={'Active'}>Active</MenuItem>
        <MenuItem value={'Draft'}>Draft</MenuItem>
        <MenuItem value={'Expired'}>Expired</MenuItem>
        <MenuItem value={'Pending'}>Pending Approval</MenuItem>
      </Select>
    </FormControl>
    </div>
  );
}

export default SimpleSelect;