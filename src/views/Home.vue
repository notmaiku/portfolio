<template>
  <body class="home">
    <Header />
    <Navigation />
    <div class="site-wrap">
      <h2>Michael Davis</h2>
      <h3>Self-learning software developer :wq</h3>
      <div class="info">
        <p>
          Junior Software Dev that had his first coding exprience while working
          on a wireless infrastructure app at Primary Web Services LLC in
          Angular. Then became Wordpress Developer that sometimes debugged in
          Laravel.
        </p>
        <p>
          I'm a big JS programmer that spends a lot of free time in Vue, Mongo
          and NodeJS. My favorite project so far has been building a discord bot
          game.
        </p>
        <p>
          You can find most of my stuff @
          <a href="https://github.com/notmaiku">Github</a> I'm starting to
          deprecate any old keys/tokens so I can open source them 🤞
        </p>
      </div>
      <p>
        Some pictures to make this page feel less lonely. You can drag to slide.
      </p>

      <Slider />
    </div>
    <Footer />
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
