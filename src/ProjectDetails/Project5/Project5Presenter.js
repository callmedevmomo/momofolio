import React from "react";
import PortfolioDetail from "Components/PortfolioDetail";
const children = [
  "MVC, Routing, Templates, User Authentication, Facebook Login, Github Login, Video Upload, Video Recording, Search Video, AJAX Comments, View Registering, Video Recording with ES6, User Profile, Log In, Log Out, Database Models and Relationships, Deployment to Heroku",
  "NodeJS, ES6, Express, Pug, Passport, AJAX, Webpack, SCSS, MongoDB, Mongoose, AWS S3, Heroku, MongoDB Atlas",
  "프론트+백+배포를 포함 전체 싸이클을 돌리는 풀스택 개발을 경험했습니다.",
  "프로젝트를 진행하며 자바스크립트를 보다 깊게 공부했습니다.",
  "AWS와 Heroku에 대해 공부하고 이를 활용했습니다."
];

export default () => (
  <PortfolioDetail
    title="Clone Youtube"
    GithubUrl="https://github.com/callmedevmomo/wetube-master"
    webUrl="https://aqueous-mountain-42753.herokuapp.com/"
  >
    {children}
  </PortfolioDetail>
);
