import React from 'react'
import {NavbarSection, NavbarContainer, NavbarLogo, NavbarBars} from './NavbarElements'

const Navbar = () => {
    return (
        <NavbarSection>
            <NavbarContainer>
                <NavbarLogo to="/">
                    Logo
                </NavbarLogo>
                <NavbarBars>
                    Bars
                </NavbarBars>
            </NavbarContainer>
        </NavbarSection>
    )
}

export default Navbar
