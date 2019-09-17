import React from "react";
import styled, { keyframes } from "styled-components";

const blink = keyframes`
0%{
    opacity:0;
}
40%{
    opacity:0.6;
}
80%{
    opacity:1
}
100%{
    opacity:0.4
}`;

const Text = styled.span`
  animation: ${blink} 2s ease-in-out infinite;
  color: black;
  opacity: 0.4;
`;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: linear-gradient(to right, #bbd2c5, #536976);
  color: white;
  font-size: 22px;
  display: flex;
  font-weight: 700;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1.5;
  padding: 0px 20px;
  display: none;
  z-index: 5;
  @media screen and (max-width: 1500px) {
    display: flex;
  }
`;

const MediaScreen = () => (
  <Container>
    <Text>Please make your screen big</Text>
    <Text>Editing to responsive web</Text>
  </Container>
);

export default MediaScreen;
