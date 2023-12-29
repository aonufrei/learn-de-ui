import React from "react"

import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

const Header = ({ title }) => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">{title}</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header
