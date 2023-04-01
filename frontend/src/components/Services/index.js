import React from "react";
// import Icon1 from '../../images/stepbystep.svg';
// import Icon2 from '../../images/strengths.svg';
// import Icon3 from '../../images/download.svg'
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesP,
//   ServicesIcon,
  ServicesWrapper,
} from "./ServicesElements";


const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Analyze Player Data</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <div id="england">England</div>
          </ServicesCard>
          <ServicesCard>
          <div id="australia">Australia</div>
          </ServicesCard>
          <ServicesCard>
          <div id="newzealand">New Zealand</div>
          </ServicesCard>
          <ServicesCard>
          <div id="srilanka">Sri Lanka</div>
          </ServicesCard>
          <ServicesCard>
          <div id="bangkok">Bangkok</div>
          </ServicesCard>
          <ServicesCard>
          <div id="pakistan">Pakistan</div>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
