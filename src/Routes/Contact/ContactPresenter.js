import React from "react";
import styled, { keyframes } from "styled-components";
import Header from "Components/Header";
import backup from "assets/backup.jpg";
import contact from "assets/contact.jpg";
import { Blog } from "styled-icons/icomoon/Blog";
import { Github } from "styled-icons/boxicons-logos/Github";
import { MediumSquare } from "styled-icons/boxicons-logos/MediumSquare";
import { Link } from "react-router-dom";

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

const transImg = keyframes`
0%{
transform:translateY(-1000px);
}to{
  transform:none;
}`;

const transCont = keyframes`
0%{
transform:translateX(500px);
}to{
  transform:none;
}`;
const NOTFAKE = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  border-radius: 50px;
  position: absolute;
  opacity: 0;
  transition: all 1s ease;
  box-shadow: 10px 5px 5px black;
`;
const FAKE = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 55px;
  position: absolute;
  opacity: 1;
`;
const LinkContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 200px;
  opacity: 0;
  transition: all 0.3s ease;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: inset -26px -16px 25px rgba(145, 160, 180, 0.45),
    130px 30px 40px rgba(118, 146, 180, 0.18);
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 55px;
  animation: ${dynamic} 1s ease;
  &:last-child {
    margin-right: 20px;
  }
  &:hover {
    ${FAKE} {
      opacity: 0;
    }
    ${NOTFAKE} {
      animation: ${turn} 0.7s ease;
      opacity: 1;
    }
    ${LinkContainer} {
      opacity: 1;
    }
  }
`;

const AllContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IMGBOX = styled.div`
  position: fixed;
  bottom: -100px;
  right: 130px;
  width: 400px;
  height: 500px;
  z-index: 3;
  margin-right: 45px;
  animation: ${transImg} 1s ease-out;
`;
const IMG = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.8;
  overflow: hidden;
  position: absolute;
  top: 0;
  filter: blur(3px);
`;

const CONIMG = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 300px;
`;
const CONBOX = styled.div`
  width: 900px;
  height: 500px;
  z-index: 2;
  animation-delay: 0.2s;
  animation: ${transCont} 1s ease-out;
`;
const WHWBox1 = styled.div``;

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
const ContentTitle = styled.span`
  font-size: 26px;
  font-weight: bolder;
  margin-top: 20px;
`;
const ContentTxt = styled.span`
  font-size: 18px;
`;
const TxtDiv = styled.div`
  margin-top: 50px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  &:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.span`
  font-weight: bolder;
  text-shadow: 4px 4px #ced6e0;
  height: 100%;
  opacity: 0.8;
  color: black;
  letter-spacing: 0.1rem;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkBox = styled.div`
  width: 50px;
  height: 50px;
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

const BlogLink = styled(Blog)`
  color: #10ac84;
  width: 90%;
  height: 95%;
`;
const GitLink = styled(Github)`
  color: rgba(255, 255, 255, 0.9);
`;
const MediumLink = styled(MediumSquare)`
  color: white;
  width: 105%;
  height: 105%;
`;

const ContactPresenter = () => (
  <AllContainer>
    <IMG src={backup}></IMG>
    <Header />
    <Link to="/">
      <IMGBOX>
        <CONIMG src={contact}></CONIMG>
      </IMGBOX>
    </Link>
    <CONBOX>
      <Content>
        <NOTFAKE>
          <WHWBox>
            <WHWBoxTitle>@ Callmedevmomo</WHWBoxTitle>
            <WHWBox1>
              <ContentTitle>
                <TxtDiv>Growing as a full stack web developer</TxtDiv>
                <TxtDiv>
                  Email : <ContentTxt>callmedevmomo@gmail.com</ContentTxt>
                </TxtDiv>
                <TxtDiv>
                  Phone : <ContentTxt>+82 10 4031 7760</ContentTxt>
                </TxtDiv>
                <TxtDiv>
                  Github : <ContentTxt>@callmedevmomo</ContentTxt>
                </TxtDiv>
              </ContentTitle>
            </WHWBox1>
          </WHWBox>
        </NOTFAKE>
        <FAKE>
          <Title>Contact</Title>
        </FAKE>
        <LinkContainer>
          <LinkBox>
            <a
              href="https://blog.naver.com/lbj7761"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BlogLink></BlogLink>
            </a>
          </LinkBox>
          <LinkBox>
            <a
              href="https://github.com/callmedevmomo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitLink></GitLink>
            </a>
          </LinkBox>
          <LinkBox>
            <a
              href="https://medium.com/@callmedevmomo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediumLink></MediumLink>
            </a>
          </LinkBox>
        </LinkContainer>
      </Content>
    </CONBOX>
  </AllContainer>
);

export default ContactPresenter;
