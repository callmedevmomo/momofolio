import React from "react";
import styled, { keyframes } from "styled-components";
import Header from "Components/Header";
import { Js } from "styled-icons/fa-brands/Js";
import { Css3 } from "styled-icons/boxicons-logos/Css3";
import { Html5 } from "styled-icons/fa-brands/Html5";
import { ReactLogo } from "styled-icons/boxicons-logos/ReactLogo";
import { Redux } from "styled-icons/boxicons-logos/Redux";
import { Node } from "styled-icons/fa-brands/Node";
import { Jquery } from "styled-icons/boxicons-logos/Jquery";
import Grpahql from "assets/graphql.png";
import Typescript from "assets/typescript.png";

const pagereturn = keyframes`
from{
transform: translate(-150px,350px) rotate(40deg);
}to{
transform:none;
}`;
const widthTest = keyframes`
0%{
 width:30%;
}35%{
 width:60%;
}70%{
width:90%;
}`;

const AllContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
`;

const IconBox = styled.div`
  animation: ${pagereturn} 0.4s ease-out;
  width: 100vw;
  height: 10vh;
  padding: 20px;
  display: flex;
  margin-top: 140px;
`;

const TxtBox = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  font-weight: bolder;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

const ImgBox = styled.img`
  list-style: none;
  width: 100%;
  height: 100%;
  background: transparent;
  margin-top: 10.5px;
`;

const JSicon = styled(Js)`
  color: #f1c40f;
  width: 90%;
  margin-top: 17px;
  margin-left: 10px;
`;
const CSSicon = styled(Css3)`
  color: #1572b6;
  width: 130%;
`;
const HTMLicon = styled(Html5)`
  color: #e44e26;
  width: 85%;
  margin-top: 15px;
`;
const Reacicon = styled(ReactLogo)`
  color: #60dafb;
`;
const Nodeicon = styled(Node)`
  color: #95be45;
  margin-left: 5px;
`;
const Reduxicon = styled(Redux)`
  color: #7649bb;
`;
const Jqueryicon = styled(Jquery)`
  color: #0765a8;
`;

const JSCon = styled.div`
  position: absolute;
  opacity: 0;
  border-radius: 25px;
  top: 0;
  right: -27px;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: inset -26px -16px 25px rgba(145, 160, 180, 0.45),
    130px 30px 40px rgba(118, 146, 180, 0.18);
  transition: all 0.6s ease;
`;
const CSSCon = styled.div`
  position: absolute;
  opacity: 0;
  border-radius: 25px;

  top: 0;
  right: -46px;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: inset -26px -16px 25px rgba(145, 160, 180, 0.45),
    130px 30px 40px rgba(118, 146, 180, 0.18);
  transition: all 1s ease;
`;
const HTMLCon = styled.div`
  position: absolute;
  opacity: 0;
  border-radius: 25px;

  top: 0;
  left: -40px;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: inset -26px -16px 25px rgba(145, 160, 180, 0.45),
    130px 30px 40px rgba(118, 146, 180, 0.18);
  transition: all 1s ease;
`;
const NodeCon = styled.div`
  position: absolute;
  border-radius: 25px;

  opacity: 0;
  bottom: -20px;
  left: -16px;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: inset -26px -16px 25px rgba(145, 160, 180, 0.45),
    130px 30px 40px rgba(118, 146, 180, 0.18);
  transition: all 1s ease;
`;
const GraphCon = styled.div`
  position: absolute;
  border-radius: 25px;

  opacity: 0;
  top: -10px;
  left: -20px;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: inset -26px -16px 25px rgba(145, 160, 180, 0.45),
    130px 30px 40px rgba(118, 146, 180, 0.18);
  transition: all 1s ease;
`;
const ReactCon = styled.div`
  position: absolute;
  border-radius: 25px;

  opacity: 0;
  top: -25px;
  left: -18px;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: inset -26px -16px 25px rgba(145, 160, 180, 0.45),
    130px 30px 40px rgba(118, 146, 180, 0.18);
  transition: all 1s ease;
`;
const NativeCon = styled.div`
  position: absolute;
  border-radius: 25px;

  opacity: 0;
  top: -26px;
  left: -21px;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: inset -26px -16px 25px rgba(145, 160, 180, 0.45),
    130px 30px 40px rgba(118, 146, 180, 0.18);
  transition: all 1s ease;
