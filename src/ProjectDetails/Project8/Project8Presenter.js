import React from "react";
import PortfolioDetail from "Components/PortfolioDetail";
const children = [
  "Loading Screen, Getting the Location, Asking for Permissions, Getting the Weather",
  "JavaScript, ReactJS, ReactNative, Expo",
  "React Native를 통해 실시간 날씨 정보를 제공하는 앱을 개발했습니다.",
  "기초적인 수준이지만 리액트 기본기, 리액트 네이티브에 대하여 이해하게 되었습니다",
  "Expo의 강력함을 몸소 느꼈습니다!"
];

export default () => (
  <PortfolioDetail
    title="Weather Native"
    GithubUrl="https://github.com/callmedevmomo/react-detail-coin-maker"
  >
    {children}
  </PortfolioDetail>
);
