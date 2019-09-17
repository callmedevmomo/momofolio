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
`;

const TxtBox = styled.div`
  font-size: 24px;
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
      <TxtBox>멋쟁이 개발자란? (a.k.a 닮고 싶다 너)</TxtBox>
      "개발자는 평생 공부해야 해." , "FE는 너무 빨리 변해서 기술 트렌드에
      민감해야 해." , "그래도 한 언어에 깊이가 있어야지, 그게 경쟁력이야." 요새
      많이 듣고 있는 말들이다. 사실 다 맞는 말. 개발자라는 직업에 대해 잘
      모른다면 오히려 이와 같은 말들에 되려 피로감을 느낄 수도 있다. 평생 공부 ?
      흥미가 없는 분야라면 듣기만 해도 싫을 터. 하지만 개발자는 기술과 함께
      성장해야만 한다. 따라서 훌륭한 개발자는 반드시 열정과 흥미가 이 분야
      깊숙이 있어야 하고, 성장하기 위해 겸손해야 한다고 생각한다. 유명 개발자
      블로그나 강연을 살펴보면 기술 스택 외에도 멋진 소프트스킬을 보유한
      롤모델들이 상당히 많다. 개발자 = 체크남방 + 청바지라는 불변의 법칙도
      잊혀진지 오래.
      <br></br>
      <br></br>
      <br></br>
      <TxtBox>문과 ? 컴공과 ? 그게 뭐...(a.k.a 부러울 때는 있어요)</TxtBox>
      가만 보면, 어릴 때부터 창작을 좋아했다. 미술시간에는 누가 보란 듯이 독특한
      그림을 그렸고, 음악을 좋아했지만 노래를 부르기보단 작곡에 흥미가 있었다.
      때문에 문과 출신이 문과스러운 대학교(?)를 다니며 개발자가 되어야겠다고
      다짐했던 건 나에겐 크게 놀랄 일이 아니었다. (주변에서는 난리였다.)
      프로그래밍은 익숙한 현대 사회에서 새로이 무언가를 만든다는 매력이 있다.
      컴퓨터의 언어로 Product를 만들어 내는 과정들이 멋지고 재밌어 보였다.
      그래서 도전하기 시작했다. 다양한 교육과정을 체험하며 어떤 분야의 개발자가
      되고 싶은지를 결정했고, 현재 풀스택 웹 개발자를 지향한다.
    </TxtConatiner>
  </Container>
);

export default AboutPresenter;
