import React from "react";
import PortfolioDetail from "Components/PortfolioDetail";
const children = [
  "User Registration / Profile, Social Authentication, Superuser Admin Panel, Host Admin Panel, Guest Dashboard, 2-way Review System, Bookin and Reservation System, Direct Messaging, Room CRUD, Notification Email, Ajax Searching",
  "Python, Django, HTML5, Tailwind CSS, Gulp, ES6, Google Maps, Twilio, Mailgun, Boto, Heroku & AWS S3",
  "incomplete --coming soon",
  "incomplete --coming soon",
  "incomplete --coming soon"
];

export default () => (
  <PortfolioDetail title="Clone Airbnb -- Coming soon">
    {children}
  </PortfolioDetail>
);
