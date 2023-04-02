import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import groundImg from "./groundImg.jpg";
import "./style1.css"
// import { style } from '../../../node_modules/postcss-minify-font-values/types/lib/keywords.d';

const HeroSection = () =>{
  return (
    <div>
    <img src={groundImg} alt= "House image" height={650} width={1300} className="imagefile" />
    <div className="paragraph">
      <p>ODI Score predictor</p>
    </div>
    </div>
    );
}

export default HeroSection;
