import React from "react";
import PortfolioDetail from "Components/PortfolioDetail";
const children = [
  "Email / Facebook / Google Log in, User Profile, Like Photos, Comment Photos, Multiple Photos, Photo Upload, Direct Messages, Follow / Unfollow, Passwordless Login, Search Photo, Feed, iOS / Android Photo Select, iOS / Android Camera, Push Notifications, Prisma, Deployment to Heroku",
  "NodeJS, ES6, GraphQL Yoga, Prisma, Apollo, React Hooks, Expo, React Navigation, React Native, Sendgrid, Passport, AWS S3, Heroku, Netlify",
  "incomplete --coming soon",
  "incomplete --coming soon",
  "incomplete --coming soon"
];

export default () => (
  <PortfolioDetail
    title="Clone Instagram --ing .."
    GithubUrl="https://github.com/callmedevmomo/momogram"
  >
    {children}
  </PortfolioDetail>
);
