import styled from 'styled-components'

export const CardSection = styled.section `
    width: 100%;
`

export const CardContainer = styled.div `
    margin: auto;
`

export const CardRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 1200px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
` 

export const CardColumn = styled.div `
    margin: 5px;
    width: 350px;
    height: 250px;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
        padding-left: 20px;
        padding-right: 20px;
        margin: unset;
        padding-bottom: 5px;
    }
`

export const Image = styled.img `
    width: 100%;
    height: 100%;
`