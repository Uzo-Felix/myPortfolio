import React from 'react';

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
        I am a frontend developer, I specialize in creating responsive user interfaces with HTML, CSS, JAVASCRIPT, REACT and its ecosystem of tools and libraries. 
        </SectionText>
        <Button onClick={props.handleClick}><a href="https://react.dev">Learn More</a></Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;