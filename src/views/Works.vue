<template>
  <div class="home">
    <Slider/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Navigation from "@/components/Nav.vue";
import Slider from "@/components/Slider.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Navigation,
    Slider
  }
};
</script>
