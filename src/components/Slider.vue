<template>
  <div class="slider">
    <carousel :per-page="1">
      <slide v-for="(slide, index) in slides" :key="index">
        <img v-bind:src="slide.url" :alt="slide.alt" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import * as jQuery from "jquery";
import "slick-carousel";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "slider",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      slides: [
        { url: "https://i.postimg.cc/NF43bXP3/1.png", alt: "flower" },
        {
          url: "https://i.postimg.cc/QChLpmSg/2.png",
          alt: "NA League of Legends Worlds game"
        },
        { url: "https://i.postimg.cc/Kv1XY4Tj/IMG-0516.jpg", alt: "Keyboard" }
      ],
      slider: null
    };
  },
  mounted() {
    // this.slider = $(".slider").slick({
    //   autoplay: true,
    //   speed: 2000,
    //   autoplaySpeed: 2000,
    //   prevArrow: $(".prev"),
    //   nextArrow: $(".next")
    // });
  }
};
</script>

