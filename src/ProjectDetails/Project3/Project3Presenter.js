import React from "react";
import PortfolioDetail from "Components/PortfolioDetail";
const children = [
  "A painting board, Video processing app , VanillaJS Video Games",
  "Everything from VanillaJS One, Canvas API, DOM Interactivity, Video Processing, 2D Rendering Context",
  "자바스크립트 기본기에서 더 나아가 인터랙티브한 기능에 대하여 이해했습니다.",
  "자바스크립트로 그림판, 비디오 프로세싱 앱, 아주 간단한 게임까지 구현할 수 있습니다.",
  "바닐라 자바스크립트의 재미에 눈을 떴습니다!!"
];

export default () => (
  <PortfolioDetail
    title="Paint JS"
    GithubUrl="https://github.com/callmedevmomo/paintjs"
    webUrl="https://callmedevmomo.github.io/paintjs"
  >
    {children}
  </PortfolioDetail>
);
