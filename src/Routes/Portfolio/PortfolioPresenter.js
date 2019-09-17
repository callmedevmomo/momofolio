import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Header from "Components/Header";
import Momentum from "assets/momentum1.png";
import Paint from "assets/paintjs.png";
import Kakao from "assets/kakaoclone.png";
import Youtube from "assets/youtube.png";
import Netflix from "assets/netflix.png";
import BasicCss from "assets/basiccss.png";
import CoinExplorer from "assets/coinexplorer.png";
import Reactnative from "assets/reactnative.png";
import Instagram from "assets/instagram.png";
import Airbnb from "assets/airbnb.png";
import myVideo from "assets/portfoliobg.mov";

const dynamic = keyframes`
0%{
  transform:scale(1.5);
}
30%{
  transform:scale(2.5);;

}

70%{
  transform:scale(1.5);
}
`;

const rotateX = keyframes`
from{
transform:none;
}to{
transform:rotateY(1turn);
}`;

const yellowclothes = keyframes`
from{
opacity:1;
}to{
  opacity:0;
}`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  overflow: hidden;
`;

const GridStyle = styled.div`
  padding: 150px;
  display: grid;
  grid-template-columns: repeat(5, 200px);
  grid-gap: 55px;
  justify-content: center;
  align-items: center;
`;
const MyContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  transition: all 0.3s ease-out;
`;

const PORTTXT = styled.img`
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: transform 0.5s ease-in;
  border-radius: 10px;
`;
const Introduction = styled.div`
  width: 100%;
  height: 100%;
  font-size: 22px;
  font-weight: bolder;
  letter-spacing: 0.1em;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: white;
  position: absolute;
  top: 130px;
  text-align: center;
  opacity: 0;
  transition: all 0.5s ease;
`;

const Fullscreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  animation: ${dynamic} 2s ease;
`;
const Videocheck = styled.video`
  width: 50%;
  height: 100vh;
  &:last-child {
    transform: rotateY(0.5turn);
  }
`;

const Testdiv = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  animation: ${rotateX} 1s ease;

  &:hover {
    ${MyContainer} {
      opacity: 0.8;
    }
    ${Introduction} {
      opacity: 1;
    }
  }
  :first-child {
    animation-delay: 0.2s;
    ${MyContainer} {
      animation: ${yellowclothes} 1s ease-in;
      animation-delay: 1s;
    }
  }

  :nth-child(2) {
    animation-delay: 0.2s;
    ${MyContainer} {
      animation: ${yellowclothes} 1s ease-in;
      animation-delay: 1.1s;
    }
  }
  :nth-child(3) {
    animation-delay: 0.3s;
    ${MyContainer} {
      animation: ${yellowclothes} 1s ease-in;
      animation-delay: 1.2s;
    }
  }
  :nth-child(4) {
    animation-delay: 0.4s;
    ${MyContainer} {
      animation: ${yellowclothes} 1s ease-in;
      animation-delay: 1.3s;
    }
  }
  :nth-child(5) {
    animation-delay: 0.5s;
    ${MyContainer} {
      animation: ${yellowclothes} 1s ease-in;
      animation-delay: 1.4s;
    }
  }
  :nth-child(6) {
    animation-delay: 0.6s;
    ${MyContainer} {
      animation: ${yellowclothes} 1s ease-in;
      animation-delay: 1.5s;
    }
  }
  :nth-child(7) {
    animation-delay: 0.7s;
    ${MyContainer} {
      animation: ${yellowclothes} 1s ease-in;
      animation-delay: 1.6s;
    }
  }
  :nth-child(8) {
    animation-delay: 0.8s;
    ${MyContainer} {
      animation: ${yellowclothes} 1s ease-in;
      animation-delay: 1.7s;
    }
  }
  :nth-child(9) {
    animation-delay: 0.9s;
    ${MyContainer} {
      animation: ${yellowclothes} 1s ease-in;
      animation-delay: 1.8s;
    }
  }
  :nth-child(10) {
    animation-delay: 1s;
    ${MyContainer} {
      animation: ${yellowclothes} 1s ease-in;
      animation-delay: 1.9s;
    }
  }
`;

const PortfolioPresenter = () => (
  <Container>
    <Header />
    <Fullscreen>
      <Videocheck src={myVideo} autoPlay muted loop />
      <Videocheck src={myVideo} autoPlay muted loop />
    </Fullscreen>
    <GridStyle>
      <Testdiv>
        <Link to="/portfolio/project1">
          <MyContainer></MyContainer>
          <PORTTXT src={Momentum}></PORTTXT>
          <Introduction>MomentumJS</Introduction>
        </Link>
      </Testdiv>
      <Testdiv>
        <Link to="/portfolio/project2">
          <MyContainer />
          <PORTTXT src={BasicCss}></PORTTXT>
          <Introduction>BasicCss</Introduction>
        </Link>
      </Testdiv>
      <Testdiv>
        <Link to="/portfolio/project3">
          <MyContainer />
          <PORTTXT src={Paint}></PORTTXT>
          <Introduction>PaintJS</Introduction>
        </Link>
      </Testdiv>
      <Testdiv>
        <Link to="/portfolio/project4">
          <MyContainer />
          <PORTTXT src={Kakao}></PORTTXT>
          <Introduction>CloneKakao</Introduction>
        </Link>
      </Testdiv>
      <Testdiv>
        <Link to="/portfolio/project5">
          <MyContainer />
          <PORTTXT src={Youtube}></PORTTXT>
          <Introduction>CloneYoutube</Introduction>
        </Link>
      </Testdiv>
      <Testdiv>
        <Link to="/portfolio/project6">
          <MyContainer />
          <PORTTXT src={Netflix}></PORTTXT>
          <Introduction>CloneNetflix</Introduction>
        </Link>
      </Testdiv>
      <Testdiv>
        <Link to="/portfolio/project7">
          <MyContainer />
          <PORTTXT src={CoinExplorer}></PORTTXT>
          <Introduction>CoinExplorer</Introduction>
        </Link>
      </Testdiv>
      <Testdiv>
        <Link to="/portfolio/project8">
          <MyContainer />
          <PORTTXT src={Reactnative}></PORTTXT>
          <Introduction>WeatherNative</Introduction>
        </Link>
      </Testdiv>
      <Testdiv>
        <Link to="/portfolio/project9">
          <MyContainer />
          <PORTTXT src={Instagram}></PORTTXT>
          <Introduction>CloneInstagram -> incomplete</Introduction>
        </Link>
      </Testdiv>
      <Testdiv>
        <Link to="/portfolio/project10">
          <MyContainer />
          <PORTTXT src={Airbnb}></PORTTXT>
          <Introduction>CloneAirbnb -> incomplete</Introduction>
        </Link>
      </Testdiv>
    </GridStyle>
  </Container>
);

export default PortfolioPresenter;
