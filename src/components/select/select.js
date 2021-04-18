import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SimpleSelect = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdown, setDropdown] = useState('Active');

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const handleDropDown = () => alert('');
  return (
    <Dropdown className="bg-white ps-4" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle style={{ backgroundColor: '#F5F6F7', border: '1px solid #d7dad7d5' }} className=" text-secondary " caret>
        {props.label} &nbsp; &nbsp;
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem text>Dropdown Item Text</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default SimpleSelect;