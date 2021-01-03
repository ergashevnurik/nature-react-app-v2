import React from 'react'
import { Footerh1, FooterH3, FooterButton, FooterColumn, FooterContainer, FooterInput, FooterRow, FooterSection } from './FooterElements'

const Footer = () => {
    return (
        <FooterSection>
            <FooterContainer>
                <FooterRow>
                    <FooterColumn>
                        <Footerh1>Subscribe</Footerh1>
                        <FooterInput />
                        <FooterButton>Subscribe</FooterButton>
                    </FooterColumn>
                </FooterRow>
                <FooterH3>MENZ &copy; {new Date().getFullYear()} All rights reserved.</FooterH3>
            </FooterContainer>
        </FooterSection>
    )
}

export default Footer
