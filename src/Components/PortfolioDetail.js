import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import myVideo from "assets/detail.mov";

const dynamic = keyframes`
from{
    transform:translateX(-2000px) scale(0.3) skewY(10deg) 
}
to{
 transform:none;
}
`;

const turn = keyframes`
from{
  transform:none;
}
to{
  transform:rotateY(1turn);
}`;

const Container = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  overflow: hidden;
`;

const BgImg = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
`;

const TopBox = styled.div`
  height: 10vh;
  position: absolute;
  top: 50px;
  width: 100%;
  background-color: transparent;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 40px;
  letter-spacing: 0.2rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-weight: bolder;
`;
const BottomBox = styled.div`
  height: 10vh;
  position: absolute;
  bottom: 50px;
  width: 40%;
  z-index: 4;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WEBMSG = styled.div`
  position: absolute;
  width: 150px;
  height: 70px;
  background-color: black;
  transform: translate(-35px, -35px);
  -webkit-box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
    red 0 -18px 40px, 2px 0px 30px 14px rgba(255, 93, 16, 0);
  box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
    red 0 -18px 40px, 2px 0px 30px 14px rgba(255, 93, 16, 0);
  opacity: 0;
  border-radius: 25px;
  transition: all 0.6s ease;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.7);
`;

const ForbiddenBox = styled.div`
  position: absolute;
  width: 20%;
  height: 80%;
  border-radius: 10px;
  background-color: transparent;
  opacity: 0;
  transition: all 0.4s ease;
`;
const URLBox = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 60px;
  border-radius: 20px;
  background-color: black;
  border: 4px double rgba(255, 255, 255, 0.6);
  &:last-child {
    margin-left: 150px;
  }
  &:hover {
    ${ForbiddenBox} {
      opacity: 0.3;
    }
    ${WEBMSG} {
      opacity: 1;
    }
  }
`;
const NOTFAKE = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  border-radius: 8px;
  position: absolute;
  opacity: 0;
  transition: all 1s ease;
`;
const FAKE = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: absolute;
  opacity: 1;
`;

const Content = styled.div`
  margin-left: 50px;
  width: 25%;
  height: 50%;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: inset -26px -16px 25px rgba(145, 160, 180, 0.45),
    130px 30px 40px rgba(118, 146, 180, 0.18);
  display: flex;
  flex-direction: column;
  position: relative;
  animation: ${dynamic} 1s ease;
  border-radius: 10px;
  &:last-child {
    margin-right: 20px;
  }
  &:hover {
    ${FAKE} {
      opacity: 0;
    }
    ${NOTFAKE} {
      animation: ${turn} 0.5s ease;
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  font-weight: bolder;
  text-shadow: 4px 4px #ced6e0;
  height: 100%;
  opacity: 0.8;
  letter-spacing: 0.1rem;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WHWBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const WHWBoxTitle = styled.div`
  font-size: 34px;
  font-weight: 500;
  margin: 10px 0px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;

const WHWBox1 = styled.div``;

const ContentTitle = styled.span`
  font-size: 16px;
  letter-spacing: 0.08em;
  line-height: 1.2;
`;

const BgLink = styled(Link)``;

const PortfolioDeatil = ({ title, webUrl, GithubUrl, children }) => (
  <Container>
    <TopBox>{title}</TopBox>
    <BgLink to="/portfolio">
      <BgImg>
        <video src={myVideo} loop autoPlay muted></video>
      </BgImg>
    </BgLink>
    <Content>
      <NOTFAKE>
        <WHWBox>
          <WHWBoxTitle>Build , </WHWBoxTitle>
          <WHWBox1>
            <br></br>
            <ContentTitle>✔︎ {children[0]}</ContentTitle>
          </WHWBox1>
        </WHWBox>
      </NOTFAKE>
      <FAKE>
        <Title>Features</Title>
      </FAKE>
    </Content>
    <Content>
      <NOTFAKE>
        <WHWBox>
          <WHWBoxTitle>Concept , </WHWBoxTitle>
          <WHWBox1>
            <br></br>
            <ContentTitle>✔︎ {children[1]}</ContentTitle>
          </WHWBox1>
        </WHWBox>
      </NOTFAKE>
      <FAKE>
        <Title>Technologies</Title>
      </FAKE>
    </Content>
    <Content>
      <NOTFAKE>
        <WHWBox>
          <WHWBoxTitle>What I Learned , </WHWBoxTitle>
          <WHWBox1>
            <ContentTitle>
              <br></br>
              ✔︎ {children[2]}
              <br></br>
              <br></br>
              ✔︎ {children[3]}
              <br></br>
              <br></br>
              ✔︎ {children[4]}
            </ContentTitle>
          </WHWBox1>
        </WHWBox>
      </NOTFAKE>
      <FAKE>
        <Title>What I Learned</Title>
      </FAKE>
    </Content>
    <BottomBox>
      <URLBox>
        Web-Page
        <ForbiddenBox></ForbiddenBox>
        {webUrl ? (
          <WEBMSG>
            <a href={webUrl} target="_blank" rel="noopener noreferrer">
              Available
            </a>
          </WEBMSG>
        ) : (
          <WEBMSG>Not Available</WEBMSG>
        )}
      </URLBox>
      <URLBox>
        GitHub
        <ForbiddenBox></ForbiddenBox>
        {GithubUrl ? (
          <WEBMSG>
            <a href={GithubUrl} target="_blank" rel="noopener noreferrer">
              Available
            </a>
          </WEBMSG>
        ) : (
          <WEBMSG>Not Available</WEBMSG>
        )}
      </URLBox>
    </BottomBox>
  </Container>
);

export default PortfolioDeatil;
