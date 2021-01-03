import React from 'react'
import {HeroSection, HeroContainer, HeroCard, HeroSpan, HeroH1, HeroP} from './HeroElements'

const Hero = () => {
    return (
        <HeroSection>
            <HeroContainer>
                <HeroCard>
                    <HeroSpan>
                        The New and Important of the Nature
                    </HeroSpan>
                    <HeroH1>
                        Hero Section of the Beautiful Web Page Buy and Enjoy
                    </HeroH1>
                    <HeroP>
                        Arvo is a very good slab serif font family, created by Anton Koovit. It has 4 different variations, from normal weight and normal italic to bold italic. It is pretty rare to find a full Slab Serif web font family and this font gets pretty close to satisfying all of our needs for strong characters and high readability. Combined with a sans-serif body font, Arvo makes a great font for titles and subtitles.
                    </HeroP>
                </HeroCard>
            </HeroContainer>
        </HeroSection>
    )
}

export default Hero
