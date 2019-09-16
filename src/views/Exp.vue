<template>
<body class="exp">
  <Header />
  <Navigation />
  <main class="site-wrap">
    <h4>Resume</h4>
    <h1>Full-Stack Software Developer</h1>
    <h2>Technical</h2>
    <p>
      NodeJS, MongoDB, HTML/CSS, VueJS, VPS: Digital Ocean/AWS, SSH, MySQL, OSX, Swift,
      Windows, C#, JavaScript, Unity, WordPress, Adobe Photoshop, TypeScript, Angular 2+, Git, Vim
    </p>
    <h2>Side Projects</h2>
    <h3>Coding for fun (Backend): Ongoing</h3>
    <p>
      Developed a discord bot that manages a many to many relationships between users and
      servers . It’s written in NodeJS and uses Mongo/NoSQL for the database and is relational with
      level 1 embedding.
    </p>
    <p>
      The project is structured to be run based reading files, NodeJS “fs”, in a module.exports fashion.
      With each command having its own file in the respected, event, command folder.
    </p>
    <p>
      The bot is able to moderate and manager servers and play text trivia and gacha games per
      server. Query and display stats for the server or user, which is also optimized, based off timed
      events.
    </p>
    <h2>Work Experience</h2>
    <h3>Crier Media Group(Front-end): March - July</h3>
    <p>For WordPress what I did was Design -> code out HTML/CSS -> plug into WordPress.</p>
    <p>
      Working on the main site which is in Laravel/PHP. I styled the dashboard and proposed
      designs.
    </p>
    <p>
      Then worked out a readability script (article without ads), and debug front end
      bugs.
    </p>
    <h3>Intern Freelancing: July 2018 - Present</h3>
    <p>
      I’ve interned with Primary Web Services, LLC working on a high-profile wireless infrastructure
      application including live data visualization and micro-service ingestion.
    </p>
    <p>I implemented the dynamic charting, data display and routing modules, and built the application to be a multi modular application in Angular 6/7.</p>
    <p>Agile workflow with client and built in a test-driven environment.</p>
    <h2>Education</h2>
    <h3>Northern Virginia Community College: August 2016 – May 2019</h3>
    <p>Information Technology Associate of Science Degree</p>
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