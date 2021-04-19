import { FormControl, MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const FilterDateRange = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdown, setDropdown] = useState('Active');

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <FormControl >
            <Select
                displayEmpty
                style={{color: '#7f48f8', marginTop: 0, marginLeft: '.25rem'}}
                className="custom-select-mui"
                defaultValue={10}
                inputProps={{ 'aria-label': 'Without label', disableUnderline: true }}>

                <MenuItem value={10}>This Week</MenuItem>
                <MenuItem value={20}>This Month</MenuItem>
                <MenuItem value={30}>This Year</MenuItem>
            </Select>
        </FormControl>
    );
}

export default FilterDateRange;