import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavbarMenu = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                
                <Navbar.Brand href="#home">Movies</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="mr-auto">                   
                    <NavLink className="show-movies-nav" to="/">Movies</NavLink>
                    <NavLink className="add-movie-nav" to="/addmovie">Add Movie</NavLink>      
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavbarMenu
