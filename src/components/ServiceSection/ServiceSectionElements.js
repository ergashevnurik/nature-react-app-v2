import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ServiceSection = styled.section `
    width: 100%;
`

export const ServiceContainer = styled.div `
    margin: auto;
`

export const ServiceRow = styled.div `
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const ServiceColumn = styled.div `
    width: 550px;
    order: ${({reverse}) => (reverse ? '2' : '1')};

    @media screen and (max-width: 768px) {
        width: 100%;
    }
    padding: 20px;
`

export const ServiceColumnRight = styled.div `
    width: 550px;
    order: ${({reverse}) => (reverse ? '1' : '2')};

    @media screen and (max-width: 768px) {
        width: 100%;
        order: ${({reverse}) => (reverse ? '2' : '1')};
    }
    padding: 20px;
`

export const Image = styled.img `
    width: 100%;
    height: 100%;
`

export const Button = styled(Link) `
    text-decoration: none;
    color: black;
    border: 2px solid black;
    padding: 12px 20px;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;

    &:hover {
        background: black;
        color: white;
    }
`

export const Desc = styled.h1 `
    margin-bottom: 30px;
    font-size: clamp(2rem, 100vw, 3rem);
`
