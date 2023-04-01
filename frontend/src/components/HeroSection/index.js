import React, { useState } from "react";
// import { Button } from "../ButtonElement";
import Video from "../Video/image.jpeg";
import { useNavigate } from "react-router-dom";
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
  } from "./HeroElements";

const HeroSection = () => {
  let navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="image/jpeg" />
      </HeroBg>
      <HeroContent>
        {/* <HeroH1>Create an Online Portfolio</HeroH1>
        <HeroP>Quick and Simple !!!</HeroP> */}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
