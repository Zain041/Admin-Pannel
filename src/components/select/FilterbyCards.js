import { FormControl, MenuItem, Select } from '@material-ui/core';
import React from 'react';

const FilterbyCards = (props) => {
    return (
        <FormControl>
            <Select
                displayEmpty
                style={{fontSize: 'x-small'}}
                className="p-0 m-0 custom-select-mui text-secondary"
                defaultValue={props.selected}
                inputProps={{ 'aria-label': 'Without label', disableUnderline: true }}>

                <MenuItem value={'Total Card Open'}>Total Card Open</MenuItem>
                <MenuItem value={'Draft'}>Draft</MenuItem>
                <MenuItem value={'Expired'}>Expired</MenuItem>
            </Select>
        </FormControl>
    );
};

export default FilterbyCards;