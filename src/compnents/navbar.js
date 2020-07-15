import React  from 'react';
import { Navbar, Nav, Collapse } from 'bootstrap-4-react';
import {Link} from 'react-router-dom';          
export default function MainNavbar(){
    return (
      <Navbar expand="lg" light bg="light">
        <Navbar.Brand href="#">Shoe App</Navbar.Brand>
        <Navbar.Toggler target="#navbarNav" />
        <Collapse navbar id="navbarNav">
          <Navbar.Nav mx="auto">
            <Nav.ItemLink active><Link to="/">Home</Link></Nav.ItemLink>
            <Nav.ItemLink><Link to="/product">Product</Link></Nav.ItemLink>
          </Navbar.Nav>
        </Collapse>
        {/* <h5>{countData}</h5> */}
      </Navbar>
    )
  }


