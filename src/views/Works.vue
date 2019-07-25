<template>
  <body>
    <Header/>
    <Navigation/>
    <div class="site-wrap">
    </div>  
    </body>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Nav.vue";
import Slider from "@/components/Slider.vue";
import Header from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    Navigation,
    Slider,
    Header
  }
};
</script>
