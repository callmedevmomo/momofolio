import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const WholeContainer = styled.div`
  width: 100vw;
  height: 10vh;
  z-index: 2;
  overflow: hidden;
  position: absolute;
  bottom: 0;
`;
const StyleText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  letter-spacing: 0.1rem;
  padding-left: 20px;
  opacity: 0.7;
`;

const FlexBox = styled.div`
  display: none;
`;
const FirstContainer = styled.div`
  width: 15%;
  height: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.6s linear;
  &:hover {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    ${FlexBox} {
      display: flex;
    }
    ${StyleText} {
      display: none;
    }
  }
`;

const StyledBtn1 = styled.div`
  width: 160px;
  height: 55px;
  position: absolute;
  bottom: 0;
  margin: 20px 80px;
  left: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.2rem;
  color: white;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;
const StyledBtn2 = styled.div`
  width: 160px;
  height: 55px;
  position: absolute;
  bottom: 0;
  left: 25%;
  margin: 20px 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.2rem;
  opacity: 0.6;
  color: white;
  &:hover {
    opacity: 1;
  }
`;
const StyledBtn3 = styled.div`
  width: 160px;
  height: 55px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin: 20px 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.2rem;
  color: white;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;

const StyledBtn4 = styled.div`
  width: 160px;
  height: 55px;
  position: absolute;
  bottom: 0;
  margin: 20px 80px;
  left: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.2rem;
  color: white;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;

const Bottom = () => (
  <WholeContainer>
    <FirstContainer>
      <StyleText>> Learn more</StyleText>
      <FlexBox>
        <Link to="/me">
          <StyledBtn1>ABOUT</StyledBtn1>
        </Link>
        <Link to="/portfolio">
          <StyledBtn2>PORTFOLIO</StyledBtn2>
        </Link>
        <Link to="/skill">
          <StyledBtn3>SKILLS</StyledBtn3>
        </Link>
        <Link to="/contact">
          <StyledBtn4>CONTACT</StyledBtn4>
        </Link>
      </FlexBox>
    </FirstContainer>
  </WholeContainer>
);

export default Bottom;