`;

const ReduxCon = styled.div`
  position: absolute;
  border-radius: 25px;

  opacity: 0;
  top: -26px;
  left: -22px;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: inset -26px -16px 25px rgba(145, 160, 180, 0.45),
    130px 30px 40px rgba(118, 146, 180, 0.18);
  transition: all 1s ease;
`;
const JQCon = styled.div`
  position: absolute;
  opacity: 0;
  border-radius: 25px;

  top: -26px;
  left: -22px;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: inset -26px -16px 25px rgba(145, 160, 180, 0.45),
    130px 30px 40px rgba(118, 146, 180, 0.18);
  transition: all 1s ease;
`;
const TsCon = styled.div`
  position: absolute;
  opacity: 0;
  top: -26px;
  border-radius: 25px;

  left: -35px;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: inset -26px -16px 25px rgba(145, 160, 180, 0.45),
    130px 30px 40px rgba(118, 146, 180, 0.18);
  transition: all 1s ease;
`;

const CssBox = styled.div`
  width: 150px;
  height: 140px;
  margin-right: 85px;
  position: relative;
  &:hover {
    ${CSSCon} {
      opacity: 1;
    }
  }
`;
const NodeBox = styled.div`
  width: 160px;
  height: 140px;
  margin-right: 55px;
  margin-top: 40px;
  margin-left: 20px;
  position: relative;
  &:hover {
    ${NodeCon} {
      opacity: 1;
    }
  }
`;
const GraphBox = styled.div`
  width: 160px;
  height: 150px;
  margin-left: 20px;
  margin-right: 10px;
  margin-top: 10px;
  position: relative;
  &:hover {
    ${GraphCon} {
      opacity: 1;
    }
  }
`;
const LibraryBox = styled.div`
  width: 160px;
  height: 160px;
  margin-left: 20px;
  margin-top: 25px;
  margin-right: 56px;
  position: relative;
  &:hover {
    ${ReactCon} {
      opacity: 1;
    }
    ${NativeCon} {
      opacity: 1;
    }
    ${ReduxCon} {
      opacity: 1;
    }
    ${JQCon} {
      opacity: 1;
    }
  }
`;
const TsBox = styled.div`
  width: 130px;
  height: 130px;
  margin-left: 40px;
  margin-top: 25px;
  position: relative;
  &:hover {
    ${TsCon} {
      opacity: 1;
    }
  }
`;
const HTMLBox = styled.div`
  width: 150px;
  height: 140px;
  margin-right: 10px;
  margin-left: 30px;
  position: relative;
  &:hover {
    ${HTMLCon} {
      opacity: 1;
    }
  }
`;
const BRBR = styled.span`
  font-size: 14px;
  color: black;
  line-height: 1.5;
  letter-spacing: 0.01em;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  display: flex;
  position: absolute;
  margin-top: 10px;
  width: 100%;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: bolder;
  height: 40px;
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  color: rgba(255, 255, 255, 0.9);
  background-color: black;
  -webkit-box-shadow: #2f3640 0 -1px 4px, black 0 -2px 10px,
    #6c5ce7 0 -10px 20px, #0984e3 0 -18px 40px,
    2px 0px 30px 14px rgba(255, 93, 16, 0);
  box-shadow: #2f3640 0 -1px 4px, black 0 -2px 10px, #6c5ce7 0 -10px 20px,
    #0984e3 0 -18px 40px, 2px 0px 30px 14px rgba(255, 93, 16, 0);
`;
const TestBox = styled.div`
  width: 150px;
  height: 140px;
  margin-left: 30px;
  margin-right: 60px;
  position: relative;
  &:hover {
    ${JSCon} {
      opacity: 1;
    }
  }
`;

const FRBar = styled.div`
  width: 100vw;
  height: 1vh;
  position: absolute;
  top: 360px;
  background-color: rgba(255, 255, 255, 0.98);
  animation: ${widthTest} 0.6s linear;
  &:nth-child(2) {
    position: absolute;
    top: 600px;
    background-color: rgba(255, 255, 255, 0.98);
    animation: ${widthTest} 0.6s linear;
    animation-delay: 0.1s;
  }
