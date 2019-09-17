import React from "react";
import PortfolioDetail from "Components/PortfolioDetail";
const children = [
  "Chat,Chats,Find Friends, Friends, More, Settings",
  "HTML5, CSS3, Github Desktop, Media Queries, Flexbox, Animations, Font Awesome",
  "기초적인 수준이지만 웹, 프로그래밍, HTML, CSS 에 대하여 이해했습니다.",
  "카카오톡 클라이언트 화면을 직접 처음부터 끝까지 만들어 보았습니다.",
  "혼자서 코딩하는 방법에 익숙해졌습니다."
];

export default () => (
  <PortfolioDetail
    title="Clone Kakao"
    GithubUrl="https://github.com/callmedevmomo/kakao_master"
    webUrl="https://callmedevmomo.github.io/kakao_master"
  >
    {children}
  </PortfolioDetail>
);
