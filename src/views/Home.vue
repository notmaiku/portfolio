<template>
  <div>
    <body>
    <Header/> 
    <Navigation/>
    <div class="site-wrap">
      <h2>Michael Davis</h2>
      <p>
        Self-learning software developer and musician.
      </p>
      <p>
        Take awe at my work.
      </p>
      <p>
        Take your time, and explore my site. My journey. Here you will find my
        art in music, and my design skills as a front-end engineer.
      </p>
      <hr />
      <p>Some pictures to make this page feel less lonely. You can drag to slide.</p>
      <Slider style="width: 100%;"></Slider>
    </div>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Navigation from "@/components/Nav.vue";
import Header from "@/components/Header.vue";
import Slider from "@/components/Slider.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Header,
    Navigation,
    Slider
  }
};
</script>