`;

const SkillPresenter = () => (
  <AllContainer>
    <Header />
    <FRBar></FRBar>
    <IconBox>
      <TxtBox>Front-end</TxtBox>
      <TestBox>
        <JSicon></JSicon>
        <JSCon>
          <Title>JavaScript</Title>
          <BRBR>
            현재 모던 자바스크립트 위주로 공부 중이며, 자바스크립트와 친해지기
            위해 여러 토이 프로젝트와 클론 코딩을 병행하고 있습니다.
          </BRBR>
        </JSCon>
      </TestBox>
      <CssBox>
        <CSSicon></CSSicon>
        <CSSCon>
          <Title>CSS3</Title>
          <BRBR>
            기본적인 레이아웃이나 만들고 싶은 애니메이션은 대부분 구현
            가능합니다. SCSS를 사용해봤고, 새로 나오는 멋진 기술들은 계속
            공부하려 노력합니다.
          </BRBR>
        </CSSCon>
      </CssBox>
      <HTMLBox>
        <HTMLicon></HTMLicon>
        <HTMLCon>
          <Title>HTML5</Title>
          <BRBR>
            semantic 마크업을 짜려고 노력하고, 웹 표준을 준수합니다. 웹 접근성에
            대한 부분은 아직 깊게 공부하지 못했습니다.
          </BRBR>
        </HTMLCon>
      </HTMLBox>
    </IconBox>
    <FRBar></FRBar>
    <IconBox>
      <TxtBox>Back-end</TxtBox>
      <NodeBox>
        <Nodeicon></Nodeicon>
        <NodeCon>
          <Title>Node JS</Title>
          <BRBR>
            풀스택 웹 개발자가 되기 위해서 잘하고 싶고 욕심나는 기술입니다.
            프로젝트 백엔드에 사용하며, express Framework를 즐겨 사용합니다.
          </BRBR>
        </NodeCon>
      </NodeBox>
      <GraphBox>
        <ImgBox src={Grpahql}></ImgBox>
        <GraphCon>
          <Title>GraphQL</Title>
          <BRBR>
            현재 꾸준히 공부 중입니다. Prisma, Apollo와 함께 사용해왔습니다.
            관리자 패널과 간결한 코드 때문에 익숙해지려 노력하고 있습니다.
          </BRBR>
        </GraphCon>
      </GraphBox>
    </IconBox>
    <IconBox>
      <TxtBox>Library</TxtBox>
      <LibraryBox>
        <Reacicon></Reacicon>
        <ReactCon>
          <Title>React JS</Title>
          <BRBR>
            현재 이 포트폴리오는 리액트를 공부하며 만든 작품이고, 최근에는 Class
            Component가 아닌 Functional Component로 접근하는 Hooks에 대해
            공부하고 있습니다. JavaScript 만으로 구현한다는 점이 큰 매력이라고
            생각합니다.
          </BRBR>
        </ReactCon>
      </LibraryBox>
      <LibraryBox>
        <Reacicon></Reacicon>
        <NativeCon>
          <Title>React Native</Title>
          <BRBR>
            React Native를 이용하여 실시간 날씨 어플리케이션을 만든 경험이
            있습니다. 다만 익숙하지 않아 Expo와 함께 추가적으로 공부할
            예정입니다.
          </BRBR>
        </NativeCon>
      </LibraryBox>
      <LibraryBox>
        <Reduxicon></Reduxicon>
        <ReduxCon>
          <Title>Redux</Title>
          <BRBR>
            현재 공부 중입니다. 스테이트가 변경될 경우 여러 Component로 한 번에
            렌더 해준다는 점에서 상태 관리가 매우 편해진다고 알고 있습니다.
          </BRBR>
        </ReduxCon>
      </LibraryBox>
      <LibraryBox>
        <Jqueryicon></Jqueryicon>
        <JQCon>
          <Title>JQuery</Title>
          <BRBR>
            학습 초반에 자주 사용했었고, 요새는 JavaScript 학습을 위해 잘
            사용하지 않습니다.
          </BRBR>
        </JQCon>
      </LibraryBox>
      <TsBox>
        <ImgBox src={Typescript}></ImgBox>
        <TsCon>
          <Title>TypeScript</Title>
          <BRBR>
            현재 공부 중입니다. 기본 자바스크립트에 비해 명확한 규칙들로 에러를
            최소화한다는 점에서 꾸준히 공부하여 익숙해지고 싶은 기술입니다.
          </BRBR>
        </TsCon>
      </TsBox>
    </IconBox>
  </AllContainer>
);

export default SkillPresenter;
