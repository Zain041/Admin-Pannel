import React from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';

const Engagement = (props) => {
    return (
        <FormControl>
            <Select
                displayEmpty
                style={{ fontSize: '9px' }}
                className="p-0  m-0 custom-select-mui text-secondary"
                defaultValue={props.selected}
                inputProps={{ 'aria-label': 'Without label', disableUnderline: true }}>
                <MenuItem value={'Total Engagement'}>Total Engagement</MenuItem>
            </Select>
        </FormControl>
    );
};

export default Engagement;