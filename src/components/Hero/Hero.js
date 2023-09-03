import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './HeroStyles';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome!<br />
          My name is UZOCHUKWU
        </SectionTitle>
        <SectionText>
        I am a full-stack developer specializing in crafting responsive and dynamic user interfaces using React, as well as building robust and scalable backends with Node.js and Nest.js, along with their respective ecosystems of tools and libraries. 
        </SectionText>
        <Button onClick={props.handleClick}><a href="https://www.github.com/uzo-felix">Learn More</a></Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;