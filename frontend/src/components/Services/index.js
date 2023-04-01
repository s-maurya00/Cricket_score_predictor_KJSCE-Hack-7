import React from "react";
import Icon1 from '../../images/stepbystep.svg';
import Icon2 from '../../images/strengths.svg';
import Icon3 from '../../images/download.svg'
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesP,
  ServicesIcon,
  ServicesWrapper,
} from "./ServicesElements";


const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>STEP-BY-STEP BUILDER</ServicesH2>
            <ServicesP>Easy to use builder.Make a perfect portfolio.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>ADD YOUR STRENGTHS</ServicesH2>
            <ServicesP>Add you skills, projects and courses done.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>DOWNLOAD PORTFOLIO</ServicesH2>
            <ServicesP>Download portfolio in pdf format and share with others.</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
