import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'

import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom';



export default function NavBar() {
    const [activeHome, setActiveHome] = useState("");
    const [activeBio, setActiveBio] = useState("");
    const [activeAna, setActiveAna] = useState("");
    const [activeDig, setActiveDig] = useState("");
    const [activeContact, setActiveContact] = useState("");
    const activatedHome = () => {
        setActiveHome("activeNav")
        setActiveBio("")
        setActiveAna("")
        setActiveDig("")
        setActiveContact("")
    }
    const activatedBio = () => {
        setActiveHome("")
        setActiveBio("activeNav")
        setActiveAna("")
        setActiveDig("")
        setActiveContact("")
    }
    const activatedAna = () => {
        setActiveHome("")
        setActiveBio("")
        setActiveAna("activeDrop")
        setActiveDig("")
        setActiveContact("")
    }
    const activatedDig = () => {
        setActiveHome("")
        setActiveBio("")
        setActiveAna("")
        setActiveDig("activeDrop")
        setActiveContact("")
    }
    const activatedContact = () => {
        setActiveHome("")
        setActiveBio("")
        setActiveAna("")
        setActiveDig("")
        setActiveContact("activeNav")
    }

    const activeDropAn = () =>{
        setActiveAna("activeDrop")
    }
    const activeDropDig = () =>{
        setActiveDig("activeDrop")
    }
    return (
        <Navbar collapseOnSelect expand="lg" id="navBar">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Link to={`/home`} className={activeHome} onClick={activatedHome}>Home</Link>
                <Link to={`/bio`} className={activeBio} onClick={activatedBio}>Bio</Link>
                <NavDropdown title="Analogicas" id="collasible-nav-dropdown" className={activeAna} onClick={activeDropAn}>
                    <Link to={``} onClick={activatedAna}>Retratos</Link>
                    <Link to={``} onClick={activatedAna}>Naturaleza</Link>
                    <Link to={``} onClick={activatedAna}>Doble Exposicion</Link>
                    <Link to={``} onClick={activatedAna}>Arquitectura</Link>
                    <Link to={``} onClick={activatedAna}>Callejera</Link>
                </NavDropdown>
                <NavDropdown title="Digitales" id="collasible-nav-dropdown" className={activeDig}  onClick={activeDropDig}>
                    <Link to={``} onClick={activatedDig}>Retratos</Link>
                    <Link to={``} onClick={activatedDig}>Naturaleza</Link>
                    <Link to={``} onClick={activatedDig}>Doble Exposicion</Link>
                    <Link to={``} onClick={activatedDig}>Arquitectura</Link>
                    <Link to={``} onClick={activatedDig}>Callejera</Link>
                </NavDropdown>
                <Link to={`/contact`} className={activeContact} onClick={activatedContact} >Contact</Link>
            </Navbar.Collapse>
        </Navbar>
    )

}