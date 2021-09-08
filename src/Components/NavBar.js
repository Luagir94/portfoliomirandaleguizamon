import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom';



export default function NavBar() {

    return (
        <Navbar collapseOnSelect expand="lg" id="navBar">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Link to={`/home`} >Home</Link>
                <Link to={`/bio`} >Bio</Link>
                <NavDropdown title="Analogicas" id="collasible-nav-dropdown">
                <Link to={``} >Retratos</Link>
                <Link to={``} >Naturaleza</Link>
                <Link to={``} >Doble Exposicion</Link>
                <Link to={``} >Arquitectura</Link>
                <Link to={``} >Callejera</Link>
                </NavDropdown>
                <NavDropdown title="Digitales" id="collasible-nav-dropdown">
                <Link to={``} >Retratos</Link>
                <Link to={``} >Naturaleza</Link>
                <Link to={``} >Doble Exposicion</Link>
                <Link to={``} >Arquitectura</Link>
                <Link to={``} >Callejera</Link>
                </NavDropdown>
                <Link to={`/contact`} >Contact</Link>
            </Navbar.Collapse>
        </Navbar>
    )

}