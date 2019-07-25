<template>
  <div>
    <div class="slider">
      <div v-for="(pic, index) in slides" :key="index" >
        {{slides.pic}}
      </div>
    </div>
  </div>
</template>

<script>
import * as jQuery from "jquery";
import "slick-carousel";
export default {
  name: "slider",
  data(){
    return{

    slides:[
      {pic: 'src/assets/i/1.png'},
      {pic: 'src/assets/i/1.png'},
      {pic: 'src/assets/i/1.png'}
    ]
    }
  },
  created() {
    $(document).ready(function() {
      $(".slider").slick({
        arrows: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        prevArrow: $(".prev"),
        nextArrow: $(".next")
      });
    });
  }
};
</script>

