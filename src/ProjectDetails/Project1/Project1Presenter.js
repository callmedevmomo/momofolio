import React from "react";
import PortfolioDetail from "Components/PortfolioDetail";
const children = [
  "To Do List, Clock, Weather with Geolocation, Clone Momentum App",
  "VanillaJS, ES5, ES6, Variable Concept, Data Types on JS, Arrays, Objects, Functions, Modifying DOM, Conditions, Local Storage, Ajax, Geolocation",
  "기초적인 수준이지만 자바스크립트 기본기에 대해 이해했습니다.",
  "자바스크립트로 시계, 할일목록, 날씨 등의 기본 기능을 구현할 수 있게 되었습니다.",
  "바닐라 자바스크립트를 활용해서 간단한 웹 서비스를 만들 수 있습니다."
];

export default () => (
  <PortfolioDetail
    title="Momentum JS"
    webUrl="https://callmedevmomo.github.io/momentum-JS/"
    GithubUrl="https://github.com/callmedevmomo/momentum-JS"
  >
    {children}
  </PortfolioDetail>
);
