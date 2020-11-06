import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

const Appbar = (props) => {

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link to ="/"className="navbarBrand">At Quest</Link>
      </Navbar>
    </div>
  );
}

export default Appbar;