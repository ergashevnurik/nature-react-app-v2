import React from 'react'
import { InfoData } from '../../Data/InfoData'
import {InfoP, InfoCard, InfoColumn, InfoContainer, InfoH1, InfoNumbers, InfoRow, InfoSection} from './InfoSectionElements'

const Info = () => {
    return (
        <InfoSection>
            <InfoContainer>
                <InfoRow>
                    {InfoData.map((info, index) => (
                        <InfoColumn key={index}>
                            <InfoCard>
                                <InfoNumbers>{info.number}</InfoNumbers>
                                <InfoH1>{info.title}</InfoH1>
                                <InfoP>{info.desc}</InfoP>
                            </InfoCard>
                        </InfoColumn>
                    ))}
                </InfoRow>
            </InfoContainer>
        </InfoSection>
    )
}

export default Info
