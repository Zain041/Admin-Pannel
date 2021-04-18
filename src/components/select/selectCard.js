import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SimpleSelect = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown  className="bg-white ps-4"isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle style={{backgroundColor:'#fff',border:'transparent',marginTop:'-50px'}} className=" text-secondary " caret>
        Draft &nbsp; &nbsp;
      </DropdownToggle>
      <DropdownMenu>
       
        <DropdownItem>Draft</DropdownItem>
        <DropdownItem>Active</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default SimpleSelect;