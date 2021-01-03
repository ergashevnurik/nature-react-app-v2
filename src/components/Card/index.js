import React from 'react'
import { CardData } from '../../Data/CardData'
import { CardColumn, CardContainer, CardRow, Image, CardSection } from './CardElements'

const Card = () => {
    return (
        <CardSection>
            <CardContainer>
                <CardRow>
                    {CardData.map((card, index) => (
                        <CardColumn key={index}>
                            <Image src={card.img} alt={card.alt} />
                        </CardColumn>
                    ))}
                </CardRow>
            </CardContainer>
        </CardSection>
    )
}

export default Card
