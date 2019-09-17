import React from "react";
import PortfolioDetail from "Components/PortfolioDetail";
const children = [
  "Website CSS Clone Coding",
  "Flexbox, CSS grid, PostCSS, CSSNext, CSS4",
  "Flexbox",
  "CSS grid",
  "PostCss"
];

export default () => (
  <PortfolioDetail
    title="Basic CSS"
    GithubUrl="https://github.com/callmedevmomo/css-master"
  >
    {children}
  </PortfolioDetail>
);
