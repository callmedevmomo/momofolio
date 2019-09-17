import React from "react";
import styled, { keyframes } from "styled-components";
import { Link, withRouter } from "react-router-dom";

const opacity = keyframes`
from{
    opacity:0;
}
to{
    opacity:1;
}`;

const WholeContainer = styled.div`
  width: 100vw;
  height: 10vh;
  z-index: 2;
  overflow: hidden;
  position: absolute;
  top: 0;
`;

const FlexBox = styled.div`
  display: flex;
  animation: ${opacity} 3s ease;
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
  border-bottom: 5px solid
    ${props => (props.current ? "#1dd1a1" : "transparent")};
  &:hover {
    opacity: 1;
  }
`;
const StyledBtn2 = styled.div`
  width: 160px;
  height: 55px;
  position: absolute;
  bottom: 0;
  left: 20%;
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
  border-bottom: 5px solid
    ${props => (props.current ? "#1dd1a1" : "transparent")};
  &:hover {
    opacity: 1;
  }
`;
const StyledBtn3 = styled.div`
  width: 160px;
  height: 55px;
  position: absolute;
  bottom: 0;
  left: 40%;
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
  border-bottom: 5px solid
    ${props => (props.current ? "#1dd1a1" : "transparent")};
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
  left: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.2rem;
  color: white;
  opacity: 0.6;
  border-bottom: 5px solid
    ${props => (props.current ? "#1dd1a1" : "transparent")};
  &:hover {
    opacity: 1;
  }
`;

const StyledBtn5 = styled.div`
  width: 160px;
  height: 55px;
  position: absolute;
  bottom: 0;
  margin: 20px 80px;
  left: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.2rem;
  color: white;
  opacity: 0.6;
  border-bottom: 5px solid
    ${props => (props.current ? "#1dd1a1" : "transparent")};
  &:hover {
    opacity: 1;
  }
`;

export default withRouter(({ location: { pathname } }) => (
  <WholeContainer>
    <FirstContainer>
      <FlexBox>
        <Link to="/">
          <StyledBtn1 current={pathname === "/"}>HOME</StyledBtn1>
        </Link>
        <Link to="/me">
          <StyledBtn2 current={pathname === "/me"}>ABOUT</StyledBtn2>
        </Link>
        <Link to="/portfolio">
          <StyledBtn3 current={pathname === "/portfolio"}>PORTFOLIO</StyledBtn3>
        </Link>
        <Link to="/skill">
          <StyledBtn4 current={pathname === "/skill"}>SKILLS</StyledBtn4>
        </Link>
        <Link to="/contact">
          <StyledBtn5 current={pathname === "/contact"}>CONTACT</StyledBtn5>
        </Link>
      </FlexBox>
    </FirstContainer>
  </WholeContainer>
));
