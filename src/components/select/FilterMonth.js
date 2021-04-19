import { FormControl, MenuItem, Select } from '@material-ui/core';
import React from 'react';

const FilterMonth = (props) => {
    return (
        <FormControl>
            <Select
                displayEmpty
                style={{fontSize: 'x-small'}}
                className="ml-1 p-0 m-0 custom-select-mui text-secondary"
                defaultValue={props.selected}
                inputProps={{ 'aria-label': 'Without label', disableUnderline: true }}>
                <MenuItem value={'Months'}>Months</MenuItem>
                <MenuItem value={'Jan'}>Jan</MenuItem>
                <MenuItem value={'Feb'}>Feb</MenuItem>
            </Select>
        </FormControl>
    );
};

export default FilterMonth;