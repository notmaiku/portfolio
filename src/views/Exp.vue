<template>
  <body id="exp">
    <Header />
    <Navigation />
    <main class="site-wrap">
      <h4>Basically A Resume</h4>
      <h1>Full-Stack Stuff</h1>
      <h2>Work Experience</h2>
      <h3>
        Nolij Consulting(Data Visualization Developer): Dec 2019 – Present
      </h3>
      <ul>
        <li>
          I designed and developed a
          dashboard in VueJS without Node, and its purpose is to host a lot of
          analytics of architecture data.
        </li>
        <li>
          Prepared reports and achieved milestones to bring in new technology.
        </li>
        <li>
	   Created a processe for Cross Compatability with IE 11 by creating custom PolyFills, implementing library solutions such as babel and corejs.
        </li>
        <li>
          Developed visualizations and created a system to host embedded BI Tool charts.
        </li>
      </ul>
      <h3>Crier Media Group(Front-end): March 2019 - July 2019</h3>
      <ul>
        <li>
	Designed and Developed custom wordpress templates and plugins.
        </li>
        <li>
          Developed tab features for Laravel Dashboard 
        </li>
        <li>
          Developed a readability script <strong>crawler</strong> (article
          without ads), and debug front end bugs.
        </li>
      </ul>
      <h3>Primary Web Services(Front-end): July 2018 - March 2019</h3>
      <ul>
        <li>
          Developed on a  high-profile wireless
          infrastructure application including
          <strong>live data visualization</strong> and
          <strong>micro-service ingestion</strong>.
        </li>
        <li>
          I implemented the dynamic charting, data display and
          <strong>routing modules</strong>, and built the application to be a
          multi-modular application in <strong>Angular 6/7</strong>.
        </li>
        <li>
          Worked in an agile workflow with client and built in a test-driven environment.
        </li>
      </ul>
      <h2>Side Projects</h2>
      <h3>Coding for fun (Backend): Ongoing</h3>
      <ul>
        <li>
          Developed a discord bot that manages a many to many relationships
          between users and servers. It’s written in NodeJS and uses
          <strong>Mongo/NoSQL</strong> for the database and is relational with
          level 1 embedding.
        </li>
        <li>
          The project is structured to be run based reading files, NodeJS “fs”,
          in a <strong>module.exports</strong> fashion. With each command having
          its own file in the respected, event, command folder.
        </li>
        <li>
          The bot is able to moderate and manager servers and play text trivia
          and gacha games per server. <strong>Map reduce</strong> and utilize
          <strong>Aggergation Pipeline</strong> for the results of the server or
          user.
        </li>
      </ul>
      <h3>Portfolio: Ongoing</h3>
      <ul>
        <li>
          I created <strong>Single Page Application</strong> written in
          <strong>VueJS</strong> , so it has Vue files written to be multi
          component
        </li>
        <li>
          It’s hosted in AWS, and it’s deployed in <strong> Docker</strong> with
          <strong>NGINX</strong>, which makes it redeployable anywhere
        </li>
        <li>
          For unknown routes there is a <strong>fallback</strong> error page,
          and for any existing route you can travel directly to by /route-name
        </li>
        <li>
          Nav that follows was built with pure CSS , and the carousel is a
          component
        </li>
      </ul>
      <h2>Education</h2>
      <h3>Northern Virginia Community College: August 2016 – May 2019</h3>
      <ul>
        <li>Information Technology Associate of Science Degree</li>
      </ul>
    </main>
    <Footer />
  </body>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Nav.vue";
import Header from "@/components/Header.vue";
import Slider from "@/components/Slider.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "resume",
  components: {
    Header,
    Navigation,
    Footer,
    Slider
  }
};
</script>
