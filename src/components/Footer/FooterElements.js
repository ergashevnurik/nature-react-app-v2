import styled from 'styled-components'
import footerBg from '../../images/footerBg.jpg'

export const FooterSection = styled.footer `
    width: 100%;
    background: url(${footerBg});
    height: 250px;
    object-fit: cover;
    background-size: cover;
    background-position: center;
`
export const FooterContainer = styled.div `
    margin: auto;
    height: 100%;
    padding: 20px;
`

export const FooterRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 1200px;
    height: 100%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`

export const FooterColumn = styled.div `
    margin-right: auto; 
    
    height: 100%;
`

export const FooterInput = styled.input `
    padding: 12px 20px;
    ouline: none;
    border: none;
`

export const FooterButton = styled.button `
    padding: 12px 20px;
    color: black;
    outline: none;
    border: none;
    background: #fff;
`

export const Footerh1 = styled.h1 `
    font-size: clamp(2rem, 100vw, 5rem);
`

export const FooterH3 = styled.h3 `
    text-align: center;
`