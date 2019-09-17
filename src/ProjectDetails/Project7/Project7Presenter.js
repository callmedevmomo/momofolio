import React from "react";
import PortfolioDetail from "Components/PortfolioDetail";
const children = [
  "CoinApi, Use Container/Presenter pattern, ProTypes.shape, Loader",
  "React, TypeScript, React Hooks, Axios, AJAX, Styled Component, React Router",
  "API 데이터 처리 방법에 대해 고민했습니다.",
  "async / await를 적절하게 활용하려 노력했습니다.",
  "Route를 활용하여 다양한 기능을 구현하였습니다."
];

export default () => (
  <PortfolioDetail
    title="Coin Explorer"
    GithubUrl="https://github.com/callmedevmomo/react-detail-coin-maker"
    webUrl="https://callmedevmomo.github.io/react-detail-coin-maker"
  >
    {children}
  </PortfolioDetail>
);
