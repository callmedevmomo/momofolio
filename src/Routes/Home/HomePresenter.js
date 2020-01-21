import React from "react";
import styled, { keyframes } from "styled-components";
import myVideo from "assets/darkcode.mov";
import Bottom from "Components/Bottom";

const typing = keyframes`
  from {
    width:0;
  }
`;

const blink = keyframes`
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: white;
    }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 2rem;
  left: 200px;
`;

const TitleSpan = styled.span`
  :nth-child(2) {
    font-size: 30px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation: ${typing} 4s steps(60, end), ${blink} 0.5s step-start infinite;
    margin-top: 100px;
    opacity: 0.9;
    border-right: 0.1em solid white;
  }
  &:not(:last-child) {
    width: 0;
    margin-top: 15px;
    font-size: 5rem;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-weight: 600;
  }
`;

/**  Video Background Test **/

const VHeader = styled.header`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  max-width: 960px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: auto;
  text-align: center;
  flex-direction: column;
`;

const Fullscreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  z-index: 1;
  opacity: 0.2;
`;

const HeaderContent = styled.div`
  z-index: 2;
`;

const HomePresenter = () => (
  <>
    <VHeader>
      <HeaderContent>
        <Container>
          <TitleSpan>Dynamic Web Developer</TitleSpan>
          <TitleSpan> Growing as a full stack developer.</TitleSpan>
        </Container>
      </HeaderContent>
      <Fullscreen>
        <video src={myVideo} autoPlay loop muted></video>
      </Fullscreen>
      <Overlay></Overlay>
      <Bottom />
    </VHeader>
  </>
);

export default HomePresenter;
