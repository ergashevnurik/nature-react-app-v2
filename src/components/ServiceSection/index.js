import React from 'react'
import {Image,Desc, Button, ServiceColumn, ServiceRow, ServiceContainer, ServiceSection, ServiceColumnRight} from './ServiceSectionElements'

const Service = ({img, desc, buttonLabel, buttonLink, alt, reverse}) => {
    return (
        <ServiceSection>
            <ServiceContainer>
                <ServiceRow>
                    <ServiceColumn reverse={reverse}>
                        <Desc>{desc}</Desc>
                        <Button to={buttonLink}>{buttonLabel}</Button>
                    </ServiceColumn>
                    <ServiceColumnRight reverse={reverse}>
                        <Image src={img} alt={alt} />
                    </ServiceColumnRight>
                </ServiceRow>
            </ServiceContainer>
        </ServiceSection>
    )
}

export default Service
