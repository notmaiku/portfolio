<template>
  <body>
    <Header />
    <Navigation />
    <div class="site-wrap">
      <h2>
        Here is some of the stuff I've built out, and I'm adding more and more
        ;)
      </h2>
      <h2>
        Click on the thing to go to the project/site, drag to look through!
      </h2>
      <img src="../assets/i/THONKING.png" alt />
      <carousel-3d :height="240">
        <slide v-for="(slide, index) in slides" :index="index" :key="index">
          <img
            v-bind:src="slide.url"
            :alt="slide.alt"
            v-on:click="goto(index)"
          />
        </slide>
      </carousel-3d>
      <p>Ehm, I know there's gray I'm just lazy on resizing the images</p>
    </div>
    <Footer />
  </body>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Nav.vue";
import Slider from "@/components/Slider.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  name: "footer",
  components: {
    Navigation,
    Slider,
    Header,
    Footer,
    Carousel3d,
    Slide
  },
  data() {
    return {
      slides: [
        {
          url: "https://i.ibb.co/r5CfHHx/pathfinder.png",
          alt: "my pathfinder site",
          website: "https://notmaiku.github.io/vue-pathfinder/"
        },
        {
          url: "https://i.ibb.co/mT6dmWN/colpac.png",
          alt: "A political site I helped build",
          website: "https://coloradorisingpac.org/"
        },
        {
          url: "https://i.ibb.co/FHFvxpy/healthsite.png",
          alt: "a healthcare site I helped build",
          website: "http://tehp.d4stats.com/"
        }
      ],
      slider: null
    };
  },
  methods: {
    goto: function(index) {
      window.location.href = this.slides[index].website;
    }
  }
};
</script>
