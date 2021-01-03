import styled from 'styled-components';
import ImageBg from '../../images/heroImg.jpg';

export const HeroSection = styled.section `
    position: relative;
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${ImageBg});
    width: 100%;
    height: 100vh;
    object-fit: cover;
    background-size: cover;
`

export const HeroContainer = styled.div `
    
`

export const HeroCard = styled.div `
    position: absolute;
    width: 750px;
    height: 450px;
    border: 3px solid white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 50px;

    @media screen and (max-width: 768px) {
        width: 100%;
        border: none;
        padding: 20px;
    }
`

export const HeroSpan = styled.p `
    text-align: center;
    color: #fff;

    letter-spacing: 5px;
    text-align: center;
    width: 100%;
    margin-bottom: 10px;
`

export const HeroH1 = styled.h1 `
    font-size: clamp(1.2rem, 5vw, 3rem);
    color: white;
    text-align: center;
    margin-bottom: 20px;
`

export const HeroP = styled.p `
    color: #fff;
    text-align: center;
`