import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarSection = styled.nav `
    position: absolute;
    width: 100%;
    z-index: 2;
`

export const NavbarContainer = styled.div `
    display: flex;
    margin: auto;
    width: 80%;
    padding: 25px;
`

export const NavbarLogo = styled(Link) `
    text-transform: uppercase;
    color: #fff;
    font-size: 18px;
    text-decoration: none;
`

export const NavbarBars = styled.div `
    margin-left: auto;
    text-transform: uppercase;
    color: #fff;
    font-size: 18px;
`