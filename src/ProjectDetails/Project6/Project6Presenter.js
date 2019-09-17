import React from "react";
import PortfolioDetail from "Components/PortfolioDetail";
const children = [
  "DB API, Container Structrue, Presenter Structure, View popular movie or TV show information, Search function, Trailer view, Series information view ",
  "ES6, React, TypeScript, React Hooks, Axios, AJAX, Styled Component, React Router, React Context",
  "TMDB API를 이용해 SPA movie Application을 제작하였습니다.",
  "이 과정을 통해 React의 구조 및 lifecycle를 파악하게 되었습니다.",
  "SPA의 장단점에 대해 알게되었습니다."
];

export default () => (
  <PortfolioDetail
    title="Clone Netflix"
    GithubUrl="https://github.com/callmedevmomo/net-flix"
    webUrl="https://gallant-brattain-ac0c94.netlify.com"
  >
    {children}
  </PortfolioDetail>
);
