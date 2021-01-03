import styled from 'styled-components'

export const InfoSection = styled.section `
    width: 100%;
`

export const InfoContainer = styled.div `
    margin: auto;
`

export const InfoRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: lightyellow;
`

export const InfoColumn = styled.div `
    width: 550px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }

`

export const InfoCard = styled.div `
    padding: 25px;
`

export const InfoNumbers = styled.h1 `
    font-size: clamp(3rem, 100vw, 10rem);
`

export const InfoH1 = styled.h3 `
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
`

export const InfoP = styled.p `

`