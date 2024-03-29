import React from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';

const SortCards = (props) => {
    return (
        <FormControl>
            <Select
                displayEmpty
                style={{ fontSize: '9px' }}
                className="ms-4 p-0 m-0 custom-select-mui text-secondary"
                defaultValue={props.selected}
                inputProps={{ 'aria-label': 'Without label', disableUnderline: true }}>
                
                <MenuItem value={'All Cards'}>All Cards</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SortCards;