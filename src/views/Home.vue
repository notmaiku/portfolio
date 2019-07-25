<template>
<body>
  <Header />
  <Navigation />
  <div class="site-wrap">
    <h2>Michael Davis</h2>
    <p>Self-learning software developer.</p>
    <p>
      Junior Software Dev that had his first coding exprience while working on a wireless infrastructure app at Priamry Web Services LLC in Angular.
      Then became Wordpress Developer that sometimes debugged in Laravel.
    </p>
    <p>I'm a big JS programmer, in my sparetime I code projects in VueJS, and NodeJS. I've built a Discord bot with Mongo 👾, and am currently turning into a gacha game.</p>
    <p>
      You can find most of my stuff @
      <a href="https://github.com/notmaiku">Github</a> I'm starting to deprecate any old keys/tokens so I can open source them 🤞
    </p>
    <hr />
    <p>Some pictures to make this page feel less lonely. You can drag to slide.</p>
  </div>
  <Footer/>
</body>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Nav.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Slider from "@/components/Slider.vue";

export default {
  name: "home",
  components: {
    Header,
    Navigation,
    Footer,
    Slider
  }
};
</script>
