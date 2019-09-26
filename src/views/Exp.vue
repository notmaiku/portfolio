<template>
<body id="exp">
  <Header />
  <Navigation />
  <main class="site-wrap">
    <h4>Basically A Resume</h4>
    <h1>Full-Stack Stuff</h1>
    <h2>Work Experience</h2>
    <h3>Crier Media Group(Front-end): March 2019 - July 2019</h3>
    <ul>
      <li>For WordPress what I did was Design -> <strong>custom template HTML/CSS</strong> -> plug into WordPress.</li>
      <li>
        Working on the main site which is in Laravel/PHP. I styled the dashboard and <strong>proposed
        designs</strong>.
      </li>
      <li>
        Then worked out a readability script <strong>crawler</strong> (article without ads), and debug front end
        bugs.
      </li>
    </ul>
    <h3>Primary Web Services(Front-end): July 2018 - March 2019</h3>
    <ul>
      <li>
        At this company I was working on a high-profile wireless infrastructure
        application including <strong>live data visualization</strong> and <strong>micro-service ingestion</strong>.
      </li>
      <li>I implemented the dynamic charting, data display and <strong>routing modules</strong>, and built the application to be a multi-modular application in <strong>Angular 6/7</strong>.</li>
      <li>Agile workflow with client and built in a test-driven environment.</li>
    </ul>
    <h2>Side Projects</h2>
    <h3>Coding for fun (Backend): Ongoing</h3>
    <ul>
      <li>
        Developed a discord bot that manages a many to many relationships between users and
        servers. It’s written in NodeJS and uses <strong>Mongo/NoSQL</strong> for the database and is relational with
        level 1 embedding.
      </li>
      <li>
        The project is structured to be run based reading files, NodeJS “fs”, in a <strong>module.exports</strong> fashion.
        With each command having its own file in the respected, event, command folder.
      </li>
      <li>
        The bot is able to moderate and manager servers and play text trivia and gacha games per
        server. <strong>Map reduce</strong> and utilize <strong>Aggergation Pipeline</strong> for the results of the server or user.
      </li>
    </ul>
    <h3>Portfolio: Ongoing</h3>
    <ul>
      <li>
        I created <strong>Single Page Application</strong> written in <strong>VueJS</strong> , so it has Vue
        files written to be multi component
      </li>
      <li>It’s hosted in AWS, and it’s deployed in <strong> Docker</strong> with <strong>NGINX</strong>, which makes it redeployable anywhere</li>
      <li>For unknown routes there is a <strong>fallback</strong> error page, and for any existing route you can travel directly to by /route-name</li>
      <li>Nav that follows was built with pure CSS , and the carousel is a component</li>
    </ul>
    <h2>Education</h2>
    <h3>Northern Virginia Community College: August 2016 – May 2019</h3>
    <ul>
    <li>Information Technology Associate of Science Degree</li>
    </ul>
  </main>
</body>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Nav.vue";
import Header from "@/components/Header.vue";
import Slider from "@/components/Slider.vue";

export default {
  name: "exp",
  components: {
    Header,
    Navigation,
    Slider
  }
};
</script>

<style>
</style>
