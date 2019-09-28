<template>
<body>
  <Header />
  <Navigation />
  <div class="site-wrap">
    <p> Dev is thinking of what to put here.</p>
    <img src="../assets/i/THONKING.png" alt="">
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

export default{
  name: "footer",
  components: {
    Navigation,
    Slider,
    Header,
    Footer
  }
};
</script>
