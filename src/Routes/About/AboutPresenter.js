import React from "react";
import styled, { keyframes } from "styled-components";
import myprofile from "assets/me.jpg";
import Header from "Components/Header";

const scale = keyframes`
0%{
transform:scale(1.5) translate(45px,35px)
}
30%{
transform:scale(1.0) translate(45px,35px)
}
70%{
  transform: scale(0.5) translateX(-200px);
}
100%{
  transform: scale(0.5) translateX(-200px)translateY(-50px);
}`;
const blink = keyframes`
0%{
  opacity:0;
}50%{
  opacity:0.6;
}
100%{
  opacity:1;
}`;

const opacity = keyframes`
0%{
  opacity:0;
}
100%{
  opacity:1;
}`;
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProfileBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Myprofile = styled.img`
  height: 80vh;
  width: 40vw;
  border-radius: 450px;
  animation: ${scale} 2s ease-in-out;
  transform: scale(0.5) translateX(-200px) translateY(-50px);
`;
const NameTxt = styled.div`
  position: absolute;
  width: 300px;
  font-size: 15px;
  bottom: 20%;
  left: 10%;
  display: flex;
  justify-content: center;
  transform: translateY(-70px);
  margin-left: 25px;
  animation: ${blink} 3s ease-in-out;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
`;
const TxtConatiner = styled.div`
  width: 700px;
  height: 700px;
  margin-top: 80px;
  line-height: 2.5;
  transform: translateX(-150px);
  animation: ${opacity} 8s ease;
  font-size: 16px;
`;

const EmjBox = styled.span`
  font-size: 45px;
  font-weight: bolder;
  margin-right: 20px;
`;
const Emjtxt = styled.span`
  font-size: 17px;
  font-weight: bolder;
`;

const AboutPresenter = ({ image, loading }) => (
  <Container>
    <Header />
    <ProfileBox>
      <Myprofile src={myprofile}></Myprofile>
      <NameTxt>Web Developer based in Seoul, Korea</NameTxt>
    </ProfileBox>
    <TxtConatiner>
      <EmjBox>
        <span role="img" aria-label="Emoji">
          👨🏼‍💻
        </span>
      </EmjBox>
      <Emjtxt>
        웹과 JavaScript를 사랑하는 개발자입니다.<br></br>
      </Emjtxt>
      웹이라는 공간을 디자인합니다. 개발자 역시 하나의 창작자라 생각하며,
      가치있는 무언가를 만들기 위해 <br></br>한 걸음씩 성장하고 있습니다.
      <br></br>
      <EmjBox>
        <span role="img" aria-label="Emoji">
          🙋🏼‍♂️
        </span>
      </EmjBox>
      <Emjtxt>
        호기심이 많고, 주변 사람들과 교류하는 것을 좋아합니다.<br></br>
      </Emjtxt>
      이웃간의 소모임이나 다양한 분야의 사람들과 어울리는 것을 좋아합니다.
      대화를 즐기며, 서로를 존중하는 <br></br>건강한 관계를 지향합니다.<br></br>
      <EmjBox>
        <span role="img" aria-label="Emoji">
          💁🏼‍♂️
        </span>
      </EmjBox>
      <Emjtxt>
        담백하고 자연스러운 사람이 되고자 합니다. <br></br>
      </Emjtxt>
      화려하기 보다 소소하고 자연스러운 일상을 즐기며, 다방면에서 깊고 단단한
      사람이 되려 노력합니다.
      <br></br>
      <br></br>
      <Emjtxt>
        그 외 좋아하는 것들 <br></br>
      </Emjtxt>
      🧘🏼‍♂️ Yoga<br></br>
      🍵 Tea<br></br>
      🎹 Piano<br></br>
    </TxtConatiner>
  </Container>
);

export default AboutPresenter;
