import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function Eclipseselect() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
     
      <i style={{cursor:'pointer'}}  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} class="fas fa-ellipsis-h"></i>
      
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
           <MenuItem onClick={handleClose}>Last Month</MenuItem>
        
        <MenuItem onClick={handleClose}>Last 6 months</MenuItem>
        <MenuItem onClick={handleClose}>Last 12 months</MenuItem>
       
      </Menu>
    </div>
  );
}